// pages/api/webhook.js

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end("Method not allowed");
  
    const signature = req.headers["x-cashfree-signature"];
    const body = JSON.stringify(req.body);
  
    // ⚠️ OPTIONAL: Validate webhook signature (recommended)
    // Use HMAC-SHA256 with your webhook secret
  
    const event = req.body.event;
  
    if (event === "PAYMENT_SUCCESS") {
      const orderId = req.body.data.order.order_id;
      const paymentId = req.body.data.payment.payment_id;
  
      // ✅ Mark order as paid in your DB
      // E.g., updateOrderStatus(orderId, "PAID")
  
      console.log("Payment Success:", orderId, paymentId);
    }
  
    res.status(200).json({ success: true });
  }
  