# Database Setup Guide for BestRudraksha

This guide will help you set up the Neon PostgreSQL database for the BestRudraksha e-commerce website.

## Prerequisites

1. A Neon account (sign up at https://neon.tech)
2. Node.js and npm installed
3. Environment variables configured

## Step 1: Create Neon Database

1. Go to https://console.neon.tech
2. Sign up or log in
3. Create a new project
4. Copy your connection string (it will look like: `postgresql://username:password@hostname/database?sslmode=require`)

## Step 2: Set Environment Variables

Create a `.env.local` file in the root directory (`BestRudraksha/.env.local`):

```env
# Neon Database Connection
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require

# Cashfree Payment Gateway
CASHFREE_CLIENT_ID=your_cashfree_client_id
CASHFREE_CLIENT_SECRET=your_cashfree_client_secret

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:** Never commit `.env.local` to git! It's already in `.gitignore`.

## Step 3: Install Dependencies

```bash
npm install
```

This will install `@neondatabase/serverless` and `bcryptjs` for database operations.

## Step 4: Initialize Database Schema

Run the database initialization script to create all tables:

```bash
# Option 1: Using Node.js directly
node -e "require('./src/lib/db/init.ts').initializeDatabase()"

# Option 2: Create a script in package.json (recommended)
```

Or manually run the SQL schema:

1. Go to your Neon console
2. Open the SQL Editor
3. Copy the contents of `src/lib/db/schema.sql`
4. Paste and execute it

## Step 5: Verify Database Connection

You can test the connection by creating a simple test script:

```typescript
// test-db.ts
import { db } from './src/lib/db/index';

async function testConnection() {
  try {
    const result = await db('SELECT NOW()');
    console.log('Database connected successfully!', result);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();
```

## Database Schema Overview

The database includes the following tables:

### 1. **users**
- Stores customer information
- Fields: id, email, phone, name, password_hash, created_at, updated_at

### 2. **orders**
- Stores order information
- Fields: id, order_id, user_id, customer_email, customer_phone, customer_name, shipping_address, billing_address, subtotal, shipping_fee, total_amount, currency, status, payment_status, cashfree_order_id, notes, created_at, updated_at

### 3. **order_items**
- Stores individual items in each order
- Fields: id, order_id, product_id, product_title, product_slug, price, discounted_price, quantity, product_image, created_at

### 4. **payments**
- Stores payment transaction information
- Fields: id, order_id, cashfree_order_id, cashfree_payment_id, payment_session_id, amount, currency, payment_method, payment_status, transaction_id, failure_reason, payment_data, created_at, updated_at

## Database Functions

All database operations are handled through functions in `src/lib/db/queries.ts`:

- **User operations**: `createUser()`, `getUserByEmail()`, `getUserById()`
- **Order operations**: `createOrder()`, `getOrderByOrderId()`, `updateOrderStatus()`
- **Order item operations**: `createOrderItems()`, `getOrderItemsByOrderId()`
- **Payment operations**: `createPayment()`, `getPaymentByCashfreePaymentId()`, `updatePaymentStatus()`

## API Integration

The database is integrated with:

1. **`/api/create-order`** - Creates order and order items in database before processing payment
2. **`/api/webhook`** - Updates payment status and order status when Cashfree sends webhook events

## Troubleshooting

### Connection Issues

- Verify your `DATABASE_URL` is correct
- Check that your Neon project is active
- Ensure SSL mode is set to `require` in the connection string

### Schema Issues

- Make sure you've run the schema.sql file
- Check that all tables exist in your Neon console
- Verify indexes are created

### Query Issues

- Check the console logs for detailed error messages
- Verify that all required fields are provided
- Ensure data types match the schema

## Next Steps

After setting up the database:

1. Test order creation by going through checkout
2. Verify orders appear in the database
3. Test webhook by completing a payment
4. Check payment records are saved correctly

## Support

For issues with:
- **Neon Database**: Check Neon documentation at https://neon.tech/docs
- **Database Schema**: Review `src/lib/db/schema.sql`
- **Database Queries**: Check `src/lib/db/queries.ts`

