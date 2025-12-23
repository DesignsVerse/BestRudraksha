# Complete Database Setup Guide for BestRudraksha

## 🚀 Quick Setup

### 1. Set up your environment variables
Create `.env.local` file in your project root:

```env
# Database
DATABASE_URL=your_neon_postgresql_connection_string

# Cashfree Payment Gateway
CASHFREE_CLIENT_ID=your_cashfree_client_id
CASHFREE_CLIENT_SECRET=your_cashfree_client_secret

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Run the database setup
```bash
npm run db:setup
```

This will create all tables, indexes, triggers, and default data.

## 📊 Database Schema Overview

### Core Tables
- **users** - Customer accounts and authentication
- **user_addresses** - Shipping and billing addresses
- **orders** - Order information and status
- **order_items** - Individual products in orders
- **payments** - Payment transactions and status
- **order_status_history** - Automatic order status tracking

### Additional Tables
- **contact_enquiries** - Customer contact form submissions
- **newsletter_subscriptions** - Email newsletter subscribers
- **product_reviews** - Customer product reviews
- **coupons** - Discount codes and promotions
- **coupon_usage** - Coupon usage tracking
- **admin_users** - Admin panel users
- **system_settings** - Configurable system settings

## 🔧 Key Features

### Automatic Status Tracking
- Order status changes are automatically logged
- Payment status updates trigger notifications
- Complete audit trail for all orders

### Enhanced Order Management
- Support for shipping tracking
- Delivery confirmation
- Refund processing
- Admin notes and customer notes

### Customer Management
- Multiple addresses per customer
- Order history tracking
- Review and rating system
- Newsletter subscriptions

### Admin Features
- Role-based admin access
- System settings management
- Coupon and discount system
- Customer enquiry management

## 📝 Default Data

The setup creates:
- Default admin user (username: `admin`, password: `admin123`)
- System settings with default values
- Proper indexes for performance
- Triggers for automatic updates

⚠️ **IMPORTANT**: Change the default admin password immediately!

## 🔍 Testing Your Setup

After running the setup, test your database:

```bash
npm run db:test
```

This will verify:
- Database connection
- Table creation
- Basic functionality
- Sample queries