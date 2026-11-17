import type { Product } from "@/types/product";
import { catalogAdditions } from "@/data/catalog-additions";

/**
 * Curadoria visual revisada em 16/11/2026.
 *
 * O catálogo público mostra somente peças com ao menos uma foto de corpo inteiro.
 * Produtos fotografados apenas como peça isolada, enquadramentos parciais, capturas
 * de tela e imagens com resolução insuficiente ficam fora até receberem novas fotos.
 * A arara de camisetas da página inicial é independente deste catálogo.
 */
const excludedProductSlugs = new Set([
  // Peça retirada do catálogo a pedido da loja (17/11/2026).
  "conjunto-areia",
  // Lote de novembro fotografado somente como peça isolada em fundo branco.
  "bermuda-fitness-marrom",
  "bermuda-fitness-vinho",
  "blusa-bege-manga-longa",
  "body-azul-claro",
  "camiseta-azul-com-flores",
  "camiseta-ballet-azul",
  "camiseta-beach-off-white",
  "camiseta-bege-basica",
  "camiseta-fitness-azul-decote-v",
  "camiseta-fitness-marrom",
  "camiseta-fitness-verde-decote-v",
  "camiseta-fitness-verde-oliva",
  "camiseta-flor-azul",
  "camiseta-girassol-terracota",
  "camiseta-marrom-basica",
  "camiseta-relaxed-branca",
  "camiseta-rosa-basica",
  "camiseta-vermelha-basica",
  "cropped-branco-de-alcas",
  "cropped-canelado-azul",
  "cropped-fitness-preto",
  "jaqueta-corta-vento-off-white",
  "legging-fitness-marrom",
  "legging-fitness-verde-menta",
  "macaquinho-fitness-preto",
  "regata-canelada-azul",
  "regata-canelada-caramelo",
  "regata-fitness-marrom-nadador",
  "regata-verde-menta-de-alcas",
  "top-fitness-marrom-e-creme",
  "top-fitness-marrom-transpassado",
  "top-fitness-vinho-estruturado",

  // Peças anteriores sem foto de corpo inteiro ou sem qualidade suficiente.
  "blusa-azul-com-babados",
  "blusa-bege-basica",
  "blusa-bege-evase",
  "blusa-branca-ampla",
  "blusa-branca-classica",
  "blusa-branca-com-babados",
  "blusa-branca-decote-v",
  "blusa-estampada-com-short",
  "blusa-listrada-com-jeans",
  "blusa-preta-com-amarracao",
  "blusa-vinho",
  "calca-jeans-pantalona-clara",
  "calca-pantalona-azul",
  "camiseta-branca-oversized",
  "camiseta-marrom",
  "cardigan-branco-longo",
  "conjunto-azul-e-branco",
  "conjunto-azul-marinho-com-short",
  "conjunto-bege-com-blazer-cropped",
  "conjunto-bege-de-renda",
  "conjunto-branco-camisa-e-calca",
  "conjunto-branco-com-babados",
  "conjunto-branco-de-renda",
  "conjunto-branco-e-preto",
  "conjunto-creme-floral",
  "conjunto-fitness-bege",
  "conjunto-floral-rosa",
  "conjunto-lilas-gola-alta",
  "conjunto-rosa-claro",
  "conjunto-rosa-pink-de-alfaiataria",
  "conjunto-verde-musgo",
  "conjunto-vinho",
  "cropped-branco",
  "cropped-poa-marinho",
  "jaqueta-azul",
  "macacao-branco-pantalona",
  "macacao-rose",
  "macaquinho-azul",
  "macaquinho-branco-listrado",
  "macaquinho-jeans",
  "macaquinho-jeans-utilitario",
  "regata-verde",
  "regata-vinho",
  "vestido-azul-vivo",
  "vestido-jeans-tomara-que-caia",
  "vestido-longo-coral",
  "vestido-preto-estampado",
  "vestido-verde-estampado",
  "vestido-verde-midi",
]);

const excludedImages = new Set([
  "/products/conjunto-fitness-verde-menta/03.jpg",
  "/products/saia-curta-branca/04.jpg",
  "/products/saia-curta-branca/06.jpg",
  "/products/vestido-longo-patchwork/09.jpg",
  "/products/vestido-longo-patchwork/11.jpg",
  "/products/vestido-longo-patchwork/13.jpg",
  "/products/vestido-longo-preto/01.jpg",
  "/products/vestido-longo-preto/02.jpg",
  "/products/vestido-longo-preto/04.jpg",
  "/products/vestido-longo-preto/05.jpg",
  "/products/vestido-tubinho-marinho/04.jpg",
  "/products/vestido-utilitario-marrom/04.jpg",
  "/products/saia-curta-branca/03.jpg",
  "/products/regata-azul-claro/03.jpg",
  "/products/regata-rosa/04.jpg",
  "/products/regata-preta/02.jpg",
  "/products/conjunto-verde-de-alfaiataria/02.jpg",
  "/products/conjunto-verde-menta-com-saia/04.jpg",
  "/products/calca-pantalona-branca/05.jpg",
  "/products/calca-pantalona-branca/06.jpg",
  "/products/calca-pantalona-branca/07.jpg",
  "/products/blusa-azul-com-laco/02.jpg",
  "/products/calca-flare-vinho/01.jpg",
  "/products/calca-branca-reta/02.jpg",
  "/products/vestido-midi-marrom-estampado/04.jpg",
  "/products/vestido-midi-marrom-estampado/06.jpg",
  "/products/vestido-midi-marrom-estampado/07.jpg",
  "/products/vestido-midi-marrom-estampado/09.jpg",
  "/products/calca-jeans-wide-leg/04.jpg",
  "/products/calca-jeans-wide-leg/05.jpg",
  "/products/macacao-preto-de-alfaiataria/03.jpg",
  "/products/macacao-preto-de-alfaiataria/04.jpg",
  "/products/macacao-preto-de-alfaiataria/05.jpg",
  "/products/macacao-preto-de-alfaiataria/06.jpg",
  "/products/vestido-longo-bege-bordado/01.jpg",
  "/products/conjunto-lilas/06.jpg",
  "/products/conjunto-lilas/07.jpg",
  "/products/conjunto-lilas/08.jpg",
  "/products/conjunto-lilas/09.jpg",
  "/products/vestido-jeans-longo-com-botoes/01.jpg",
  "/products/vestido-jeans-longo-com-botoes/03.jpg",
]);

const imageOrderBySlug: Record<string, string[]> = {
  "regata-preta": [
    "/products/regata-preta/03.jpg",
    "/products/regata-preta/01.jpg",
  ],
  "conjunto-verde-menta-com-saia": [
    "/products/conjunto-verde-menta-com-saia/01.jpg",
    "/products/conjunto-verde-menta-com-saia/02.jpg",
    "/products/conjunto-verde-menta-com-saia/05.jpg",
    "/products/conjunto-verde-menta-com-saia/03.jpg",
  ],
  "blusa-azul-com-laco": [
    "/products/blusa-azul-com-laco/04.jpg",
    "/products/blusa-azul-com-laco/03.jpg",
    "/products/blusa-azul-com-laco/05.jpg",
  ],
  "calca-branca-reta": [
    "/products/calca-branca-reta/04.jpg",
    "/products/calca-branca-reta/03.jpg",
  ],
  "vestido-utilitario-marrom": [
    "/products/vestido-utilitario-marrom/01.jpg",
    "/products/vestido-utilitario-marrom/03.jpg",
  ],
  "vestido-jeans-longo-com-botoes": [
    "/products/vestido-jeans-longo-com-botoes/08.jpg",
    "/products/vestido-jeans-longo-com-botoes/02.jpg",
    "/products/vestido-jeans-longo-com-botoes/04.jpg",
    "/products/vestido-jeans-longo-com-botoes/06.jpg",
  ],
};

const imageReplacements: Record<string, string> = {
  "/products/saia-curta-branca/05.jpg": "/products/saia-curta-branca/05-clean-hq.png",
  "/products/blusa-pessego/01.jpg": "/products/blusa-pessego/01-clean-hq.png",
  "/products/blusa-pessego/02.jpg": "/products/blusa-pessego/02-clean-hq.png",
  "/products/conjunto-verde-de-alfaiataria/01.jpg": "/products/conjunto-verde-de-alfaiataria/01-clean-hq.webp",
  "/products/vestido-longo-preto/03.jpg": "/products/vestido-longo-preto/03-clean-hq.webp",
  "/products/macacao-verde-longo/02.jpg": "/products/macacao-verde-longo/02-clean-hq.webp",
  "/products/vestido-utilitario-marrom/01.jpg": "/products/vestido-utilitario-marrom/01-clean-hq.webp",
  "/products/vestido-longo-bege-bordado/02.jpg": "/products/vestido-longo-bege-bordado/02-clean-hq.webp",
  "/products/vestido-preto-bordado/01.jpg": "/products/vestido-preto-bordado/01-clean-hq.webp",
  "/products/vestido-midi-branco/01.jpg": "/products/vestido-midi-branco/01-clean-hq.webp",
};

const removedColorsBySlug: Record<string, Set<string>> = {
  "vestido-midi-marrom-estampado": new Set(["Estampado"]),
  "vestido-preto-bordado": new Set(["Estampado"]),
};

const containImageSlugs = new Set([
  "vestido-longo-preto",
  "vestido-utilitario-marrom",
  "vestido-longo-bege-bordado",
  "vestido-preto-bordado",
  "vestido-midi-branco",
  "macacao-verde-longo",
  "conjunto-verde-de-alfaiataria",
]);

export function curateProducts(products: Product[]): Product[] {
  const curated = products
    .filter((product) => !excludedProductSlugs.has(product.slug))
    .map((product) => {
      const requestedOrder = imageOrderBySlug[product.slug];
      const available = product.images.filter((image) => !excludedImages.has(image));
      const ordered = requestedOrder
        ? [
            ...requestedOrder.filter((image) => available.includes(image)),
            ...available.filter((image) => !requestedOrder.includes(image)),
          ]
        : available;
      const removedColors = removedColorsBySlug[product.slug];

      return {
        ...product,
        images: ordered.map((image) => imageReplacements[image] ?? image),
        colors: removedColors ? product.colors.filter((color) => !removedColors.has(color)) : product.colors,
        imageFit: containImageSlugs.has(product.slug) ? "contain" as const : product.imageFit,
      };
    })
    .filter((product) => product.images.length > 0);

  const existing = new Set(curated.map((product) => product.slug));
  return [...curated, ...catalogAdditions.filter((product) => !existing.has(product.slug))];
}
