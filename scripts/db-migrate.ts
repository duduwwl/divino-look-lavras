import { config } from "dotenv";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { requireDb } from "../src/db/client";

config({ path: ".env.local" });
config();

async function main() {
  await migrate(requireDb(), { migrationsFolder: "drizzle" });
  console.log("Migrações aplicadas com sucesso.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
