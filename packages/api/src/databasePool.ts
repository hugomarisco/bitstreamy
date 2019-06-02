import { Pool } from "pg";
import { Logger } from "./Logger";

Logger.warn("Creating database pool");

export const databasePool = new Pool({
  connectionString: process.env.DATABASE_URL
});

databasePool.on("error", (error, client) => {
  Logger.error("Unexpected database error", { error, client });
});
