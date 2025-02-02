import { getMigrations, migrate } from "bun-sqlite-migrations";
import Database from "bun:sqlite";

export const createDb = () => {
  console.log("creating database...");
  const db: Database = new Database("elysia-rest-api.db");
  migrate(db, getMigrations("./migrations"));
  return db;
};
