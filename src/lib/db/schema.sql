-- Database Schema for BestRudraksha E-commerce
-- Neon PostgreSQL Database
-- Complete schema with all required tables

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    name VARCHAR(255),
    password_hash VARCHAR(255), -- For future authentication
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Addresses Table
CREATE TABLE IF NOT EXISTS user_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('shipping', 'billing')), -- shipping or billing
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address_line_1 VARCHAR(500) NOT NULL,
    address_line_2 VARCHAR(500),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    country VARCHAR(100) DEFAULT 'India',
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Enquiries Table
CREATE TABLE IF NOT EXISTS contact_enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    admin_notes TEXT,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    subscription_source VARCHAR(50) DEFAULT 'website', -- website, checkout, manual
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(100) UNIQUE NOT NULL, -- e.g., ORD-20241207-1234567890
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL, -- NULL for guest orders
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    customer_name VARCHAR(255),
    shipping_address JSONB, -- Store full address as JSON
    billing_address JSONB,
    subtotal DECIMAL(10, 2) NOT NULL,
    shipping_fee DECIMAL(10, 2) DEFAULT 15.00,
    tax_amount DECIMAL(10, 2) DEFAULT 0.00,
    discount_amount DECIMAL(10, 2) DEFAULT 0.00,
    total_amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
    payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded', 'partially_refunded')),
    cashfree_order_id VARCHAR(255), -- Cashfree order ID
    tracking_number VARCHAR(100),
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    notes TEXT,
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
    product_id INTEGER NOT NULL, -- Reference to product in shopData
    product_title VARCHAR(500) NOT NULL,
    product_slug VARCHAR(255) NOT NULL,
    product_size VARCHAR(100), -- Regular, Premium, etc.
    price DECIMAL(10, 2) NOT NULL,
    discounted_price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    product_image VARCHAR(500),
    product_data JSONB, -- Store complete product info at time of order
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
    cashfree_order_id VARCHAR(255),
    cashfree_payment_id VARCHAR(255) UNIQUE,
    payment_session_id VARCHAR(255),
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    payment_method VARCHAR(50), -- card, upi, netbanking, wallet, etc.
    payment_status VARCHAR(50) NOT NULL CHECK (payment_status IN ('pending', 'success', 'failed', 'cancelled', 'refunded')),
    transaction_id VARCHAR(255),
    gateway_response_code VARCHAR(50),
    failure_reason TEXT,
    refund_amount DECIMAL(10, 2) DEFAULT 0.00,
    refund_reason TEXT,
    payment_data JSONB, -- Store full payment response from Cashfree
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Status History Table
CREATE TABLE IF NOT EXISTS order_status_history (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
    old_status VARCHAR(50),
    new_status VARCHAR(50) NOT NULL,
    old_payment_status VARCHAR(50),
    new_payment_status VARCHAR(50),
    notes TEXT,
    changed_by VARCHAR(100) DEFAULT 'system', -- system, admin, customer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product Reviews Table
CREATE TABLE IF NOT EXISTS product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    product_slug VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    review_text TEXT,
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Coupons/Discount Codes Table
CREATE TABLE IF NOT EXISTS coupons (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(20) NOT NULL CHECK (type IN ('percentage', 'fixed_amount', 'free_shipping')),
    value DECIMAL(10, 2) NOT NULL, -- percentage or fixed amount
    minimum_order_amount DECIMAL(10, 2) DEFAULT 0.00,
    maximum_discount_amount DECIMAL(10, 2),
    usage_limit INTEGER, -- NULL for unlimited
    used_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    valid_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valid_until TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Coupon Usage History Table
CREATE TABLE IF NOT EXISTS coupon_usage (
    id SERIAL PRIMARY KEY,
    coupon_id INTEGER REFERENCES coupons(id) ON DELETE CASCADE NOT NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    discount_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'manager', 'support')),
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- System Settings Table
CREATE TABLE IF NOT EXISTS system_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT,
    description TEXT,
    type VARCHAR(20) DEFAULT 'string' CHECK (type IN ('string', 'number', 'boolean', 'json')),
    is_public BOOLEAN DEFAULT FALSE, -- Whether this setting can be accessed by frontend
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);

CREATE INDEX IF NOT EXISTS idx_user_addresses_user_id ON user_addresses(user_id);
CREATE INDEX IF NOT EXISTS idx_user_addresses_type ON user_addresses(type);
CREATE INDEX IF NOT EXISTS idx_user_addresses_is_default ON user_addresses(is_default);

CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email ON contact_enquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON contact_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON contact_enquiries(created_at);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscriptions(status);

CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_orders_cashfree_order_id ON orders(cashfree_order_id);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_slug ON order_items(product_slug);

CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_cashfree_payment_id ON payments(cashfree_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_status ON payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments(created_at);

CREATE INDEX IF NOT EXISTS idx_order_status_history_order_id ON order_status_history(order_id);
CREATE INDEX IF NOT EXISTS idx_order_status_history_created_at ON order_status_history(created_at);

CREATE INDEX IF NOT EXISTS idx_product_reviews_product_id ON product_reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_slug ON product_reviews(product_slug);
CREATE INDEX IF NOT EXISTS idx_product_reviews_user_id ON product_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_is_approved ON product_reviews(is_approved);
CREATE INDEX IF NOT EXISTS idx_product_reviews_rating ON product_reviews(rating);

CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code);
CREATE INDEX IF NOT EXISTS idx_coupons_is_active ON coupons(is_active);
CREATE INDEX IF NOT EXISTS idx_coupons_valid_from ON coupons(valid_from);
CREATE INDEX IF NOT EXISTS idx_coupons_valid_until ON coupons(valid_until);

CREATE INDEX IF NOT EXISTS idx_coupon_usage_coupon_id ON coupon_usage(coupon_id);
CREATE INDEX IF NOT EXISTS idx_coupon_usage_order_id ON coupon_usage(order_id);
CREATE INDEX IF NOT EXISTS idx_coupon_usage_user_id ON coupon_usage(user_id);

CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_is_active ON admin_users(is_active);

CREATE INDEX IF NOT EXISTS idx_system_settings_key ON system_settings(key);
CREATE INDEX IF NOT EXISTS idx_system_settings_is_public ON system_settings(is_public);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to auto-update updated_at
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Additional triggers for all tables
CREATE TRIGGER update_user_addresses_updated_at BEFORE UPDATE ON user_addresses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_enquiries_updated_at BEFORE UPDATE ON contact_enquiries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_reviews_updated_at BEFORE UPDATE ON product_reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_coupons_updated_at BEFORE UPDATE ON coupons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_system_settings_updated_at BEFORE UPDATE ON system_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically track order status changes
CREATE OR REPLACE FUNCTION track_order_status_changes()
RETURNS TRIGGER AS $$
BEGIN
    -- Only insert if status or payment_status actually changed
    IF (OLD.status IS DISTINCT FROM NEW.status) OR (OLD.payment_status IS DISTINCT FROM NEW.payment_status) THEN
        INSERT INTO order_status_history (
            order_id, 
            old_status, 
            new_status, 
            old_payment_status, 
            new_payment_status,
            notes,
            changed_by
        ) VALUES (
            NEW.id,
            OLD.status,
            NEW.status,
            OLD.payment_status,
            NEW.payment_status,
            CASE 
                WHEN OLD.status IS DISTINCT FROM NEW.status AND OLD.payment_status IS DISTINCT FROM NEW.payment_status THEN
                    'Status changed from ' || COALESCE(OLD.status, 'null') || ' to ' || NEW.status || 
                    ' and payment status changed from ' || COALESCE(OLD.payment_status, 'null') || ' to ' || NEW.payment_status
                WHEN OLD.status IS DISTINCT FROM NEW.status THEN
                    'Status changed from ' || COALESCE(OLD.status, 'null') || ' to ' || NEW.status
                ELSE
                    'Payment status changed from ' || COALESCE(OLD.payment_status, 'null') || ' to ' || NEW.payment_status
            END,
            'system'
        );
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to track order status changes
CREATE TRIGGER track_order_status_changes_trigger
    AFTER UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION track_order_status_changes();

-- Insert default system settings
INSERT INTO system_settings (key, value, description, type, is_public) VALUES
('site_name', 'BestRudraksha.com', 'Website name', 'string', true),
('site_description', 'Authentic Rudraksha, Gemstones, Malas & Yantras', 'Website description', 'string', true),
('default_shipping_fee', '15.00', 'Default shipping fee in INR', 'number', true),
('free_shipping_threshold', '1000.00', 'Minimum order amount for free shipping', 'number', true),
('tax_rate', '0.00', 'Tax rate percentage', 'number', false),
('currency', 'INR', 'Default currency', 'string', true),
('order_id_prefix', 'ORD', 'Prefix for order IDs', 'string', false),
('max_order_items', '50', 'Maximum items per order', 'number', false),
('enable_reviews', 'true', 'Enable product reviews', 'boolean', true),
('auto_approve_reviews', 'false', 'Auto approve product reviews', 'boolean', false),
('contact_email', 'info@bestrudraksha.com', 'Contact email address', 'string', true),
('support_phone', '+919153164444', 'Support phone number', 'string', true),
('whatsapp_number', '+919153164444', 'WhatsApp number', 'string', true),
('business_address', '69/1, Near Harsiddhi Mandir, Yogipura, Jaisinghpura, Ujjain, Madhya Pradesh 456006', 'Business address', 'string', true)
ON CONFLICT (key) DO NOTHING;

-- Create a default admin user (password: admin123 - CHANGE THIS!)
INSERT INTO admin_users (username, email, password_hash, name, role) VALUES
('admin', 'admin@bestrudraksha.com', '$2b$10$rQZ8kHWKtGkVQW5Oe5nGxeJ7QqZ8kHWKtGkVQW5Oe5nGxeJ7QqZ8kH', 'Admin User', 'super_admin')
ON CONFLICT (username) DO NOTHING;