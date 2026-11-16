"use client";

import Link from "next/link";
import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

const products: RailGarment[] = [
  { id: "camiseta-flor-azul", name: "Camiseta Flor Azul", tag: "R$ 99,90", image: "/store-rail/camiseta-flor-azul-frente.png" },
  { id: "camiseta-beach-off-white", name: "Camiseta Beach Off-white", tag: "R$ 109,90", image: "/store-rail/camiseta-beach-off-white-frente.png" },
  { id: "camiseta-rosa-basica", name: "Camiseta Rosa Básica", tag: "R$ 99,90", image: "/store-rail/camiseta-rosa-basica-frente.png" },
  { id: "camiseta-ballet-azul", name: "Camiseta Ballet Azul", tag: "R$ 109,90", image: "/store-rail/camiseta-ballet-azul-frente.png" },
  { id: "camiseta-azul-com-flores", name: "Camiseta Azul com Flores", tag: "R$ 129,90", image: "/store-rail/camiseta-azul-com-flores-frente.png", backImage: "/store-rail/camiseta-azul-com-flores-costas.png" },
  { id: "camiseta-relaxed-branca", name: "Camiseta Relaxed Branca", tag: "R$ 109,90", image: "/store-rail/camiseta-relaxed-branca-frente.png", backImage: "/store-rail/camiseta-relaxed-branca-costas.png" },
  { id: "cropped-canelado-azul", name: "Cropped Canelado Azul", tag: "R$ 89,90", image: "/store-rail/cropped-canelado-azul-frente.png" },
  { id: "body-azul-claro", name: "Body Azul Claro", tag: "R$ 129,90", image: "/store-rail/body-azul-claro-frente.png" },
  { id: "camiseta-girassol-terracota", name: "Camiseta Girassol Terracota", tag: "R$ 109,90", image: "/store-rail/camiseta-girassol-terracota-frente.png" },
  { id: "camiseta-vermelha-basica", name: "Camiseta Vermelha Básica", tag: "R$ 99,90", image: "/store-rail/camiseta-vermelha-basica-frente.png" },
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
