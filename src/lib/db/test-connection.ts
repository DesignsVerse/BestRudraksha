// Test database connection script
// Run with: npx tsx src/lib/db/test-connection.ts

import { db } from './index';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Test 1: Simple query
    const result = await db('SELECT NOW() as current_time, version() as postgres_version');
    console.log('✅ Database connected successfully!');
    console.log('Current time:', result[0]?.current_time);
    console.log('PostgreSQL version:', result[0]?.postgres_version?.split(' ')[0] + ' ' + result[0]?.postgres_version?.split(' ')[1]);
    
    // Test 2: Check if tables exist
    const tablesQuery = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `;
    const tables = await db(tablesQuery);
    
    if (tables.length === 0) {
      console.log('⚠️  No tables found. You need to run the schema.sql file.');
      console.log('   Go to Neon console > SQL Editor and run src/lib/db/schema.sql');
    } else {
      console.log('✅ Found tables:', tables.map((t: any) => t.table_name).join(', '));
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    process.exit(1);
  }
}

testConnection();

