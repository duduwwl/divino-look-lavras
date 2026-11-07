import { config } from "dotenv";
import { count, eq } from "drizzle-orm";
import { requireDb } from "../src/db/client";
import { categories, newsletterSubscribers, orders, productImages, products } from "../src/db/schema";

config({ path: ".env.local" });
config();

async function main() {
const db = requireDb();
const [[productCount], [imageCount], [categoryCount], [subscriberCount], [orderCount]] = await Promise.all([
  db.select({ count: count() }).from(products).where(eq(products.active, true)),
  db.select({ count: count() }).from(productImages),
  db.select({ count: count() }).from(categories).where(eq(categories.active, true)),
  db.select({ count: count() }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "active")),
  db.select({ count: count() }).from(orders),
]);

console.log(JSON.stringify({ products: productCount.count, images: imageCount.count, categories: categoryCount.count, activeSubscribers: subscriberCount.count, orders: orderCount.count }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
