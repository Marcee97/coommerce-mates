import pg from "pg";

export const pool = new pg.Pool({
    password: "postgresql",
    user:"postgres",
    database:"pruebasdb",
    host: "localhost"

}) 