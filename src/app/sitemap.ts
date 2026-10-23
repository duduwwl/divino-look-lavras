import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produtos/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/politicas/`, changeFrequency: "yearly", priority: 0.2 },
    ...products.map((p) => ({ url: `${base}/produtos/${p.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
