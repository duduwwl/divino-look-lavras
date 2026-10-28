import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categoryLabel } from "@/data/products";
import { getProductBySlug, getRelatedProducts } from "@/db/catalog";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductDetail } from "@/components/products/product-detail";
import { ProductHeading } from "@/components/products/product-heading";
import { ProductCard } from "@/components/products/product-card";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { siteConfig } from "@/config/site";

export const dynamicParams = true;
export const revalidate = 300;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) return {};
  const img = `${siteConfig.url}${p.images[0]}`;
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `produtos/${p.slug}/` },
    openGraph: {
      title: `${p.name} · Divino Look`,
      description: p.description,
      url: `produtos/${p.slug}/`,
      images: [{ url: img, width: 1200, height: 630, alt: p.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const related = await getRelatedProducts(product, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => `${siteConfig.url}${image}`),
    category: categoryLabel[product.category],
    brand: { "@type": "Brand", name: "Divino Look" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price.toFixed(2),
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `${siteConfig.url}/produtos/${product.slug}/`,
    },
  };

  return (
    <div className="pb-[clamp(96px,12vw,180px)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Trilha de navegação" className="frame pt-6 text-[0.875rem] text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="link-underline">
              Início
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/produtos" className="link-underline">
              Produtos
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/produtos?categoria=${product.category}`} className="link-underline">
              {categoryLabel[product.category]}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="frame mt-6 grid grid-cols-12 gap-y-8 lg:mt-8 lg:gap-x-8 lg:grid-rows-[auto_1fr] lg:gap-y-7">
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <ProductHeading product={product} />
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+16px)]">
            <ProductGallery key={product.id} images={product.images} name={product.name} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <ProductDetail key={product.id} product={product} />
        </div>
      </div>

      <section aria-labelledby="relacionados" className="frame pt-[clamp(96px,10vw,160px)]">
        <h2 id="relacionados" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
          Para completar o look
        </h2>
        <AnimatedGroup
          className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6"
          variants={{
            container: { visible: { transition: { staggerChildren: 0.06 } } },
            item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
          }}
        >
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatedGroup>
      </section>
    </div>
  );
}
