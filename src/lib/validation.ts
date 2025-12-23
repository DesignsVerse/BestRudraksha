// Input validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Email validation
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
    if (email.length > 255) {
      errors.push('Email must be less than 255 characters');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Phone validation
export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = [];
  
  if (phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push('Invalid phone number format');
    }
    if (phone.length > 20) {
      errors.push('Phone number must be less than 20 characters');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Name validation
export function validateName(name: string): ValidationResult {
  const errors: string[] = [];
  
  if (name) {
    if (name.length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    if (name.length > 255) {
      errors.push('Name must be less than 255 characters');
    }
    const nameRegex = /^[a-zA-Z\s\-\.\']+$/;
    if (!nameRegex.test(name)) {
      errors.push('Name contains invalid characters');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Order ID validation
export function validateOrderId(orderId: string): ValidationResult {
  const errors: string[] = [];
  
  if (!orderId) {
    errors.push('Order ID is required');
  } else {
    if (orderId.length > 100) {
      errors.push('Order ID must be less than 100 characters');
    }
    const orderIdRegex = /^[A-Z0-9\-]+$/;
    if (!orderIdRegex.test(orderId)) {
      errors.push('Order ID contains invalid characters');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Amount validation
export function validateAmount(amount: number): ValidationResult {
  const errors: string[] = [];
  
  if (typeof amount !== 'number' || isNaN(amount)) {
    errors.push('Amount must be a valid number');
  } else {
    if (amount <= 0) {
      errors.push('Amount must be greater than 0');
    }
    if (amount > 999999.99) {
      errors.push('Amount is too large');
    }
    // Check for more than 2 decimal places
    if (Math.round(amount * 100) !== amount * 100) {
      errors.push('Amount cannot have more than 2 decimal places');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Cart item validation
export function validateCartItem(item: any): ValidationResult {
  const errors: string[] = [];
  
  if (!item) {
    errors.push('Cart item is required');
    return { isValid: false, errors };
  }
  
  if (!item.id || typeof item.id !== 'number') {
    errors.push('Cart item must have a valid ID');
  }
  
  if (!item.title || typeof item.title !== 'string' || item.title.length === 0) {
    errors.push('Cart item must have a valid title');
  }
  
  if (!item.slug || typeof item.slug !== 'string' || item.slug.length === 0) {
    errors.push('Cart item must have a valid slug');
  }
  
  const priceValidation = validateAmount(item.price);
  if (!priceValidation.isValid) {
    errors.push(...priceValidation.errors.map(e => `Price: ${e}`));
  }
  
  const discountedPriceValidation = validateAmount(item.discountedPrice);
  if (!discountedPriceValidation.isValid) {
    errors.push(...discountedPriceValidation.errors.map(e => `Discounted price: ${e}`));
  }
  
  if (!item.quantity || typeof item.quantity !== 'number' || item.quantity < 1 || item.quantity > 100) {
    errors.push('Cart item quantity must be between 1 and 100');
  }
  
  return { isValid: errors.length === 0, errors };
}

// Message validation (for contact forms)
export function validateMessage(message: string): ValidationResult {
  const errors: string[] = [];
  
  if (!message) {
    errors.push('Message is required');
  } else {
    if (message.length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    if (message.length > 2000) {
      errors.push('Message must be less than 2000 characters');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Sanitize string input
export function sanitizeString(input: string): string {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

// Sanitize HTML input (for descriptions, etc.)
export function sanitizeHtml(input: string): string {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .substring(0, 5000); // Limit length
}

// Validate and sanitize customer data
export function validateCustomerData(customer: any): { isValid: boolean; errors: string[]; sanitized: any } {
  const errors: string[] = [];
  const sanitized: any = {};
  
  // Validate email
  const emailValidation = validateEmail(customer.email);
  if (!emailValidation.isValid) {
    errors.push(...emailValidation.errors);
  } else {
    sanitized.email = sanitizeString(customer.email.toLowerCase());
  }
  
  // Validate phone (optional)
  if (customer.phone) {
    const phoneValidation = validatePhone(customer.phone);
    if (!phoneValidation.isValid) {
      errors.push(...phoneValidation.errors);
    } else {
      sanitized.phone = sanitizeString(customer.phone);
    }
  }
  
  // Validate name (optional)
  if (customer.name) {
    const nameValidation = validateName(customer.name);
    if (!nameValidation.isValid) {
      errors.push(...nameValidation.errors);
    } else {
      sanitized.name = sanitizeString(customer.name);
    }
  }
  
  return { isValid: errors.length === 0, errors, sanitized };
}