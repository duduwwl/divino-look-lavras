import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let database: NeonHttpDatabase<typeof schema> | null | undefined;

export function getDb() {
  if (database !== undefined) return database;
  const url = process.env.DATABASE_URL;
  if (!url) {
    database = null;
    return database;
  }
  database = drizzle(neon(url), { schema });
  return database;
}

export function requireDb() {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL não foi definida.");
  return db;
}
