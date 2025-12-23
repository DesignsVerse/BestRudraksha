// Database query functions for orders, users, payments, and all related functionality

import { db } from './index';
import type { 
  Order, OrderItem, Payment, User, ContactEnquiry,
  CreateOrderInput, CreateOrderItemInput, CreatePaymentInput,
  CreateContactEnquiryInput
} from './schema';

// ============ USER QUERIES ============

export async function createUser(email: string, phone?: string, name?: string): Promise<User> {
  const queryString = `
    INSERT INTO users (email, phone, name)
    VALUES ($1, $2, $3)
    ON CONFLICT (email) DO UPDATE SET
      phone = COALESCE(EXCLUDED.phone, users.phone),
      name = COALESCE(EXCLUDED.name, users.name),
      updated_at = CURRENT_TIMESTAMP
    RETURNING *
  `;
  const result = await db(queryString, [email, phone || null, name || null]);
  return result[0] as User;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const queryString = `SELECT * FROM users WHERE email = $1 LIMIT 1`;
  const result = await db(queryString, [email]);
  return result[0] as User || null;
}

export async function getUserById(id: number): Promise<User | null> {
  const queryString = `SELECT * FROM users WHERE id = $1 LIMIT 1`;
  const result = await db(queryString, [id]);
  return result[0] as User || null;
}

// ============ CONTACT ENQUIRY QUERIES ============

export async function createContactEnquiry(enquiryData: CreateContactEnquiryInput & { ip_address?: string; user_agent?: string }): Promise<ContactEnquiry> {
  const queryString = `
    INSERT INTO contact_enquiries (
      name, email, phone, subject, message, ip_address, user_agent
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;
  
  const result = await db(queryString, [
    enquiryData.name,
    enquiryData.email,
    enquiryData.phone || null,
    enquiryData.subject || null,
    enquiryData.message,
    enquiryData.ip_address || null,
    enquiryData.user_agent || null
  ]);
  
  return result[0] as ContactEnquiry;
}

// ============ ORDER QUERIES ============

export async function createOrder(orderData: CreateOrderInput): Promise<Order> {
  const queryString = `
    INSERT INTO orders (
      order_id, user_id, customer_email, customer_phone, customer_name,
      shipping_address, billing_address, subtotal, shipping_fee, tax_amount,
      discount_amount, total_amount, currency, status, payment_status, 
      cashfree_order_id, tracking_number, notes, admin_notes
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
    RETURNING *
  `;
  
  const result = await db(queryString, [
    orderData.order_id,
    orderData.user_id || null,
    orderData.customer_email,
    orderData.customer_phone || null,
    orderData.customer_name || null,
    orderData.shipping_address ? JSON.stringify(orderData.shipping_address) : null,
    orderData.billing_address ? JSON.stringify(orderData.billing_address) : null,
    orderData.subtotal,
    orderData.shipping_fee,
    orderData.tax_amount || 0,
    orderData.discount_amount || 0,
    orderData.total_amount,
    orderData.currency,
    orderData.status,
    orderData.payment_status,
    orderData.cashfree_order_id || null,
    orderData.tracking_number || null,
    orderData.notes || null,
    orderData.admin_notes || null,
  ]);
  
  return result[0] as Order;
}

export async function getOrderByOrderId(orderId: string): Promise<Order | null> {
  const queryString = `SELECT * FROM orders WHERE order_id = $1 LIMIT 1`;
  const result = await db(queryString, [orderId]);
  return result[0] as Order || null;
}

export async function updateOrderStatus(
  orderId: string,
  status: Order['status'],
  paymentStatus?: Order['payment_status']
): Promise<Order | null> {
  let queryString = `UPDATE orders SET status = $1`;
  const params: any[] = [status];
  
  if (paymentStatus) {
    queryString += `, payment_status = $${params.length + 1}`;
    params.push(paymentStatus);
  }
  
  queryString += ` WHERE order_id = $${params.length + 1} RETURNING *`;
  params.push(orderId);
  
  const result = await db(queryString, params);
  return result[0] as Order || null;
}

export async function updateOrderCashfreeId(
  orderId: string,
  cashfreeOrderId: string
): Promise<Order | null> {
  const queryString = `
    UPDATE orders 
    SET cashfree_order_id = $1 
    WHERE order_id = $2 
    RETURNING *
  `;
  const result = await db(queryString, [cashfreeOrderId, orderId]);
  return result[0] as Order || null;
}

// ============ ORDER ITEM QUERIES ============

export async function createOrderItems(items: CreateOrderItemInput[]): Promise<OrderItem[]> {
  if (items.length === 0) return [];
  
  const results: OrderItem[] = [];
  
  for (const item of items) {
    const queryString = `
      INSERT INTO order_items (
        order_id, product_id, product_title, product_slug, product_size,
        price, discounted_price, quantity, product_image, product_data
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
    
    const result = await db(queryString, [
      item.order_id,
      item.product_id,
      item.product_title,
      item.product_slug,
      item.product_size || null,
      item.price,
      item.discounted_price,
      item.quantity,
      item.product_image || null,
      item.product_data ? JSON.stringify(item.product_data) : null
    ]);
    
    if (result[0]) {
      results.push(result[0] as OrderItem);
    }
  }
  
  return results;
}

export async function getOrderItemsByOrderId(orderId: string): Promise<OrderItem[]> {
  const queryString = `
    SELECT oi.* FROM order_items oi
    INNER JOIN orders o ON oi.order_id = o.id
    WHERE o.order_id = $1
    ORDER BY oi.id
  `;
  const result = await db(queryString, [orderId]);
  return result as OrderItem[];
}

// ============ PAYMENT QUERIES ============

export async function createPayment(paymentData: CreatePaymentInput): Promise<Payment> {
  const queryString = `
    INSERT INTO payments (
      order_id, cashfree_order_id, cashfree_payment_id, payment_session_id,
      amount, currency, payment_method, payment_status, transaction_id,
      gateway_response_code, failure_reason, refund_amount, refund_reason, payment_data
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *
  `;
  
  const result = await db(queryString, [
    paymentData.order_id,
    paymentData.cashfree_order_id || null,
    paymentData.cashfree_payment_id || null,
    paymentData.payment_session_id || null,
    paymentData.amount,
    paymentData.currency,
    paymentData.payment_method || null,
    paymentData.payment_status,
    paymentData.transaction_id || null,
    paymentData.gateway_response_code || null,
    paymentData.failure_reason || null,
    paymentData.refund_amount || 0,
    paymentData.refund_reason || null,
    paymentData.payment_data ? JSON.stringify(paymentData.payment_data) : null,
  ]);
  
  return result[0] as Payment;
}

export async function getPaymentByCashfreePaymentId(paymentId: string): Promise<Payment | null> {
  const queryString = `SELECT * FROM payments WHERE cashfree_payment_id = $1 LIMIT 1`;
  const result = await db(queryString, [paymentId]);
  return result[0] as Payment || null;
}

export async function getPaymentsByOrderId(orderId: string): Promise<Payment[]> {
  const queryString = `
    SELECT p.* FROM payments p
    INNER JOIN orders o ON p.order_id = o.id
    WHERE o.order_id = $1
    ORDER BY p.created_at DESC
  `;
  const result = await db(queryString, [orderId]);
  return result as Payment[];
}

export async function updatePaymentStatus(
  paymentId: string,
  status: Payment['payment_status'],
  transactionId?: string,
  paymentData?: any
): Promise<Payment | null> {
  let queryString = `UPDATE payments SET payment_status = $1`;
  const params: any[] = [status];
  
  if (transactionId) {
    queryString += `, transaction_id = $${params.length + 1}`;
    params.push(transactionId);
  }
  
  if (paymentData) {
    queryString += `, payment_data = $${params.length + 1}`;
    params.push(JSON.stringify(paymentData));
  }
  
  queryString += ` WHERE cashfree_payment_id = $${params.length + 1} RETURNING *`;
  params.push(paymentId);
  
  const result = await db(queryString, params);
  return result[0] as Payment || null;
}

// ============ COMPLEX QUERIES ============

export async function getOrderWithItems(orderId: string) {
  const order = await getOrderByOrderId(orderId);
  if (!order) return null;
  
  const items = await getOrderItemsByOrderId(orderId);
  const payments = await getPaymentsByOrderId(orderId);
  
  return {
    order,
    items,
    payments,
  };
}

export async function getUserOrders(userId: number, limit = 50): Promise<Order[]> {
  const queryString = `
    SELECT * FROM orders 
    WHERE user_id = $1 
    ORDER BY created_at DESC 
    LIMIT $2
  `;
  const result = await db(queryString, [userId, limit]);
  return result as Order[];
}