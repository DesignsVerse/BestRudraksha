// TypeScript types for database schema
// These match the SQL schema in schema.sql

export interface User {
  id: number;
  email: string;
  phone?: string | null;
  name?: string | null;
  password_hash?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Order {
  id: number;
  order_id: string;
  user_id?: number | null;
  customer_email: string;
  customer_phone?: string | null;
  customer_name?: string | null;
  shipping_address?: any | null; // JSONB
  billing_address?: any | null; // JSONB
  subtotal: number;
  shipping_fee: number;
  total_amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  cashfree_order_id?: string | null;
  notes?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_title: string;
  product_slug: string;
  price: number;
  discounted_price: number;
  quantity: number;
  product_image?: string | null;
  created_at: Date;
}

export interface Payment {
  id: number;
  order_id: number;
  cashfree_order_id?: string | null;
  cashfree_payment_id?: string | null;
  payment_session_id?: string | null;
  amount: number;
  currency: string;
  payment_method?: string | null;
  payment_status: 'success' | 'failed' | 'pending' | 'refunded';
  transaction_id?: string | null;
  failure_reason?: string | null;
  payment_data?: any | null; // JSONB
  created_at: Date;
  updated_at: Date;
}

// Helper types for creating records
export type CreateUserInput = Omit<User, 'id' | 'created_at' | 'updated_at'>;
export type CreateOrderInput = Omit<Order, 'id' | 'created_at' | 'updated_at'>;
export type CreateOrderItemInput = Omit<OrderItem, 'id' | 'created_at'>;
export type CreatePaymentInput = Omit<Payment, 'id' | 'created_at' | 'updated_at'>;

