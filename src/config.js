export const PORT = process.env.PORT || 3000;
export const PG_PORT = process.env.DB_PORT || 5432;
export const PG_HOST = process.env.DB_HOST || 'localhost';
export const PG_PASSWORD = process.env.DB_PASSWORD || 'postgresql';
export const PG_DATABASE = process.env.DB || 'pruebasdb';
export const PG_USER = process.env.DB_USER || 'postgres';


export const ORIGIN = process.env.ORIGIN || 'http://localhost:5173';