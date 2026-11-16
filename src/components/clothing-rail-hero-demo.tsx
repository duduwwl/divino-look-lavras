"use client";

import Link from "next/link";
import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

export const railDemoItems: RailGarment[] = [
  { id: "blusa-azul-com-laco", name: "Blusa azul com laço", image: "/products/blusa-azul-com-laco/cutout-hq.png", tag: "R$ 119,90", description: "Azul delicado e laço para compor looks leves.", href: "/produtos/blusa-azul-com-laco", details: ["Blusas", "Azul"] },
  { id: "vestido-longo-patchwork", name: "Vestido longo patchwork", image: "/products/vestido-longo-patchwork/cutout-hq.png", tag: "R$ 219,90", description: "Estampa marcante com caimento fluido.", href: "/produtos/vestido-longo-patchwork", details: ["Vestidos", "Estampado"] },
  { id: "saia-longa-de-renda-branca", name: "Saia longa de renda branca", image: "/products/saia-longa-de-renda-branca/cutout-hq.png", tag: "R$ 129,90", description: "Renda leve para produções com movimento.", href: "/produtos/saia-longa-de-renda-branca", details: ["Saias", "Branco"] },
  { id: "macaquinho-jeans-utilitario", name: "Macaquinho jeans utilitário", image: "/products/macaquinho-jeans-utilitario/cutout-hq.png", tag: "R$ 209,90", description: "Jeans prático para todos os dias.", href: "/produtos/macaquinho-jeans-utilitario", details: ["Lançamentos", "Jeans"] },
  { id: "conjunto-fitness-verde-menta", name: "Conjunto fitness verde menta", image: "/products/conjunto-fitness-verde-menta/cutout-hq.png", tag: "R$ 169,90", description: "Conforto e cor para acompanhar o treino.", href: "/produtos/conjunto-fitness-verde-menta", details: ["Fitness", "Verde"] },
  { id: "vestido-jeans-longo-com-botoes", name: "Vestido jeans longo com botões", image: "/products/vestido-jeans-longo-com-botoes/cutout-hq.png", tag: "R$ 219,90", description: "Uma peça versátil em jeans longo.", href: "/produtos/vestido-jeans-longo-com-botoes", details: ["Vestidos", "Jeans"] },
  { id: "calca-pantalona-branca", name: "Calça pantalona branca", image: "/products/calca-pantalona-branca/cutout-hq.png", tag: "R$ 149,90", description: "Silhueta ampla e leve em branco.", href: "/produtos/calca-pantalona-branca", details: ["Calças", "Branco"] },
  { id: "conjunto-verde-menta-com-saia", name: "Conjunto verde menta com saia", image: "/products/conjunto-verde-menta-com-saia/01.jpg", tag: "R$ 229,90", description: "Uma combinação fresca em verde menta.", href: "/produtos/conjunto-verde-menta-com-saia", details: ["Conjuntos", "Verde"] },
  { id: "conjunto-fitness-bege", name: "Conjunto fitness bege", image: "/products/conjunto-fitness-bege/01.jpg", tag: "R$ 159,90", description: "Neutro e confortável para o dia ativo.", href: "/produtos/conjunto-fitness-bege", details: ["Fitness", "Bege"] },
  { id: "vestido-longo-preto", name: "Vestido longo preto", image: "/vestido-preto-editorial.png", tag: "R$ 189,90", description: "Longo preto para ocasiões especiais.", href: "/produtos/vestido-longo-preto", details: ["Vestidos", "Preto"] },
];

export default function ClothingRailHeroDemo({ autoplay = true }: { autoplay?: boolean }) {
  return <ClothingRailHero items={railDemoItems} hanger="none" eyebrow="Divino Look · Peças da loja" heading="Escolha o seu próximo look na arara." caption="Passe pelas peças, arraste um cabide ou toque para ver de perto." autoplay={autoplay} action={<Link className="btn btn-dark" href="/produtos">Ver a coleção</Link>} />;
}


