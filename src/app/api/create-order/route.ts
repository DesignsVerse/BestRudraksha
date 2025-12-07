import { NextRequest, NextResponse } from 'next/server';
import { createOrder, createOrderItems, createUser, updateOrderCashfreeId, getOrderByOrderId } from '@/lib/db/queries';
import { sendOrderNotification } from '@/lib/telegram/bot';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, amount, customer, cartItems } = body;

    if (!orderId || !amount || !customer || !cartItems) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, amount, customer, cartItems' },
        { status: 400 }
      );
    }

    const customerId = customer?.id;
    const customerEmail = customer?.email;
    const customerPhone = customer?.phone;
    const customerName = customer?.name;

    // Calculate subtotal from cart items
    const subtotal = cartItems.reduce((sum: number, item: any) => {
      return sum + (item.discountedPrice * item.quantity);
    }, 0);
    const shippingFee = 15; // Fixed shipping fee
    const totalAmount = subtotal + shippingFee;

    // Create or get user
    let userId: number | null = null;
    if (customerEmail) {
      const user = await createUser(customerEmail, customerPhone, customerName);
      userId = user.id;
    }

    // Create order in database
    const orderData = {
      order_id: orderId,
      user_id: userId,
      customer_email: customerEmail,
      customer_phone: customerPhone || null,
      customer_name: customerName || null,
      shipping_address: null, // Will be updated later if needed
      billing_address: null,
      subtotal: subtotal,
      shipping_fee: shippingFee,
      total_amount: totalAmount,
      currency: 'INR',
      status: 'pending' as const,
      payment_status: 'pending' as const,
      cashfree_order_id: null,
      notes: null,
    };

    const order = await createOrder(orderData);

    // Create order items
    const orderItems = cartItems.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      product_title: item.title,
      product_slug: item.slug,
      price: item.price,
      discounted_price: item.discountedPrice,
      quantity: item.quantity,
      product_image: item.imgs?.thumbnails?.[0] || null,
    }));

    await createOrderItems(orderItems);

    // Create Cashfree order
    const cashfreeResponse = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'x-client-id': process.env.CASHFREE_CLIENT_ID!,
        'x-client-secret': process.env.CASHFREE_CLIENT_SECRET!,
        'Content-Type': 'application/json',
        'x-api-version': '2022-09-01',
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: customerId || customerEmail,
          customer_email: customerEmail,
          customer_phone: customerPhone,
        },
      }),
    });

    const cashfreeData = await cashfreeResponse.json();
    console.log("Cashfree Response:", cashfreeData);

    if (!cashfreeData.payment_session_id) {
      return NextResponse.json(
        { error: 'Order token not received', data: cashfreeData },
        { status: 400 }
      );
    }

    // Update order with Cashfree order ID
    if (cashfreeData.order_id) {
      await updateOrderCashfreeId(orderId, cashfreeData.order_id);
    }

    // Send Telegram notification for new order
    try {
      await sendOrderNotification({
        orderId,
        customerName: customerName || undefined,
        customerEmail: customerEmail,
        customerPhone: customerPhone || undefined,
        items: cartItems.map((item: any) => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          discountedPrice: item.discountedPrice,
        })),
        subtotal,
        shippingFee,
        totalAmount: totalAmount,
        paymentStatus: 'pending',
        orderStatus: 'pending',
      });
    } catch (telegramError) {
      console.error('Failed to send Telegram notification:', telegramError);
      // Don't fail the request if Telegram fails
    }

    return NextResponse.json(
      { payment_session_id: cashfreeData.payment_session_id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Create Order Error:', error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

