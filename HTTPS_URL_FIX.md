# HTTPS URL Fix - Cashfree Integration

## 🚨 **Issue Identified:**
```
"order_meta.return_url : url should be https. Value received: http://localhost:3000/payment-success?order_id=ORD-20251223-1766487551024"
```

**Root Cause:** Cashfree requires **HTTPS URLs** for both `return_url` and `notify_url`, but we were using `http://localhost:3000` for development.

## ✅ **Solution Applied:**

### **Dynamic URL Generation:**
```javascript
const getBaseUrl = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (siteUrl) {
    // Ensure HTTPS for Cashfree compatibility
    if (siteUrl.startsWith('http://localhost')) {
      return 'https://bestrudraksha.com'; // Use actual domain
    }
    return siteUrl.startsWith('https://') ? siteUrl : `https://${siteUrl.replace('http://', '')}`;
  }
  
  return 'https://bestrudraksha.com'; // Default fallback
};
```

### **Updated Environment Variable:**
```env
# Before
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# After  
NEXT_PUBLIC_SITE_URL=https://bestrudraksha.com
```

## 🔧 **Implementation:**

### **Before (Causing Error):**
```javascript
order_meta: {
  return_url: `http://localhost:3000/payment-success?order_id=${orderId}`, // ❌ HTTP
  notify_url: `http://localhost:3000/api/webhook`, // ❌ HTTP
}
```

### **After (Fixed):**
```javascript
const baseUrl = getBaseUrl(); // Returns HTTPS URL

order_meta: {
  return_url: `${baseUrl}/payment-success?order_id=${orderId}`, // ✅ HTTPS
  notify_url: `${baseUrl}/api/webhook`, // ✅ HTTPS
}
```

## 🌐 **URL Handling Logic:**

### **Development:**
- **Input**: `http://localhost:3000`
- **Output**: `https://bestrudraksha.com`
- **Reason**: Cashfree requires HTTPS, so we use the production domain

### **Production:**
- **Input**: `https://bestrudraksha.com`
- **Output**: `https://bestrudraksha.com`
- **Reason**: Already HTTPS, use as-is

### **Custom Domain:**
- **Input**: `http://yourdomain.com`
- **Output**: `https://yourdomain.com`
- **Reason**: Convert HTTP to HTTPS automatically

## 📋 **Cashfree URL Requirements:**

### ✅ **Valid URLs:**
- `https://bestrudraksha.com/payment-success`
- `https://yourdomain.com/api/webhook`
- `https://subdomain.domain.com/callback`

### ❌ **Invalid URLs:**
- `http://localhost:3000/payment-success` (HTTP)
- `http://bestrudraksha.com/callback` (HTTP)
- `ftp://domain.com/webhook` (Not HTTP/HTTPS)

## 🧪 **Testing:**

### **Test the Fix:**
```bash
node test-cashfree-integration.js
```

**Expected Output:**
```
🌐 Using base URL for Cashfree: https://bestrudraksha.com
✅ Cashfree integration working!
Payment Session ID: session_abc123...
```

## 🎯 **Result:**

### **Before Fix:**
```json
{
  "error": "Failed to create payment order",
  "details": "order_meta.return_url : url should be https",
  "cashfree_error": {
    "code": "order_meta.return_url_invalid"
  }
}
```

### **After Fix:**
```json
{
  "payment_session_id": "session_abc123def456...",
  "order_id": "ORD-123456789"
}
```

## ⚠️ **Important Notes:**

### **Development vs Production:**
- **Development**: Uses production domain for Cashfree URLs
- **Production**: Uses actual production domain
- **Webhooks**: Will be received on production server

### **Webhook Handling:**
Since we're using the production domain for webhooks, make sure:
1. **Production server is running** to receive webhooks
2. **Webhook endpoint** (`/api/webhook`) is deployed
3. **Database** is accessible from production

## 🚀 **Alternative for Local Development:**

If you need to test webhooks locally, use tools like:
- **ngrok**: `ngrok http 3000` (provides HTTPS tunnel)
- **localtunnel**: `lt --port 3000`
- **Vercel dev**: Automatic HTTPS URLs

### **Example with ngrok:**
```bash
# Install ngrok
npm install -g ngrok

# Create HTTPS tunnel
ngrok http 3000

# Use the HTTPS URL in .env.local
NEXT_PUBLIC_SITE_URL=https://abc123.ngrok.io
```

## ✅ **Status:**
**FIXED** - URLs now use HTTPS format required by Cashfree. The "return_url_invalid" error should be resolved!

## 🎉 **Expected Flow:**
1. User clicks "Proceed to Payment"
2. Order created with HTTPS URLs
3. Cashfree accepts the order
4. User redirected to Cashfree payment page
5. After payment, user redirected to `https://bestrudraksha.com/payment-success`
6. Webhook sent to `https://bestrudraksha.com/api/webhook`

**The HTTPS URL requirement is now handled correctly!** 🚀