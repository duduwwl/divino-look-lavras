"use client";

import Link from "next/link";
import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

const products: RailGarment[] = [
  { id: "camiseta-flor-azul", name: "Camiseta Flor Azul", tag: "R$ 99,90", image: "/products/camiseta-flor-azul/cutout-hq.png" },
  { id: "camiseta-beach-off-white", name: "Camiseta Beach Off-white", tag: "R$ 109,90", image: "/products/camiseta-beach-off-white/cutout-hq.png" },
  { id: "camiseta-rosa-basica", name: "Camiseta Rosa Básica", tag: "R$ 99,90", image: "/products/camiseta-rosa-basica/cutout-hq.png" },
  { id: "camiseta-ballet-azul", name: "Camiseta Ballet Azul", tag: "R$ 109,90", image: "/products/camiseta-ballet-azul/cutout-hq.png" },
  { id: "camiseta-azul-com-flores", name: "Camiseta Azul com Flores", tag: "R$ 129,90", image: "/products/camiseta-azul-com-flores/cutout-hq.png" },
  { id: "camiseta-relaxed-branca", name: "Camiseta Relaxed Branca", tag: "R$ 109,90", image: "/products/camiseta-relaxed-branca/cutout-hq.png" },
  { id: "camiseta-girassol-terracota", name: "Camiseta Girassol Terracota", tag: "R$ 109,90", image: "/products/camiseta-girassol-terracota/cutout-hq.png" },
  { id: "camiseta-vermelha-basica", name: "Camiseta Vermelha Básica", tag: "R$ 99,90", image: "/products/camiseta-vermelha-basica/cutout-hq.png" },
];

export default function StoreClothingRail() {
  return (
    <ClothingRailHero
      className="store-clothing-rail"
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
