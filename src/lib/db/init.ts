// Database initialization script
// Run this once to set up the database schema

import { db } from './index';
import fs from 'fs';
import path from 'path';

export async function initializeDatabase() {
  try {
    console.log('Initializing database...');
    
    // Read the schema SQL file
    const schemaPath = path.join(process.cwd(), 'src/lib/db/schema.sql');
    const schemaSQL = fs.readFileSync(schemaPath, 'utf-8');
    
    // Execute the schema
    await db(schemaSQL);
    
    console.log('Database initialized successfully!');
    return { success: true };
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

// Run initialization if this file is executed directly
if (require.main === module) {
  initializeDatabase()
    .then(() => {
      console.log('Database setup complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Database setup failed:', error);
      process.exit(1);
    });
}

