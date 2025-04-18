import axios from 'axios';

export async function POST(request) {
  try {
    const { amount, customerId, customerEmail, customerPhone } = await request.json();

    const orderData = {
      order_amount: parseFloat(amount),
      order_currency: 'INR',
      order_note: 'E-commerce order',
      customer_details: {
        customer_id: customerId,
        customer_email: customerEmail,
        customer_phone: customerPhone,
      },
    };

    const response = await axios.post(
      process.env.CASHFREE_ENV === 'TEST'
        ? 'https://sandbox.cashfree.com/pg/orders'
        : 'https://api.cashfree.com/pg/orders',
      orderData,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2023-08-01',
          'x-client-id': process.env.CASHFREE_APP_ID,
          'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        },
      }
    );

    return new Response(
      JSON.stringify({
        orderId: response.data.order_id,
        paymentSessionId: response.data.payment_session_id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Order creation failed:', error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to create order' }),
      { status: 500 }
    );
  }
}