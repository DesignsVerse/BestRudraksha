// Database initialization script
// Run this once to set up the database schema

import { db } from './index';
import fs from 'fs';
import path from 'path';

export async function initializeDatabase() {
  try {
    console.log('🚀 Initializing database...');
    
    // Read the schema SQL file
    const schemaPath = path.join(process.cwd(), 'src/lib/db/schema.sql');
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }
    
    const schemaSQL = fs.readFileSync(schemaPath, 'utf-8');
    
    // Split SQL commands by semicolon and execute them one by one
    const commands = schemaSQL
      .split(';')
      .map(cmd => cmd.trim())
      .filter(cmd => cmd.length > 0);
    
    console.log(`📝 Executing ${commands.length} SQL commands...`);
    
    for (const command of commands) {
      if (command.trim()) {
        await db(command);
      }
    }
    
    // Verify tables were created
    const tables = await db(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    
    console.log('✅ Database initialized successfully!');
    console.log('📋 Created tables:', tables.map((t: any) => t.table_name).join(', '));
    
    return { success: true, tables: tables.map((t: any) => t.table_name) };
  } catch (error) {
    console.error('❌ Database initialization error:', error);
    throw error;
  }
}

// Test database connection
export async function testConnection() {
  try {
    console.log('🔍 Testing database connection...');
    const result = await db('SELECT NOW() as current_time, version() as db_version');
    console.log('✅ Database connection successful!');
    console.log('⏰ Current time:', result[0].current_time);
    console.log('🗄️ Database version:', result[0].db_version.split(' ')[0]);
    return { success: true, result: result[0] };
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

// Run initialization if this file is executed directly
if (require.main === module) {
  Promise.resolve()
    .then(() => testConnection())
    .then(() => initializeDatabase())
    .then(() => {
      console.log('🎉 Database setup complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Database setup failed:', error);
      process.exit(1);
    });
}

