import type { Product } from "@/types/product";

/**
 * Curadoria visual revisada em 16/11/2026.
 *
 * O catálogo público mostra somente peças com ao menos uma foto de corpo inteiro.
 * Produtos fotografados apenas como peça isolada, enquadramentos parciais, capturas
 * de tela e imagens com resolução insuficiente ficam fora até receberem novas fotos.
 * A arara de camisetas da página inicial é independente deste catálogo.
 */
const excludedProductSlugs = new Set([
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
]);

export function curateProducts(products: Product[]): Product[] {
  return products
    .filter((product) => !excludedProductSlugs.has(product.slug))
    .map((product) => ({
      ...product,
      images: product.images.filter((image) => !excludedImages.has(image)),
    }))
    .filter((product) => product.images.length > 0);
}
