# Webhook Testing Guide

## ✅ Issues Fixed

All webhook API errors have been resolved:

1. **Buffer Type Issue**: Fixed signature verification using `Uint8Array` for `crypto.timingSafeEqual()`
2. **Missing Payment Fields**: Added `refund_amount` and `refund_reason` to payment creation
3. **Invalid Order Status**: Changed `'paid'` to `'confirmed'` to match schema
4. **Unused Imports**: Cleaned up TypeScript warnings

## 🧪 Testing the Webhook

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Webhook Processing
```bash
node test-webhook.js
```

### 3. Manual Testing with cURL
```bash
curl -X POST http://localhost:3000/api/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "event": "PAYMENT_SUCCESS",
    "data": {
      "order": {
        "order_id": "ORD-TEST-123456789"
      },
      "payment": {
        "payment_id": "pay_test_123456789",
        "payment_amount": "1515.00",
        "payment_currency": "INR",
        "payment_method": "upi",
        "payment_session_id": "session_test_123",
        "cf_payment_id": "cf_test_123"
      }
    }
  }'
```

## 🔧 Production Configuration

### Required Environment Variables
```env
# Webhook Security (Production Only)
CASHFREE_WEBHOOK_SECRET=your_webhook_secret_from_cashfree_dashboard

# Telegram Notifications
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### Webhook URL for Cashfree Dashboard
```
https://yourdomain.com/api/webhook
```

## 📋 Webhook Events Handled

- ✅ **PAYMENT_SUCCESS**: Updates order status to 'confirmed', creates payment record, sends Telegram notification
- ✅ **PAYMENT_FAILED**: Updates order status to 'pending', logs failure reason, sends failure notification
- ✅ **PAYMENT_USER_DROPPED**: Logs user abandonment (order remains pending)

## 🔍 Monitoring

Check your application logs for:
- `📨 Webhook received:` - Incoming webhook events
- `✅ Payment Success processed:` - Successful payment processing
- `⚠️ Payment Failed processed:` - Failed payment handling
- `❌ Invalid webhook signature` - Security issues (production only)

## 🚨 Security Notes

- Signature verification is **disabled in development** for easier testing
- **Enable CASHFREE_WEBHOOK_SECRET** in production for security
- All webhook payloads are logged for debugging
- Failed signature verification returns 401 status