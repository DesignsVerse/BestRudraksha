# Telegram Bot Setup Guide for BestRudraksha

This guide will help you set up a Telegram bot to receive order notifications and customer enquiries.

## Features

- ✅ **Order Notifications**: Get notified when customers place orders with all details (name, price, quantity, address)
- ✅ **Payment Notifications**: Get notified when payments succeed or fail
- ✅ **Customer Enquiries**: Receive customer enquiries from the contact form

## Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat with BotFather
3. Send `/newbot` command
4. Follow the prompts:
   - Choose a name for your bot (e.g., "BestRudraksha Orders")
   - Choose a username (must end with `bot`, e.g., `bestrudraksha_orders_bot`)
5. BotFather will give you a **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
6. **Save this token** - you'll need it for the next step

## Step 2: Get Your Chat ID

You need to get your Telegram Chat ID to receive messages:

### Option A: Using @userinfobot (Easiest)

1. Search for **@userinfobot** on Telegram
2. Start a chat with it
3. It will send you your Chat ID (a number like `123456789`)
4. **Save this Chat ID**

### Option B: Using @getidsbot

1. Search for **@getidsbot** on Telegram
2. Start a chat with it
3. It will show your Chat ID

### Option C: Manual Method

1. Send a message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for `"chat":{"id":123456789}` in the response
4. That number is your Chat ID

## Step 3: Add Environment Variables

Add these to your `.env.local` file:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_from_botfather
TELEGRAM_CHAT_ID=your_chat_id_number
```

**Example:**
```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Step 4: Test the Bot

After setting up, restart your Next.js server:

```bash
npm run dev
```

The bot will automatically:
- Send notifications when orders are placed
- Send notifications when payments succeed/fail
- Send notifications when customers submit enquiries

## What You'll Receive

### Order Notification Example:
```
🛒 New Order Received!

📋 Order ID: ORD-20241207-1234567890

👤 Customer Details:
• Name: John Doe
• Email: john@example.com
• Phone: +919876543210

🛍️ Order Items:
1. 1 Mukhi Rudraksha
   Qty: 2 | Price: ₹1,500 | Total: ₹3,000

2. 5 Mukhi Rudraksha
   Qty: 1 | Price: ₹800 | Total: ₹800

💰 Pricing:
• Subtotal: ₹3,800
• Shipping: ₹15
• Total: ₹3,815

📍 Shipping Address:
John Doe, 123 Main St, Mumbai, Maharashtra, PIN: 400001

📊 Status: Pending | Payment: Pending

⏰ 12/07/2024, 3:45:30 PM
```

### Payment Notification Example:
```
✅ Payment Successful!

📋 Order ID: ORD-20241207-1234567890
💳 Payment ID: pay_abc123xyz
💰 Amount: ₹3,815
👤 Customer: john@example.com

⏰ 12/07/2024, 3:46:15 PM
```

### Enquiry Notification Example:
```
📧 New Customer Enquiry

👤 Contact Details:
• Name: Jane Smith
• Email: jane@example.com
• Phone: +919876543211

📌 Subject: Product Information

💬 Message:
I would like to know more about the 1 Mukhi Rudraksha...

⏰ 12/07/2024, 4:00:00 PM
```

## Troubleshooting

### Bot Not Sending Messages

1. **Check Bot Token**: Make sure `TELEGRAM_BOT_TOKEN` is correct
2. **Check Chat ID**: Make sure `TELEGRAM_CHAT_ID` is correct (must be a number, not a string)
3. **Start the Bot**: Send `/start` to your bot first
4. **Check Logs**: Look at your server console for error messages

### Common Errors

- **"Unauthorized"**: Bot token is incorrect
- **"Chat not found"**: Chat ID is incorrect or you haven't started the bot
- **"Bad Request"**: Check that environment variables are set correctly

### Testing Connection

You can test if the bot is working by checking the server logs. When an order is placed, you should see:

```
✅ Order notification sent to Telegram: ORD-20241207-1234567890
```

If you see errors, check:
1. Environment variables are loaded (restart server after adding them)
2. Bot token and Chat ID are correct
3. You've sent `/start` to your bot

## Security Notes

- ⚠️ **Never commit** `.env.local` to git (it's already in `.gitignore`)
- ⚠️ **Never share** your bot token publicly
- ⚠️ Keep your bot token secure - anyone with it can control your bot

## Advanced: Multiple Recipients

If you want to send notifications to multiple Telegram chats, you can modify `src/lib/telegram/bot.ts` to support multiple chat IDs.

## Support

For issues:
- **Telegram Bot API**: https://core.telegram.org/bots/api
- **BotFather**: @BotFather on Telegram

