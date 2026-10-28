import "server-only";
import { unstable_cache } from "next/cache";
import { asc, eq } from "drizzle-orm";
import {
  categories as fallbackCategories,
  getRelated as getFallbackRelated,
  products as fallbackProducts,
} from "@/data/products";
import type { CategoryFilter, CategorySlug, Product, Size } from "@/types/product";
import { getDb } from "./client";
import { categories, productColors, productImages, productSizes, products } from "./schema";

export type CatalogCategory = {
  slug: CategoryFilter;
  label: string;
  blurb: string;
  image: string;
};

function priceBoundsFor(items: Product[]) {
  if (!items.length) return { min: 0, max: 0 };
  return {
    min: Math.floor(Math.min(...items.map((product) => product.price)) / 10) * 10,
    max: Math.ceil(Math.max(...items.map((product) => product.price)) / 10) * 10,
  };
}

async function queryDatabaseCatalog() {
  const db = getDb();
  if (!db) return null;

  const [productRows, imageRows, sizeRows, colorRows, categoryRows] = await Promise.all([
    db.select().from(products).where(eq(products.active, true)).orderBy(asc(products.createdAt), asc(products.id)),
    db.select().from(productImages).orderBy(asc(productImages.productId), asc(productImages.position)),
    db.select().from(productSizes).orderBy(asc(productSizes.productId), asc(productSizes.position)),
    db.select().from(productColors).orderBy(asc(productColors.productId), asc(productColors.position)),
    db.select().from(categories).where(eq(categories.active, true)).orderBy(asc(categories.position)),
  ]);

  const imagesByProduct = new Map<string, string[]>();
  const sizesByProduct = new Map<string, Size[]>();
  const colorsByProduct = new Map<string, string[]>();

  for (const image of imageRows) {
    const list = imagesByProduct.get(image.productId) ?? [];
    list.push(image.url);
    imagesByProduct.set(image.productId, list);
  }
  for (const size of sizeRows) {
    const list = sizesByProduct.get(size.productId) ?? [];
    list.push(size.size as Size);
    sizesByProduct.set(size.productId, list);
  }
  for (const color of colorRows) {
    const list = colorsByProduct.get(color.productId) ?? [];
    list.push(color.color);
    colorsByProduct.set(color.productId, list);
  }

  const catalogProducts: Product[] = productRows.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.categorySlug as CategorySlug,
    description: product.description,
    price: product.priceCents / 100,
    ...(product.originalPriceCents == null ? {} : { originalPrice: product.originalPriceCents / 100 }),
    images: imagesByProduct.get(product.id) ?? [],
    sizes: sizesByProduct.get(product.id) ?? [],
    colors: colorsByProduct.get(product.id) ?? [],
    inStock: product.inStock,
    featured: product.featured,
    isNew: product.isNew,
    createdAt: product.createdAt.toISOString().slice(0, 10),
  }));

  const catalogCategories: CatalogCategory[] = categoryRows.map((category) => ({
    slug: category.slug as CategoryFilter,
    label: category.label,
    blurb: category.blurb,
    image: category.imageUrl,
  }));

  return { products: catalogProducts, categories: catalogCategories };
}

const getCachedDatabaseCatalog = unstable_cache(queryDatabaseCatalog, ["catalog-v1"], {
  tags: ["catalog"],
  revalidate: 300,
});

export async function getCatalogData() {
  let databaseCatalog = null;
  if (getDb()) {
    try {
      databaseCatalog = await getCachedDatabaseCatalog();
    } catch (error) {
      console.error("Falha ao consultar o catálogo no banco; usando fallback local.", error instanceof Error ? error.message : "Erro desconhecido");
    }
  }
  const catalogProducts = databaseCatalog?.products.length ? databaseCatalog.products : fallbackProducts;
  const catalogCategories = databaseCatalog?.categories.length ? databaseCatalog.categories : fallbackCategories;
  return {
    products: catalogProducts,
    categories: catalogCategories,
    priceBounds: priceBoundsFor(catalogProducts),
    allColors: Array.from(new Set(catalogProducts.flatMap((product) => product.colors))).sort((a, b) => a.localeCompare(b, "pt-BR")),
  };
}

export async function getProductBySlug(slug: string) {
  const catalog = await getCatalogData();
  return catalog.products.find((product) => product.slug === slug);
}

export async function getRelatedProducts(product: Product, amount = 4) {
  if (!getDb()) return getFallbackRelated(product, amount);
  const catalog = await getCatalogData();
  return catalog.products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(catalog.products.filter((item) => item.id !== product.id && item.category !== product.category && item.featured))
    .slice(0, amount);
}
