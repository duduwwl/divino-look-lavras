"use client";

import Link from "next/link";
import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

const products: Array<RailGarment & { slug: string }> = [
  { id: "blusa-azul-com-laco", slug: "blusa-azul-com-laco", name: "Blusa Azul com Laço", tag: "R$ 119,90", image: "/products/blusa-azul-com-laco/cutout-hq.png" },
  { id: "vestido-longo-patchwork", slug: "vestido-longo-patchwork", name: "Vestido Longo Patchwork", tag: "R$ 219,90", image: "/products/vestido-longo-patchwork/cutout-hq.png" },
  { id: "saia-longa-de-renda-branca", slug: "saia-longa-de-renda-branca", name: "Saia Longa de Renda Branca", tag: "R$ 129,90", image: "/products/saia-longa-de-renda-branca/cutout-hq.png" },
  { id: "conjunto-fitness-verde-menta", slug: "conjunto-fitness-verde-menta", name: "Conjunto Fitness Verde Menta", tag: "R$ 169,90", image: "/products/conjunto-fitness-verde-menta/cutout-hq.png" },
  { id: "vestido-jeans-longo-com-botoes", slug: "vestido-jeans-longo-com-botoes", name: "Vestido Jeans Longo com Botões", tag: "R$ 219,90", image: "/products/vestido-jeans-longo-com-botoes/cutout-hq.png" },
  { id: "calca-pantalona-branca", slug: "calca-pantalona-branca", name: "Calça Pantalona Branca", tag: "R$ 149,90", image: "/products/calca-pantalona-branca/cutout-hq.png" },
  { id: "conjunto-verde-menta-com-saia", slug: "conjunto-verde-menta-com-saia", name: "Conjunto Verde Menta com Saia", tag: "R$ 229,90", image: "/conjunto-verde-menta-recorte.png" },
  { id: "conjunto-fitness-bege", slug: "conjunto-fitness-bege", name: "Conjunto Fitness Bege", tag: "R$ 159,90", image: "/conjunto-fitness-bege-recorte.png" },
  { id: "macaquinho-jeans-utilitario", slug: "macaquinho-jeans-utilitario", name: "Conjunto Jeans Utilitário", tag: "R$ 209,90", image: "/products/macaquinho-jeans-utilitario/cutout-hq.png" },
  { id: "vestido-longo-preto", slug: "vestido-longo-preto", name: "Vestido Longo Preto", tag: "R$ 189,90", image: "/vestido-preto-recorte.png" },
];

export default function StoreClothingRail() {
  return (
    <ClothingRailHero
      items={products}
      hanger="wood"
      eyebrow="Seleção Divino Look"
      heading="Peças para acompanhar o seu momento"
      caption="Passe pela arara e escolha uma peça para ver de perto."
      autoplay
      action={<Link href="/produtos" className="rounded-full bg-[#36231f] px-6 py-3 text-sm font-medium text-white">Ver todas as peças</Link>}
    />
  );
}

