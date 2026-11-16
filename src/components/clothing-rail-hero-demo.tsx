"use client";

import ClothingRailHero from "./ui/clothing-rail-hero";
import type { RailGarment } from "./ui/clothing-rail-hero";

/**
 * Dez peças numa arara, no centro de uma página branca. Cada peça tem trê fotos recortadas (frente, costas e lado), já
 * com o cabide, na pasta public/clothing-rail-hero do projeto; photos troca essa pasta (um basePath do Next.js, um CDN).
 */
const piece = (photos: string, name: string) => ({
  image: `${photos}/${name}-frente.webp`,
  backImage: `${photos}/${name}-costas.webp`,
  sideImage: `${photos}/${name}-lado.webp`,
});

export const railDemoItems = (photos = "/clothing-rail-hero"): RailGarment[] => [
  {
    id: "camiseta-osso",
    name: "Camiseta pesada · Osso",
    kind: "tee",
    color: "#EFEBE2",
    tag: "R$ 189",
    description: "Algodão orgânico de 240 g/m², com um bordado tom sobre tom no peito.",
    details: ["240 g/m²", "Caimento regular", "Bordado tom sobre tom"],
    ...piece(photos, "camiseta-osso"),
  },
  {
    id: "camiseta-preta",
    name: "Camiseta estampada · Preta",
    kind: "tee",
    color: "#101214",
    tag: "R$ 199",
    description: "Camiseta preta com o logo em silk na frente e nas costas.",
    details: ["240 g/m²", "Caimento regular", "Silk"],
    ...piece(photos, "camiseta-preta"),
  },
  {
    id: "oxford-ceu",
    name: "Camisa oxford · Céu",
    kind: "shirt",
    color: "#A3D3EB",
    tag: "R$ 279",
    description: "Oxford azul-claro com gola de botão e um bordado pequeno no bolso.",
    details: ["Algodão oxford", "Gola de botão", "Bolso no peito"],
    ...piece(photos, "oxford-ceu"),
  },
  {
    id: "cardiga-oliva",
    name: "Cardigã de tricô · Oliva",
    kind: "knit",
    color: "#758151",
    tag: "R$ 349",
    description: "Cardigã grosso de lã verde-oliva, com botões de madeira e acabamento canelado.",
    details: ["Lã de cordeiro", "Botões de madeira", "Decote em V"],
    ...piece(photos, "cardiga-oliva"),
  },
  {
    id: "moletom-mescla",
    name: "Moletom com capuz · Mescla",
    kind: "hoodie",
    color: "#A0A5AB",
    tag: "R$ 319",
    description: "Moletom cinza mescla com capuz e o logo escrito no peito.",
    details: ["Moletom de 400 g/m²", "Bolso canguru", "Estampa no peito"],
    ...piece(photos, "moletom-mescla"),
  },
  {
    id: "moletom-lilas",
    name: "Moletom careca · Lilás",
    kind: "knit",
    color: "#CCB2E0",
    tag: "R$ 289",
    description: "Moletom lilás sem capuz, com o logo em estampa de relevo.",
    details: ["Moletom de 400 g/m²", "Punhos canelados", "Estampa em relevo"],
    ...piece(photos, "moletom-lilas"),
  },
  {
    id: "polo-floresta",
    name: "Polo piquê · Floresta",
    kind: "tee",
    color: "#185B37",
    tag: "R$ 229",
    description: "Polo verde-floresta de piquê, com um bordado claro no peito.",
    details: ["Malha piquê", "Dois botões", "Bordado"],
    ...piece(photos, "polo-floresta"),
  },
  {
    id: "henley-tijolo",
    name: "Henley · Tijolo",
    kind: "knit",
    color: "#B05139",
    tag: "R$ 209",
    description: "Henley cor de tijolo com trê botões, com cara de usada desde o primeiro dia.",
    details: ["Algodão flamê", "Trê botões", "Manga longa"],
    ...piece(photos, "henley-tijolo"),
  },
  {
    id: "listrada",
    name: "Manga longa listrada",
    kind: "knit",
    color: "#E4DFD3",
    tag: "R$ 219",
    description: "A listra marinheira clássica, azul-marinho e osso, com gola canoa.",
    details: ["220 g/m²", "Gola canoa", "Manga longa"],
    ...piece(photos, "listrada"),
  },
  {
    id: "camiseta-ocre",
    name: "Camiseta oversized · Ocre",
    kind: "tee",
    color: "#DE9C31",
    tag: "R$ 199",
    description: "Camiseta ampla cor de ocre, com um logo pequeno na frente e um grande nas costas.",
    details: ["Oversized", "Ombro caído", "Estampa nas costas"],
    ...piece(photos, "camiseta-ocre"),
  },
];

export default function ClothingRailHeroDemo({ autoplay = true, photos = "/clothing-rail-hero" }: { autoplay?: boolean; photos?: string }) {
  return (
    <div className="crh-demo">
      <style dangerouslySetInnerHTML={{ __html: DEMO_CSS }} />
      <ClothingRailHero
        items={railDemoItems(photos)}
        hanger="none"
        eyebrow="Nova coleção · Dez peças na arara"
        heading="Uma arara de roupas de verdade, na própria página."
        caption="Passe pela arara, arraste um cabide, tire uma peça para ver as costas."
        autoplay={autoplay}
        action={
          <button type="button" className="crh-demo-cta">
            Ver a coleção
          </button>
        }
      />
    </div>
  );
}

const DEMO_CSS = `
.crh-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 100svh;
  background: #fff;
}
.crh-demo .crh-demo-cta {
  padding: 10px 20px;
  border: 0;
  border-radius: 999px;
  background: #0a0a0a;
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: translate 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-demo .crh-demo-cta:hover { translate: 0 -1px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); }
.crh-demo .crh-demo-cta:focus-visible { box-shadow: 0 0 0 2px #fff, 0 0 0 4px #a1a1a1; }
@media (prefers-reduced-motion: reduce) {
  .crh-demo .crh-demo-cta { transition: none; }
}
`;
