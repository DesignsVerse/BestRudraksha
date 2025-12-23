// Test phone validation with numbers starting with 0
// Run with: node test-phone-validation.js

const { validatePhone, validatePhoneSimple } = require('./src/lib/validation.ts');

const testPhones = [
  // Valid Indian mobile numbers
  '09876543210',
  '08123456789', 
  '07999888777',
  
  // Valid with country code
  '+919876543210',
  '+918123456789',
  
  // Valid international
  '1234567890',
  '+12345678901',
  
  // Valid with formatting
  '098-765-43210',
  '098 765 43210',
  '(098) 765-43210',
  
  // Invalid cases
  '123',        // too short
  '12345678901234567890123', // too long
  'abcd1234567', // contains letters
  '',           // empty
];

console.log('🧪 Testing Phone Validation...\n');

testPhones.forEach(phone => {
  try {
    const result = validatePhone(phone);
    const simple = validatePhoneSimple(phone);
    
    console.log(`📱 "${phone}"`);
    console.log(`   Detailed: ${result.isValid ? '✅ Valid' : '❌ Invalid'}`);
    if (!result.isValid) {
      console.log(`   Errors: ${result.errors.join(', ')}`);
    }
    console.log(`   Simple: ${simple ? '✅ Valid' : '❌ Invalid'}`);
    console.log('');
  } catch (error) {
    console.log(`📱 "${phone}" - Error: ${error.message}\n`);
  }
});

console.log('✅ Phone validation test completed!');