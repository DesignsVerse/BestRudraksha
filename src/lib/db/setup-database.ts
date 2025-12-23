#!/usr/bin/env tsx
// Database setup script for BestRudraksha
// Run this to initialize your database with all tables and data

import { db } from './index';
import fs from 'fs';
import path from 'path';

async function setupDatabase() {
  try {
    console.log('🚀 Starting database setup...');
    
    // Read and execute the schema
    const schemaPath = path.join(process.cwd(), 'src/lib/db/schema.sql');
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error('Schema file not found at: ' + schemaPath);
    }
    
    const schemaSQL = fs.readFileSync(schemaPath, 'utf-8');
    
    console.log('📋 Executing database schema...');
    
    // Split the schema into individual statements and execute them
    const statements = schemaSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await db(statement);
        } catch (error) {
          // Some statements might fail if they already exist, that's okay
          if (!error.message.includes('already exists')) {
            console.warn('⚠️  Warning executing statement:', error.message);
          }
        }
      }
    }
    
    console.log('✅ Database schema created successfully!');
    
    // Verify tables were created
    const tables = await db(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    
    console.log('📊 Created tables:');
    tables.forEach((table: any) => {
      console.log(`   - ${table.table_name}`);
    });
    
    // Test basic functionality
    console.log('🧪 Testing database functionality...');
    
    // Test system settings
    const settings = await db('SELECT * FROM system_settings LIMIT 5');
    console.log(`   - System settings: ${settings.length} entries`);
    
    // Test admin user
    const adminUsers = await db('SELECT username FROM admin_users');
    console.log(`   - Admin users: ${adminUsers.length} entries`);
    
    console.log('🎉 Database setup completed successfully!');
    console.log('');
    console.log('📝 Next steps:');
    console.log('   1. Update your .env.local file with the correct DATABASE_URL');
    console.log('   2. Change the default admin password');
    console.log('   3. Configure your Cashfree and Telegram credentials');
    console.log('   4. Start your application with: npm run dev');
    console.log('');
    console.log('🔐 Default admin credentials:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('   ⚠️  CHANGE THIS PASSWORD IMMEDIATELY!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    throw error;
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
    .then(() => {
      console.log('✅ Setup complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Setup failed:', error);
      process.exit(1);
    });
}

export { setupDatabase };