import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const tiles = [
  ["/products/conjunto-floral-rosa/01.jpg", "Conjunto floral rosa"],
  ["/products/vestido-longo-coral/01.jpg", "Vestido longo coral"],
  ["/products/macaquinho-jeans-utilitario/02.jpg", "Macaquinho jeans utilitário"],
  ["/products/conjunto-verde-bordado/01.jpg", "Conjunto verde bordado"],
  ["/products/vestido-jeans-floral/03.jpg", "Vestido jeans floral"],
  ["/products/conjunto-vermelho/clean.png", "Conjunto vermelho"],
  ["/products/vestido-longo-listrado-coral/02.jpg", "Vestido longo listrado coral"],
  ["/products/conjunto-rose-de-alfaiataria/01.jpg", "Conjunto rosé de alfaiataria"],
] as const;

const whiteBackgrounds = new Set([
  "/products/conjunto-floral-rosa/01.jpg",
  "/products/conjunto-verde-bordado/01.jpg",
  "/products/vestido-jeans-floral/03.jpg",
  "/products/conjunto-vermelho/clean.png",
  "/products/vestido-longo-listrado-coral/02.jpg",
  "/products/conjunto-rose-de-alfaiataria/01.jpg",
]);

export function InstagramStrip() {
  return (
    <section aria-labelledby="instagram-titulo" className="pt-[clamp(160px,14vw,220px)]">
      <div className="frame flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="instagram-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
            Acompanhe a Divino Look no Instagram
          </h2>
          <p className="mt-2 max-w-[56ch]">
            Lançamentos, provas de look e bastidores da loja aparecem primeiro em {siteConfig.instagramHandle}. Veja algumas peças
            reais da coleção atual.
          </p>
        </div>
        <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-dark self-start md:self-auto">
          Seguir {siteConfig.instagramHandle}
        </a>
      </div>

      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 block"
        aria-label={`Abrir o perfil ${siteConfig.instagramHandle} no Instagram`}
      >
        <InfiniteSlider gap={6} speed={28} speedOnHover={8}>
          {tiles.map(([src, alt]) => (
            <span key={src} className="relative block aspect-square w-[44vw] overflow-hidden sm:w-[28vw] lg:w-[19vw]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 19vw, 44vw"
                className={`object-cover ${whiteBackgrounds.has(src) ? "mix-blend-multiply" : ""}`}
              />
            </span>
          ))}
        </InfiniteSlider>
      </a>
    </section>
  );
}
