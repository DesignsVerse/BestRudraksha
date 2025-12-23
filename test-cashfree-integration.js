// Test Cashfree integration
// Run with: node test-cashfree-integration.js

require('dotenv').config({ path: '.env.local' });

// Function to create valid Cashfree customer ID
function createCashfreeCustomerId(email) {
  return email
    .toLowerCase()
    .replace(/@/g, '_at_')
    .replace(/\./g, '_')
    .replace(/[^a-z0-9_-]/g, '')
    .substring(0, 50);
}

async function testCashfreeIntegration() {
  console.log('🧪 Testing Cashfree Integration...\n');

  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log('CASHFREE_CLIENT_ID:', process.env.CASHFREE_CLIENT_ID ? '✅ Set' : '❌ Missing');
  console.log('CASHFREE_CLIENT_SECRET:', process.env.CASHFREE_CLIENT_SECRET ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_SITE_URL:', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
  console.log('');

  if (!process.env.CASHFREE_CLIENT_ID || !process.env.CASHFREE_CLIENT_SECRET) {
    console.error('❌ Missing Cashfree credentials!');
    return;
  }

  // Test customer ID generation
  const testEmails = [
    'test@example.com',
    'user.name@gmail.com',
    'customer+tag@domain.co.in',
    'messageakshat@gmail.com'
  ];

  console.log('🆔 Testing Customer ID Generation:');
  testEmails.forEach(email => {
    const customerId = createCashfreeCustomerId(email);
    console.log(`${email} → ${customerId}`);
  });
  console.log('');

  // Test order creation
  const testEmail = 'messageakshat@gmail.com';
  const testCustomerId = createCashfreeCustomerId(testEmail);
  
  const testOrderData = {
    order_id: `TEST-${Date.now()}`,
    order_amount: 100.00,
    order_currency: 'INR',
    customer_details: {
      customer_id: testCustomerId,
      customer_email: testEmail,
      customer_phone: '9999999999',
      customer_name: 'Test Customer',
    },
    order_meta: {
      return_url: 'http://localhost:3000/payment-success',
      notify_url: 'http://localhost:3000/api/webhook',
    },
  };

  console.log('📤 Sending test order to Cashfree...');
  console.log('Order Data:', JSON.stringify(testOrderData, null, 2));
  console.log('');

  try {
    const response = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'x-client-id': process.env.CASHFREE_CLIENT_ID,
        'x-client-secret': process.env.CASHFREE_CLIENT_SECRET,
        'Content-Type': 'application/json',
        'x-api-version': '2022-09-01',
      },
      body: JSON.stringify(testOrderData),
    });

    const result = await response.json();
    
    console.log('📥 Cashfree Response:');
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    console.log('');

    if (response.ok && result.payment_session_id) {
      console.log('✅ Cashfree integration working!');
      console.log('Payment Session ID:', result.payment_session_id);
    } else {
      console.log('❌ Cashfree integration failed!');
      if (result.message) {
        console.log('Error:', result.message);
      }
    }

  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testCashfreeIntegration();
}