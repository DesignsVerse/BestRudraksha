// Simple test to verify order creation works
// Run this with: node test-order-creation.js

const testOrderData = {
  orderId: `ORD-${Date.now()}`,
  amount: 1515,
  customer: {
    id: 'test-customer',
    email: 'test@example.com',
    phone: '+919876543210',
    name: 'Test Customer'
  },
  cartItems: [
    {
      id: 1,
      title: '1 Mukhi Rudraksha - Original Nepali Ek Mukhi Rudraksha',
      slug: '1-mukhi-rudraksha',
      price: 1800,
      discountedPrice: 1500,
      quantity: 1,
      imgs: {
        thumbnails: ['/images/products/1-14-mukhi/1.png']
      }
    }
  ]
};

async function testOrderCreation() {
  try {
    console.log('🧪 Testing order creation...');
    
    const response = await fetch('http://localhost:3000/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testOrderData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Order creation successful!');
      console.log('Payment session ID:', result.payment_session_id);
    } else {
      console.log('❌ Order creation failed:');
      console.log('Status:', response.status);
      console.log('Error:', result);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testOrderCreation();
}