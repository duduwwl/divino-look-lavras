import Image from "next/image";
import { siteConfig } from "@/config/site";
import { photo } from "@/lib/photos";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const tiles = [
  ["1700150624576-c6c0641e54fe", "Retrato de moda em estúdio"],
  ["1606903037631-f09fd0bd74b4", "Treino com conjunto fitness"],
  ["1789110854083-e4752bded644", "Calça de alfaiataria listrada"],
  ["1761121317492-57feee4fc674", "Blusa vermelha vista de costas"],
  ["1730278392820-bf01de720248", "Vestido branco na rua"],
  ["1621261027519-a71ac66d5a68", "Arara com roupas"],
  ["1571513800374-df1bbe650e56", "Retrato com flor seca"],
  ["1712759519800-121e6ded66ee", "Alfaiataria azul na cidade"],
] as const;

export function InstagramStrip() {
  return (
    <section aria-labelledby="instagram-titulo" className="pt-[clamp(96px,12vw,200px)]">
      <div className="frame flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="instagram-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
            Acompanhe a Divino Look no Instagram
          </h2>
          <p className="mt-2 max-w-[56ch]">
            Lançamentos, provas de look e bastidores da loja aparecem primeiro em {siteConfig.instagramHandle}. As imagens abaixo
            são ilustrativas; os posts reais estão no perfil.
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
          {tiles.map(([id, alt]) => (
            <span key={id} className="relative block aspect-square w-[44vw] overflow-hidden bg-sand sm:w-[28vw] lg:w-[19vw]">
              <Image src={photo(id, "1:1")} alt={alt} fill sizes="(min-width: 1024px) 19vw, 44vw" className="object-cover" />
            </span>
          ))}
        </InfiniteSlider>
      </a>
    </section>
  );
}
