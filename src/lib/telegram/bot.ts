// Telegram Bot Integration for BestRudraksha
// Handles order notifications and customer enquiries

import TelegramBot from 'node-telegram-bot-api';

// Get bot token from environment variable
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Your chat ID to receive notifications

// Initialize bot only if token is provided
let bot: TelegramBot | null = null;

if (BOT_TOKEN) {
  bot = new TelegramBot(BOT_TOKEN, { polling: false });
} else {
  console.warn('⚠️  TELEGRAM_BOT_TOKEN not set. Telegram notifications disabled.');
}

// Format order details for Telegram message
function formatOrderMessage(orderData: {
  orderId: string;
  customerName?: string;
  customerEmail: string;
  customerPhone?: string;
  items: Array<{
    title: string;
    quantity: number;
    price: number;
    discountedPrice: number;
  }>;
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  shippingAddress?: any;
  paymentStatus?: string;
  orderStatus?: string;
}) {
  const itemsList = orderData.items
    .map(
      (item, index) =>
        `${index + 1}. ${item.title}\n   Qty: ${item.quantity} | Price: ₹${item.discountedPrice.toLocaleString('en-IN')} | Total: ₹${(item.discountedPrice * item.quantity).toLocaleString('en-IN')}`
    )
    .join('\n\n');

  const addressText = orderData.shippingAddress
    ? `\n📍 *Shipping Address:*\n${formatAddress(orderData.shippingAddress)}`
    : '';

  const statusText = orderData.orderStatus || orderData.paymentStatus
    ? `\n\n📊 *Status:* ${orderData.orderStatus || 'Pending'} | Payment: ${orderData.paymentStatus || 'Pending'}`
    : '';

  return `🛒 *New Order Received!*

📋 *Order ID:* \`${orderData.orderId}\`

👤 *Customer Details:*
• Name: ${orderData.customerName || 'Not provided'}
• Email: ${orderData.customerEmail}
• Phone: ${orderData.customerPhone || 'Not provided'}

🛍️ *Order Items:*
${itemsList}

💰 *Pricing:*
• Subtotal: ₹${orderData.subtotal.toLocaleString('en-IN')}
• Shipping: ₹${orderData.shippingFee.toLocaleString('en-IN')}
• *Total: ₹${orderData.totalAmount.toLocaleString('en-IN')}*${addressText}${statusText}

⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;
}

// Format address object to readable text
function formatAddress(address: any): string {
  if (typeof address === 'string') return address;
  
  const parts = [];
  if (address.name) parts.push(address.name);
  if (address.address_line_1) parts.push(address.address_line_1);
  if (address.address_line_2) parts.push(address.address_line_2);
  if (address.city) parts.push(address.city);
  if (address.state) parts.push(address.state);
  if (address.pincode) parts.push(`PIN: ${address.pincode}`);
  if (address.country) parts.push(address.country);
  
  return parts.join(', ') || 'Address not provided';
}

// Send order notification
export async function sendOrderNotification(orderData: {
  orderId: string;
  customerName?: string;
  customerEmail: string;
  customerPhone?: string;
  items: Array<{
    title: string;
    quantity: number;
    price: number;
    discountedPrice: number;
  }>;
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  shippingAddress?: any;
  paymentStatus?: string;
  orderStatus?: string;
}) {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Order notification skipped.');
    return { success: false, message: 'Telegram bot not configured' };
  }

  try {
    const message = formatOrderMessage(orderData);
    
    await bot.sendMessage(CHAT_ID, message, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });

    console.log(`✅ Order notification sent to Telegram: ${orderData.orderId}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Failed to send Telegram notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Send payment status notification
export async function sendPaymentNotification(orderData: {
  orderId: string;
  paymentStatus: 'success' | 'failed' | 'pending';
  paymentId?: string;
  amount: number;
  customerEmail: string;
  failureReason?: string;
}) {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Payment notification skipped.');
    return { success: false, message: 'Telegram bot not configured' };
  }

  try {
    const emoji = orderData.paymentStatus === 'success' ? '✅' : orderData.paymentStatus === 'failed' ? '❌' : '⏳';
    const statusText = orderData.paymentStatus === 'success' 
      ? 'Payment Successful!' 
      : orderData.paymentStatus === 'failed' 
      ? 'Payment Failed' 
      : 'Payment Pending';

    let message = `${emoji} *${statusText}*\n\n`;
    message += `📋 *Order ID:* \`${orderData.orderId}\`\n`;
    if (orderData.paymentId) {
      message += `💳 *Payment ID:* \`${orderData.paymentId}\`\n`;
    }
    message += `💰 *Amount:* ₹${orderData.amount.toLocaleString('en-IN')}\n`;
    message += `👤 *Customer:* ${orderData.customerEmail}\n`;
    
    if (orderData.failureReason) {
      message += `\n⚠️ *Reason:* ${orderData.failureReason}`;
    }

    message += `\n\n⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    await bot.sendMessage(CHAT_ID, message, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });

    console.log(`✅ Payment notification sent to Telegram: ${orderData.orderId}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Failed to send Telegram payment notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Send enquiry/contact form message
export async function sendEnquiryNotification(enquiryData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  if (!bot || !CHAT_ID) {
    console.log('Telegram bot not configured. Enquiry notification skipped.');
    return { success: false, message: 'Telegram bot not configured' };
  }

  try {
    const message = `📧 *New Customer Enquiry*

👤 *Contact Details:*
• Name: ${enquiryData.name}
• Email: ${enquiryData.email}
• Phone: ${enquiryData.phone || 'Not provided'}

${enquiryData.subject ? `📌 *Subject:* ${enquiryData.subject}\n\n` : ''}💬 *Message:*
${enquiryData.message}

⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    await bot.sendMessage(CHAT_ID, message, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });

    console.log(`✅ Enquiry notification sent to Telegram from: ${enquiryData.email}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Failed to send Telegram enquiry notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Test bot connection
export async function testBotConnection(): Promise<boolean> {
  if (!bot || !CHAT_ID) {
    return false;
  }

  try {
    await bot.sendMessage(CHAT_ID, '🤖 Telegram bot is connected and working!', {
      parse_mode: 'Markdown',
    });
    return true;
  } catch (error) {
    console.error('Bot connection test failed:', error);
    return false;
  }
}

