import {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from "./config.js";

import pg from "pg";

export const pool = new pg.Pool({
  password: PG_PASSWORD,
  user: PG_USER,
  database: PG_DATABASE,
  host: PG_HOST,
  port:PG_PORT
});
