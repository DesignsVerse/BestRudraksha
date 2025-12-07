import { neon } from '@neondatabase/serverless';

// Get database connection string from environment variable
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create Neon HTTP client
const sql = neon(connectionString);

// Helper function to execute queries
export async function query<T = any>(queryString: string, params?: any[]): Promise<T[]> {
  try {
    const result = await sql(queryString, params);
    return result as T[];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Export sql for direct use in queries.ts
export const db = query;

