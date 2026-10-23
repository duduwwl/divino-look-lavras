import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { InView } from "@/components/motion-primitives/in-view";

const featured = products.filter((p) => p.featured && p.inStock).slice(0, 8);

export function FeaturedProducts() {
  return (
    <section aria-labelledby="destaques-titulo" className="frame pt-[clamp(96px,12vw,200px)]">
      <InView
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -15% 0px" }}
      >
        <div>
          <h2 id="destaques-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
            Peças em destaque
          </h2>
          <p className="mt-2 max-w-[52ch] text-muted">
            As favoritas da arara, prontas para compor o seu look. Escolha tamanho e cor e leve para a sacola.
          </p>
        </div>
        <Link href="/produtos?ordem=destaques" className="link-underline self-start text-[0.95rem] font-semibold sm:self-auto">
          Ver todos os produtos
        </Link>
      </InView>

      <AnimatedGroup
        className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6"
        variants={{
          container: { visible: { transition: { staggerChildren: 0.06 } } },
          item: {
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
          },
        }}
      >
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </AnimatedGroup>
    </section>
  );
}
