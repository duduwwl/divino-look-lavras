import { config } from "dotenv";
import { inArray, sql } from "drizzle-orm";
import { categories as catalogCategories, products as catalogProducts } from "../src/data/products";
import { requireDb } from "../src/db/client";
import { categories, productColors, productImages, productSizes, products, siteSettings } from "../src/db/schema";

config({ path: ".env.local" });
config();

async function main() {
const db = requireDb();
const now = new Date();
const productIds = catalogProducts.map((product) => product.id);

await db.insert(categories).values(
  catalogCategories.map((category, position) => ({
    slug: category.slug,
    label: category.label,
    blurb: category.blurb,
    imageUrl: category.image,
    position,
    active: true,
    updatedAt: now,
  })),
).onConflictDoUpdate({
  target: categories.slug,
  set: {
    label: sql`excluded.label`,
    blurb: sql`excluded.blurb`,
    imageUrl: sql`excluded.image_url`,
    position: sql`excluded.position`,
    active: true,
    updatedAt: now,
  },
});

await db.insert(products).values(
  catalogProducts.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    categorySlug: product.category,
    description: product.description,
    priceCents: Math.round(product.price * 100),
    originalPriceCents: product.originalPrice == null ? null : Math.round(product.originalPrice * 100),
    inStock: product.inStock,
    featured: product.featured,
    isNew: product.isNew,
    active: true,
    publishedAt: new Date(`${product.createdAt}T12:00:00.000Z`),
    createdAt: new Date(`${product.createdAt}T12:00:00.000Z`),
    updatedAt: now,
  })),
).onConflictDoUpdate({
  target: products.id,
  set: {
    slug: sql`excluded.slug`,
    name: sql`excluded.name`,
    categorySlug: sql`excluded.category_slug`,
    description: sql`excluded.description`,
    priceCents: sql`excluded.price_cents`,
    originalPriceCents: sql`excluded.original_price_cents`,
    inStock: sql`excluded.in_stock`,
    featured: sql`excluded.featured`,
    isNew: sql`excluded.is_new`,
    active: true,
    updatedAt: now,
  },
});

await db.delete(productImages).where(inArray(productImages.productId, productIds));
await db.delete(productSizes).where(inArray(productSizes.productId, productIds));
await db.delete(productColors).where(inArray(productColors.productId, productIds));

const imageValues = catalogProducts.flatMap((product) => product.images.map((url, position) => ({ productId: product.id, url, alt: product.name, position })));
const sizeValues = catalogProducts.flatMap((product) => product.sizes.map((size, position) => ({ productId: product.id, size, position })));
const colorValues = catalogProducts.flatMap((product) => product.colors.map((color, position) => ({ productId: product.id, color, position })));

if (imageValues.length) await db.insert(productImages).values(imageValues);
if (sizeValues.length) await db.insert(productSizes).values(sizeValues);
if (colorValues.length) await db.insert(productColors).values(colorValues);

await db.insert(siteSettings).values({
  key: "catalog",
  value: { currency: "BRL", seededProducts: catalogProducts.length, seededAt: now.toISOString() },
  updatedAt: now,
}).onConflictDoUpdate({ target: siteSettings.key, set: { value: sql`excluded.value`, updatedAt: now } });

console.log(`Banco sincronizado: ${catalogProducts.length} produtos, ${imageValues.length} imagens, ${sizeValues.length} tamanhos e ${colorValues.length} cores.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
