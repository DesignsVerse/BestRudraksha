// Simple test to verify webhook processing works
// Run this with: node test-webhook.js

const testWebhookData = {
  event: "PAYMENT_SUCCESS",
  data: {
    order: {
      order_id: "ORD-TEST-123456789"
    },
    payment: {
      payment_id: "pay_test_123456789",
      payment_amount: "1515.00",
      payment_currency: "INR",
      payment_method: "upi",
      payment_session_id: "session_test_123",
      cf_payment_id: "cf_test_123",
      payment_message: "Payment successful"
    }
  }
};

async function testWebhook() {
  try {
    console.log('🧪 Testing webhook processing...');
    
    const response = await fetch('http://localhost:3000/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testWebhookData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Webhook processing successful!');
      console.log('Result:', result);
    } else {
      console.log('❌ Webhook processing failed:');
      console.log('Status:', response.status);
      console.log('Error:', result);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testWebhook();
}