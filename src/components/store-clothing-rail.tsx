"use client";

import Link from "next/link";
import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

const products: RailGarment[] = [
  { id: "camiseta-flor-azul", name: "Camiseta Flor Azul", tag: "R$ 99,90", image: "/products/camiseta-flor-azul/01.jpg" },
  { id: "camiseta-beach-off-white", name: "Camiseta Beach Off-white", tag: "R$ 109,90", image: "/products/camiseta-beach-off-white/01.jpg" },
  { id: "camiseta-rosa-basica", name: "Camiseta Rosa Básica", tag: "R$ 99,90", image: "/products/camiseta-rosa-basica/01.jpg" },
  { id: "camiseta-ballet-azul", name: "Camiseta Ballet Azul", tag: "R$ 109,90", image: "/products/camiseta-ballet-azul/01.jpg" },
  { id: "camiseta-azul-com-flores", name: "Camiseta Azul com Flores", tag: "R$ 129,90", image: "/products/camiseta-azul-com-flores/01.jpg", backImage: "/products/camiseta-azul-com-flores/02.jpg" },
  { id: "camiseta-relaxed-branca", name: "Camiseta Relaxed Branca", tag: "R$ 109,90", image: "/products/camiseta-relaxed-branca/01.jpg", backImage: "/products/camiseta-relaxed-branca/02.jpg" },
  { id: "cropped-canelado-azul", name: "Cropped Canelado Azul", tag: "R$ 89,90", image: "/products/cropped-canelado-azul/01.jpg" },
  { id: "body-azul-claro", name: "Body Azul Claro", tag: "R$ 129,90", image: "/products/body-azul-claro/01.jpg" },
  { id: "camiseta-girassol-terracota", name: "Camiseta Girassol Terracota", tag: "R$ 109,90", image: "/products/camiseta-girassol-terracota/01.jpg" },
  { id: "camiseta-vermelha-basica", name: "Camiseta Vermelha Básica", tag: "R$ 99,90", image: "/products/camiseta-vermelha-basica/01.jpg" },
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

