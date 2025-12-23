import { NextRequest, NextResponse } from 'next/server';
import { createOrder, createOrderItems, createUser, updateOrderCashfreeId, getOrderByOrderId } from '@/lib/db/queries';
import { sendOrderNotification } from '@/lib/telegram/bot';
import { validateCustomerData, validateOrderId, validateAmount, validateCartItem } from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, amount, customer, cartItems } = body;

    // Validate required fields
    if (!orderId || !amount || !customer || !cartItems) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, amount, customer, cartItems' },
        { status: 400 }
      );
    }

    // Validate order ID
    const orderIdValidation = validateOrderId(orderId);
    if (!orderIdValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid order ID', details: orderIdValidation.errors },
        { status: 400 }
      );
    }

    // Validate amount
    const amountValidation = validateAmount(amount);
    if (!amountValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid amount', details: amountValidation.errors },
        { status: 400 }
      );
    }

    // Validate customer data
    const customerValidation = validateCustomerData(customer);
    if (!customerValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid customer data', details: customerValidation.errors },
        { status: 400 }
      );
    }

    // Validate cart items
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Cart items must be a non-empty array' },
        { status: 400 }
      );
    }

    const cartValidationErrors: string[] = [];
    for (let i = 0; i < cartItems.length; i++) {
      const itemValidation = validateCartItem(cartItems[i]);
      if (!itemValidation.isValid) {
        cartValidationErrors.push(`Item ${i + 1}: ${itemValidation.errors.join(', ')}`);
      }
    }

    if (cartValidationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Invalid cart items', details: cartValidationErrors },
        { status: 400 }
      );
    }

    // Use sanitized customer data
    const sanitizedCustomer = customerValidation.sanitized;
    const customerId = sanitizedCustomer?.id;
    const customerEmail = sanitizedCustomer?.email;
    const customerPhone = sanitizedCustomer?.phone;
    const customerName = sanitizedCustomer?.name;

    // Calculate subtotal from cart items
    const subtotal = cartItems.reduce((sum: number, item: any) => {
      return sum + (item.discountedPrice * item.quantity);
    }, 0);
    const shippingFee = 15; // Fixed shipping fee
    const totalAmount = subtotal + shippingFee;

    // Verify calculated total matches provided amount
    if (Math.abs(totalAmount - amount) > 0.01) {
      return NextResponse.json(
        { error: 'Amount mismatch', calculated: totalAmount, provided: amount },
        { status: 400 }
      );
    }

    // Check if order already exists
    const existingOrder = await getOrderByOrderId(orderId);
    if (existingOrder) {
      return NextResponse.json(
        { error: 'Order already exists', orderId },
        { status: 409 }
      );
    }

    // Create or get user
    let userId: number | null = null;
    if (customerEmail) {
      try {
        const user = await createUser(customerEmail, customerPhone, customerName);
        userId = user.id;
      } catch (userError) {
        console.error('Failed to create/update user:', userError);
        // Continue without user ID for guest checkout
      }
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
      tax_amount: 0, // No tax for now
      discount_amount: 0, // No discount for now
      total_amount: totalAmount,
      currency: 'INR',
      status: 'pending' as const,
      payment_status: 'pending' as const,
      cashfree_order_id: null,
      tracking_number: null,
      notes: null,
      admin_notes: null,
    };

    const order = await createOrder(orderData);

    // Create order items
    const orderItems = cartItems.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      product_title: item.title,
      product_slug: item.slug,
      product_size: null, // No size variant for now
      price: item.price,
      discounted_price: item.discountedPrice,
      quantity: item.quantity,
      product_image: item.imgs?.thumbnails?.[0] || null,
      product_data: {
        // Store complete product info at time of order
        title: item.title,
        slug: item.slug,
        images: item.imgs,
        sizes: item.sizes,
        description: item.description,
        beejMantra: item.beejMantra,
        keyFeatures: item.keyFeatures,
        benefits: item.benefits,
        detail: item.detail
      }
    }));

    await createOrderItems(orderItems);

    // Create a valid customer_id for Cashfree (alphanumeric with underscores/hyphens only)
    const createCashfreeCustomerId = (email: string): string => {
      // Replace @ and . with underscores, remove other special characters
      return email
        .toLowerCase()
        .replace(/@/g, '_at_')
        .replace(/\./g, '_')
        .replace(/[^a-z0-9_-]/g, '')
        .substring(0, 50); // Limit length
    };

    const cashfreeCustomerId = createCashfreeCustomerId(customerEmail);
    console.log("🆔 Generated Cashfree Customer ID:", cashfreeCustomerId);

    // Get base URL - use HTTPS for Cashfree compatibility
    const getBaseUrl = () => {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
      
      // If we have a site URL, use it
      if (siteUrl) {
        // Ensure it's HTTPS for Cashfree (except for localhost in development)
        if (siteUrl.startsWith('http://localhost')) {
          // For localhost development, we'll use a placeholder HTTPS URL
          // In production, this should be your actual domain
          return 'https://bestrudraksha.com'; // Use your actual domain
        }
        return siteUrl.startsWith('https://') ? siteUrl : `https://${siteUrl.replace('http://', '')}`;
      }
      
      // Default fallback - use your actual domain
      return 'https://bestrudraksha.com';
    };

    const baseUrl = getBaseUrl();
    console.log("🌐 Using base URL for Cashfree:", baseUrl);

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
          customer_id: cashfreeCustomerId, // Use properly formatted customer ID
          customer_email: customerEmail,
          customer_phone: customerPhone || '9999999999', // Provide default if no phone
          customer_name: customerName || 'Customer', // Provide default name
        },
        order_meta: {
          return_url: `${baseUrl}/payment-success?order_id=${orderId}`,
          notify_url: `${baseUrl}/api/webhook`,
        },
      }),
    });

    const cashfreeData = await cashfreeResponse.json();
    console.log("💳 Cashfree Response Status:", cashfreeResponse.status);
    console.log("💳 Cashfree Response:", cashfreeData);

    if (!cashfreeResponse.ok) {
      console.error("❌ Cashfree API Error:", cashfreeData);
      return NextResponse.json(
        { 
          error: 'Failed to create payment order', 
          details: cashfreeData.message || 'Cashfree API error',
          cashfree_error: cashfreeData 
        },
        { status: 400 }
      );
    }

    if (!cashfreeData.payment_session_id) {
      console.error("❌ No payment session ID received:", cashfreeData);
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
      console.error('❌ Failed to send Telegram notification:', telegramError);
      // Don't fail the request if Telegram fails
    }

    return NextResponse.json(
      { payment_session_id: cashfreeData.payment_session_id },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Create Order Error:', error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

