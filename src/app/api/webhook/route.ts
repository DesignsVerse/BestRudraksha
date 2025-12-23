import { NextRequest, NextResponse } from 'next/server';
import { 
  getOrderByOrderId, 
  updateOrderStatus, 
  createPayment, 
  getPaymentByCashfreePaymentId,
  updatePaymentStatus
} from '@/lib/db/queries';
import { sendPaymentNotification } from '@/lib/telegram/bot';
import crypto from 'crypto';

// Verify Cashfree webhook signature
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  if (!secret) {
    console.warn('⚠️ CASHFREE_WEBHOOK_SECRET not set. Skipping signature verification.');
    return true; // Allow in development
  }
  
  try {
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
    
    // Convert to Uint8Array for timingSafeEqual
    const signatureBuffer = new Uint8Array(Buffer.from(signature, 'hex'));
    const expectedBuffer = new Uint8Array(Buffer.from(expectedSignature, 'hex'));
    
    return crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    const signature = req.headers.get("x-cashfree-signature");
    const rawBody = await req.text();
    
    // Verify webhook signature in production
    if (process.env.NODE_ENV === 'production' && signature) {
      const webhookSecret = process.env.CASHFREE_WEBHOOK_SECRET;
      if (!verifyWebhookSignature(rawBody, signature, webhookSecret || '')) {
        console.error('❌ Invalid webhook signature');
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }
    }

    let body: any;
    try {
      body = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('❌ Invalid JSON payload:', parseError);
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const event = body.event;
    const eventData = body.data;

    console.log("📨 Webhook received:", event, eventData);

    if (event === "PAYMENT_SUCCESS") {
      const orderId = eventData.order?.order_id;
      const paymentId = eventData.payment?.payment_id;
      const paymentData = eventData.payment;
      const orderData = eventData.order;

      if (!orderId || !paymentId) {
        console.error("❌ Missing order_id or payment_id in webhook");
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      // Get order from database
      const order = await getOrderByOrderId(orderId);
      
      if (!order) {
        console.error(`❌ Order not found: ${orderId}`);
        return NextResponse.json(
          { error: "Order not found" },
          { status: 404 }
        );
      }

      // Check if payment already exists
      let payment = await getPaymentByCashfreePaymentId(paymentId);

      if (!payment) {
        // Create new payment record
        payment = await createPayment({
          order_id: order.id,
          cashfree_order_id: orderData?.order_id || null,
          cashfree_payment_id: paymentId,
          payment_session_id: paymentData?.payment_session_id || null,
          amount: parseFloat(paymentData?.payment_amount || order.total_amount.toString()),
          currency: paymentData?.payment_currency || 'INR',
          payment_method: paymentData?.payment_method || null,
          payment_status: 'success',
          transaction_id: paymentData?.cf_payment_id || paymentData?.payment_id || null,
          failure_reason: null,
          refund_amount: 0,
          refund_reason: null,
          payment_data: paymentData,
        });
      } else {
        // Update existing payment
        payment = await updatePaymentStatus(
          paymentId,
          'success',
          paymentData?.cf_payment_id || paymentData?.payment_id || null,
          paymentData
        );
      }

      // Update order status
      await updateOrderStatus(orderId, 'confirmed', 'paid');

      // Send Telegram payment notification
      try {
        await sendPaymentNotification({
          orderId,
          paymentStatus: 'success',
          paymentId,
          amount: parseFloat(paymentData?.payment_amount || order.total_amount.toString()),
          customerEmail: order.customer_email,
        });
      } catch (telegramError) {
        console.error('❌ Failed to send Telegram payment notification:', telegramError);
      }

      console.log("✅ Payment Success processed:", orderId, paymentId);
    } 
    else if (event === "PAYMENT_FAILED") {
      const orderId = eventData.order?.order_id;
      const paymentId = eventData.payment?.payment_id;
      const paymentData = eventData.payment;
      const failureReason = eventData.payment?.payment_message || 'Payment failed';

      if (orderId && paymentId) {
        const order = await getOrderByOrderId(orderId);
        
        if (order) {
          // Create or update payment record
          let payment = await getPaymentByCashfreePaymentId(paymentId);
          
          if (!payment) {
            payment = await createPayment({
              order_id: order.id,
              cashfree_order_id: eventData.order?.order_id || null,
              cashfree_payment_id: paymentId,
              payment_session_id: paymentData?.payment_session_id || null,
              amount: parseFloat(paymentData?.payment_amount || order.total_amount.toString()),
              currency: paymentData?.payment_currency || 'INR',
              payment_method: paymentData?.payment_method || null,
              payment_status: 'failed',
              transaction_id: null,
              failure_reason: failureReason,
              refund_amount: 0,
              refund_reason: null,
              payment_data: paymentData,
            });
          } else {
            payment = await updatePaymentStatus(paymentId, 'failed', undefined, paymentData);
          }

          // Update order payment status
          await updateOrderStatus(orderId, 'pending', 'failed');

          // Send Telegram payment failure notification
          try {
            await sendPaymentNotification({
              orderId,
              paymentStatus: 'failed',
              paymentId,
              amount: parseFloat(paymentData?.payment_amount || order.total_amount.toString()),
              customerEmail: order.customer_email,
              failureReason: failureReason,
            });
          } catch (telegramError) {
            console.error('❌ Failed to send Telegram payment failure notification:', telegramError);
          }
          
          console.log("⚠️ Payment Failed processed:", orderId, paymentId);
        }
      }
    }
    else if (event === "PAYMENT_USER_DROPPED") {
      // User closed payment window
      const orderId = eventData.order?.order_id;
      if (orderId) {
        console.log("👤 Payment dropped by user:", orderId);
        // Order remains in pending status
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("💥 Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

