// TypeScript types for database schema
// These match the SQL schema in schema.sql

export interface User {
  id: number;
  email: string;
  phone?: string | null;
  name?: string | null;
  password_hash?: string | null;
  email_verified: boolean;
  phone_verified: boolean;
  is_active: boolean;
  last_login?: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface UserAddress {
  id: number;
  user_id: number;
  type: 'shipping' | 'billing';
  name: string;
  phone?: string | null;
  address_line_1: string;
  address_line_2?: string | null;
  city: string;
  state: string;
  pincode: string;
  country: string;
  is_default: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ContactEnquiry {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  status: 'new' | 'in_progress' | 'resolved' | 'closed';
  admin_notes?: string | null;
  ip_address?: string | null;
  user_agent?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface NewsletterSubscription {
  id: number;
  email: string;
  name?: string | null;
  status: 'active' | 'unsubscribed' | 'bounced';
  subscription_source: string;
  subscribed_at: Date;
  unsubscribed_at?: Date | null;
  created_at: Date;
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
  tax_amount: number;
  discount_amount: number;
  total_amount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
  cashfree_order_id?: string | null;
  tracking_number?: string | null;
  shipped_at?: Date | null;
  delivered_at?: Date | null;
  notes?: string | null;
  admin_notes?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_title: string;
  product_slug: string;
  product_size?: string | null;
  price: number;
  discounted_price: number;
  quantity: number;
  product_image?: string | null;
  product_data?: any | null; // JSONB
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
  payment_status: 'pending' | 'success' | 'failed' | 'cancelled' | 'refunded';
  transaction_id?: string | null;
  gateway_response_code?: string | null;
  failure_reason?: string | null;
  refund_amount: number;
  refund_reason?: string | null;
  payment_data?: any | null; // JSONB
  processed_at?: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface OrderStatusHistory {
  id: number;
  order_id: number;
  old_status?: string | null;
  new_status: string;
  old_payment_status?: string | null;
  new_payment_status?: string | null;
  notes?: string | null;
  changed_by: string;
  created_at: Date;
}

export interface ProductReview {
  id: number;
  product_id: number;
  product_slug: string;
  user_id?: number | null;
  order_id?: number | null;
  customer_name: string;
  customer_email: string;
  rating: number;
  title?: string | null;
  review_text?: string | null;
  is_verified_purchase: boolean;
  is_approved: boolean;
  admin_notes?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Coupon {
  id: number;
  code: string;
  name: string;
  description?: string | null;
  type: 'percentage' | 'fixed_amount' | 'free_shipping';
  value: number;
  minimum_order_amount: number;
  maximum_discount_amount?: number | null;
  usage_limit?: number | null;
  used_count: number;
  is_active: boolean;
  valid_from: Date;
  valid_until?: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface CouponUsage {
  id: number;
  coupon_id: number;
  order_id: number;
  user_id?: number | null;
  discount_amount: number;
  created_at: Date;
}

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  name: string;
  role: 'super_admin' | 'admin' | 'manager' | 'support';
  is_active: boolean;
  last_login?: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface SystemSetting {
  id: number;
  key: string;
  value?: string | null;
  description?: string | null;
  type: 'string' | 'number' | 'boolean' | 'json';
  is_public: boolean;
  created_at: Date;
  updated_at: Date;
}

// Helper types for creating records
export type CreateUserInput = Omit<User, 'id' | 'created_at' | 'updated_at' | 'email_verified' | 'phone_verified' | 'is_active' | 'last_login'>;
export type CreateUserAddressInput = Omit<UserAddress, 'id' | 'created_at' | 'updated_at'>;
export type CreateContactEnquiryInput = Omit<ContactEnquiry, 'id' | 'created_at' | 'updated_at' | 'status' | 'admin_notes'>;
export type CreateNewsletterSubscriptionInput = Omit<NewsletterSubscription, 'id' | 'created_at' | 'subscribed_at' | 'unsubscribed_at'>;
export type CreateOrderInput = Omit<Order, 'id' | 'created_at' | 'updated_at' | 'shipped_at' | 'delivered_at'>;
export type CreateOrderItemInput = Omit<OrderItem, 'id' | 'created_at'>;
export type CreatePaymentInput = Omit<Payment, 'id' | 'created_at' | 'updated_at' | 'processed_at'>;
export type CreateProductReviewInput = Omit<ProductReview, 'id' | 'created_at' | 'updated_at' | 'is_approved' | 'admin_notes'>;
export type CreateCouponInput = Omit<Coupon, 'id' | 'created_at' | 'updated_at' | 'used_count'>;
export type CreateAdminUserInput = Omit<AdminUser, 'id' | 'created_at' | 'updated_at' | 'last_login'>;

// Address interface for JSON fields
export interface Address {
  name: string;
  phone?: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

