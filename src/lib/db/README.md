# Database Module

This directory contains all database-related code for the BestRudraksha e-commerce platform.

## Files

- **`schema.sql`** - PostgreSQL schema definition with all tables, indexes, and triggers
- **`schema.ts`** - TypeScript type definitions matching the database schema
- **`index.ts`** - Database connection setup using Neon serverless driver
- **`queries.ts`** - All database query functions (CRUD operations)
- **`init.ts`** - Database initialization script

## Usage

### Basic Query Example

```typescript
import { createOrder, getOrderByOrderId } from '@/lib/db/queries';

// Create an order
const order = await createOrder({
  order_id: 'ORD-20241207-1234567890',
  customer_email: 'customer@example.com',
  customer_phone: '+919876543210',
  customer_name: 'John Doe',
  subtotal: 1500,
  shipping_fee: 15,
  total_amount: 1515,
  currency: 'INR',
  status: 'pending',
  payment_status: 'pending',
});

// Get an order
const order = await getOrderByOrderId('ORD-20241207-1234567890');
```

### Available Functions

See `queries.ts` for the complete list of available database functions.

