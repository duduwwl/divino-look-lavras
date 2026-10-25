import type { CategoryFilter, CategorySlug, Product, Size } from "@/types/product";

/** Catálogo montado exclusivamente com as fotos reais fornecidas pela Divino Look. */
export const categories: { slug: CategoryFilter; label: string; blurb: string; image: string }[] = [
  {
    "slug": "vestidos",
    "label": "Vestidos",
    "blurb": "Midi, longos e chemises",
    "image": "/products/vestido-longo-listrado-coral/01.jpg"
  },
  {
    "slug": "conjuntos",
    "label": "Conjuntos",
    "blurb": "Alfaiataria e coordenados",
    "image": "/products/conjunto-rosa-pink-de-alfaiataria/01.jpg"
  },
  {
    "slug": "blusas",
    "label": "Blusas",
    "blurb": "Do básico ao delicado",
    "image": "/products/blusa-azul-com-laco/01.jpg"
  },
  {
    "slug": "calcas",
    "label": "Calças",
    "blurb": "Pantalonas e retas",
    "image": "/products/calca-pantalona-branca/01.jpg"
  },
  {
    "slug": "saias",
    "label": "Saias",
    "blurb": "Midi, longas e curtas",
    "image": "/products/saia-longa-de-renda-branca/01.jpg"
  },
  {
    "slug": "fitness",
    "label": "Moda Fitness",
    "blurb": "Para treinar com estilo",
    "image": "/products/conjunto-fitness-verde-menta/01.jpg"
  },
  {
    "slug": "lancamentos",
    "label": "Lançamentos",
    "blurb": "O que acabou de chegar",
    "image": "/products/macaquinho-jeans-utilitario/02.jpg"
  }
];

export const categoryLabel: Record<CategorySlug, string> = {
  vestidos: "Vestidos", conjuntos: "Conjuntos", blusas: "Blusas", calcas: "Calças", saias: "Saias", fitness: "Moda Fitness",
};

export const ALL_SIZES: Size[] = ["PP", "P", "M", "G", "GG", "Único"];

export const colorSwatches: Record<string, string> = {
  Preto: "#1f1c1a", Branco: "#ffffff", "Off-white": "#f1eadf", Bege: "#d9c4a8", Caramelo: "#a86f43",
  Marrom: "#6e463c", Rosa: "#e3b5b3", Vermelho: "#9e2f2b", Vinho: "#5e2130", Azul: "#3b587f",
  Verde: "#56704f", Amarelo: "#dcb24c", Lilás: "#b9a6cc", Cinza: "#9a9591", Estampado: "pattern",
};

export const products: Product[] = [
  {
    "id": "real-001",
    "slug": "saia-curta-branca",
    "name": "Saia Curta Branca",
    "category": "saias",
    "description": "Saia Curta Branca da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 129.9,
    "images": [
      "/products/saia-curta-branca/01.jpg",
      "/products/saia-curta-branca/02.jpg",
      "/products/saia-curta-branca/03.jpg",
      "/products/saia-curta-branca/04.jpg",
      "/products/saia-curta-branca/05.jpg",
      "/products/saia-curta-branca/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-002",
    "slug": "regata-amarela-canelada",
    "name": "Regata Amarela Canelada",
    "category": "blusas",
    "description": "Regata Amarela Canelada da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/regata-amarela-canelada/01.jpg",
      "/products/regata-amarela-canelada/02.jpg",
      "/products/regata-amarela-canelada/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Amarelo"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-003",
    "slug": "regata-azul-claro",
    "name": "Regata Azul Claro",
    "category": "blusas",
    "description": "Regata Azul Claro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/regata-azul-claro/01.jpg",
      "/products/regata-azul-claro/02.jpg",
      "/products/regata-azul-claro/03.jpg",
      "/products/regata-azul-claro/04.jpg",
      "/products/regata-azul-claro/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-004",
    "slug": "regata-rosa",
    "name": "Regata Rosa",
    "category": "blusas",
    "description": "Regata Rosa da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/regata-rosa/01.jpg",
      "/products/regata-rosa/02.jpg",
      "/products/regata-rosa/03.jpg",
      "/products/regata-rosa/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-005",
    "slug": "regata-preta",
    "name": "Regata Preta",
    "category": "blusas",
    "description": "Regata Preta da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/regata-preta/01.jpg",
      "/products/regata-preta/02.jpg",
      "/products/regata-preta/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-006",
    "slug": "blusa-pessego",
    "name": "Blusa Pêssego",
    "category": "blusas",
    "description": "Blusa Pêssego da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-pessego/01.jpg",
      "/products/blusa-pessego/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Caramelo"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-007",
    "slug": "calca-jeans-pantalona-clara",
    "name": "Calça Jeans Pantalona Clara",
    "category": "calcas",
    "description": "Calça Jeans Pantalona Clara da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/calca-jeans-pantalona-clara/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-008",
    "slug": "blusa-branca-ampla",
    "name": "Blusa Branca Ampla",
    "category": "blusas",
    "description": "Blusa Branca Ampla da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/blusa-branca-ampla/01.jpg",
      "/products/blusa-branca-ampla/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-009",
    "slug": "conjunto-verde-de-alfaiataria",
    "name": "Conjunto Verde de Alfaiataria",
    "category": "conjuntos",
    "description": "Conjunto Verde de Alfaiataria da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-verde-de-alfaiataria/01.jpg",
      "/products/conjunto-verde-de-alfaiataria/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-010",
    "slug": "conjunto-areia",
    "name": "Conjunto Areia",
    "category": "conjuntos",
    "description": "Conjunto Areia da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-areia/01.jpg",
      "/products/conjunto-areia/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-011",
    "slug": "macaquinho-azul",
    "name": "Macaquinho Azul",
    "category": "conjuntos",
    "description": "Macaquinho Azul da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/macaquinho-azul/01.jpg",
      "/products/macaquinho-azul/02.jpg",
      "/products/macaquinho-azul/03.jpg",
      "/products/macaquinho-azul/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-012",
    "slug": "conjunto-verde-menta-com-saia",
    "name": "Conjunto Verde Menta com Saia",
    "category": "conjuntos",
    "description": "Conjunto Verde Menta com Saia da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-verde-menta-com-saia/01.jpg",
      "/products/conjunto-verde-menta-com-saia/02.jpg",
      "/products/conjunto-verde-menta-com-saia/03.jpg",
      "/products/conjunto-verde-menta-com-saia/04.jpg",
      "/products/conjunto-verde-menta-com-saia/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-013",
    "slug": "conjunto-cinza",
    "name": "Conjunto Cinza",
    "category": "conjuntos",
    "description": "Conjunto Cinza da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-cinza/01.jpg",
      "/products/conjunto-cinza/02.jpg",
      "/products/conjunto-cinza/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Cinza"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-014",
    "slug": "conjunto-azul-claro",
    "name": "Conjunto Azul Claro",
    "category": "conjuntos",
    "description": "Conjunto Azul Claro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-azul-claro/01.jpg",
      "/products/conjunto-azul-claro/02.jpg",
      "/products/conjunto-azul-claro/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-015",
    "slug": "conjunto-amarelo",
    "name": "Conjunto Amarelo",
    "category": "conjuntos",
    "description": "Conjunto Amarelo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-amarelo/01.jpg",
      "/products/conjunto-amarelo/02.jpg",
      "/products/conjunto-amarelo/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Amarelo"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-016",
    "slug": "conjunto-cinza-com-saia-midi",
    "name": "Conjunto Cinza com Saia Midi",
    "category": "conjuntos",
    "description": "Conjunto Cinza com Saia Midi da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-cinza-com-saia-midi/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Cinza"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-017",
    "slug": "calca-pantalona-branca",
    "name": "Calça Pantalona Branca",
    "category": "calcas",
    "description": "Calça Pantalona Branca da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 149.9,
    "images": [
      "/products/calca-pantalona-branca/01.jpg",
      "/products/calca-pantalona-branca/02.jpg",
      "/products/calca-pantalona-branca/03.jpg",
      "/products/calca-pantalona-branca/04.jpg",
      "/products/calca-pantalona-branca/05.jpg",
      "/products/calca-pantalona-branca/06.jpg",
      "/products/calca-pantalona-branca/07.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-018",
    "slug": "conjunto-fitness-bege",
    "name": "Conjunto Fitness Bege",
    "category": "fitness",
    "description": "Conjunto Fitness Bege da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 159.9,
    "images": [
      "/products/conjunto-fitness-bege/01.jpg",
      "/products/conjunto-fitness-bege/02.jpg",
      "/products/conjunto-fitness-bege/03.jpg",
      "/products/conjunto-fitness-bege/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": true,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-019",
    "slug": "conjunto-fitness-verde-menta",
    "name": "Conjunto Fitness Verde Menta",
    "category": "fitness",
    "description": "Conjunto Fitness Verde Menta da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/conjunto-fitness-verde-menta/01.jpg",
      "/products/conjunto-fitness-verde-menta/02.jpg",
      "/products/conjunto-fitness-verde-menta/03.jpg",
      "/products/conjunto-fitness-verde-menta/04.jpg",
      "/products/conjunto-fitness-verde-menta/05.jpg",
      "/products/conjunto-fitness-verde-menta/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-020",
    "slug": "blusa-azul-com-laco",
    "name": "Blusa Azul com Laço",
    "category": "blusas",
    "description": "Blusa Azul com Laço da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/blusa-azul-com-laco/02.jpg",
      "/products/blusa-azul-com-laco/03.jpg",
      "/products/blusa-azul-com-laco/04.jpg",
      "/products/blusa-azul-com-laco/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-021",
    "slug": "blusa-branca-fluida",
    "name": "Blusa Branca Fluida",
    "category": "blusas",
    "description": "Blusa Branca Fluida da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/blusa-branca-fluida/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-022",
    "slug": "blusa-azul-com-babados",
    "name": "Blusa Azul com Babados",
    "category": "blusas",
    "description": "Blusa Azul com Babados da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-azul-com-babados/01.jpg",
      "/products/blusa-azul-com-babados/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-023",
    "slug": "regata-verde",
    "name": "Regata Verde",
    "category": "blusas",
    "description": "Regata Verde da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/regata-verde/01.jpg",
      "/products/regata-verde/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-025",
    "slug": "calca-flare-vinho",
    "name": "Calça Flare Vinho",
    "category": "calcas",
    "description": "Calça Flare Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 149.9,
    "images": [
      "/products/calca-flare-vinho/01.jpg",
      "/products/calca-flare-vinho/02.jpg",
      "/products/calca-flare-vinho/03.jpg",
      "/products/calca-flare-vinho/04.jpg",
      "/products/calca-flare-vinho/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Vinho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-026",
    "slug": "saia-longa-vinho",
    "name": "Saia Longa Vinho",
    "category": "saias",
    "description": "Saia Longa Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 139.9,
    "images": [
      "/products/saia-longa-vinho/01.jpg",
      "/products/saia-longa-vinho/02.jpg",
      "/products/saia-longa-vinho/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vinho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-027",
    "slug": "vestido-curto-preto",
    "name": "Vestido Curto Preto",
    "category": "vestidos",
    "description": "Vestido Curto Preto da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-curto-preto/01.jpg",
      "/products/vestido-curto-preto/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-028",
    "slug": "regata-marrom",
    "name": "Regata Marrom",
    "category": "blusas",
    "description": "Regata Marrom da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/regata-marrom/01.jpg",
      "/products/regata-marrom/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Marrom"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-029",
    "slug": "blusa-preta-assimetrica",
    "name": "Blusa Preta Assimétrica",
    "category": "blusas",
    "description": "Blusa Preta Assimétrica da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/blusa-preta-assimetrica/01.jpg",
      "/products/blusa-preta-assimetrica/02.jpg",
      "/products/blusa-preta-assimetrica/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-030",
    "slug": "blusa-bege-evase",
    "name": "Blusa Bege Evasê",
    "category": "blusas",
    "description": "Blusa Bege Evasê da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-bege-evase/01.jpg",
      "/products/blusa-bege-evase/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": true,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-031",
    "slug": "calca-branca-reta",
    "name": "Calça Branca Reta",
    "category": "calcas",
    "description": "Calça Branca Reta da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/calca-branca-reta/02.jpg",
      "/products/calca-branca-reta/03.jpg",
      "/products/calca-branca-reta/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-032",
    "slug": "cropped-branco",
    "name": "Cropped Branco",
    "category": "blusas",
    "description": "Cropped Branco da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/cropped-branco/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-033",
    "slug": "vestido-longo-preto",
    "name": "Vestido Longo Preto",
    "category": "vestidos",
    "description": "Vestido Longo Preto da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 189.9,
    "images": [
      "/products/vestido-longo-preto/01.jpg",
      "/products/vestido-longo-preto/02.jpg",
      "/products/vestido-longo-preto/03.jpg",
      "/products/vestido-longo-preto/04.jpg",
      "/products/vestido-longo-preto/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-034",
    "slug": "chemise-longa-bege",
    "name": "Chemise Longa Bege",
    "category": "vestidos",
    "description": "Chemise Longa Bege da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/chemise-longa-bege/04.jpg",
      "/products/chemise-longa-bege/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-035",
    "slug": "conjunto-branco-camisa-e-calca",
    "name": "Conjunto Branco Camisa e Calça",
    "category": "conjuntos",
    "description": "Conjunto Branco Camisa e Calça da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-branco-camisa-e-calca/01.jpg",
      "/products/conjunto-branco-camisa-e-calca/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-036",
    "slug": "blusa-branca-classica",
    "name": "Blusa Branca Clássica",
    "category": "blusas",
    "description": "Blusa Branca Clássica da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/blusa-branca-classica/01.jpg",
      "/products/blusa-branca-classica/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-037",
    "slug": "blusa-preta-com-amarracao",
    "name": "Blusa Preta com Amarração",
    "category": "blusas",
    "description": "Blusa Preta com Amarração da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/blusa-preta-com-amarracao/01.jpg",
      "/products/blusa-preta-com-amarracao/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-038",
    "slug": "vestido-midi-marrom-estampado",
    "name": "Vestido Midi Marrom Estampado",
    "category": "vestidos",
    "description": "Vestido Midi Marrom Estampado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-midi-marrom-estampado/02.jpg",
      "/products/vestido-midi-marrom-estampado/03.jpg",
      "/products/vestido-midi-marrom-estampado/04.jpg",
      "/products/vestido-midi-marrom-estampado/05.jpg",
      "/products/vestido-midi-marrom-estampado/06.jpg",
      "/products/vestido-midi-marrom-estampado/07.jpg",
      "/products/vestido-midi-marrom-estampado/08.jpg",
      "/products/vestido-midi-marrom-estampado/09.jpg",
      "/products/vestido-midi-marrom-estampado/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Marrom",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-039",
    "slug": "blusa-vinho",
    "name": "Blusa Vinho",
    "category": "blusas",
    "description": "Blusa Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/blusa-vinho/01.jpg",
      "/products/blusa-vinho/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vinho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-040",
    "slug": "conjunto-verde-musgo",
    "name": "Conjunto Verde Musgo",
    "category": "conjuntos",
    "description": "Conjunto Verde Musgo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-verde-musgo/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-041",
    "slug": "macacao-verde-longo",
    "name": "Macacão Verde Longo",
    "category": "conjuntos",
    "description": "Macacão Verde Longo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macacao-verde-longo/02.jpg",
      "/products/macacao-verde-longo/03.jpg",
      "/products/macacao-verde-longo/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-042",
    "slug": "vestido-utilitario-marrom",
    "name": "Vestido Utilitário Marrom",
    "category": "vestidos",
    "description": "Vestido Utilitário Marrom da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-utilitario-marrom/01.jpg",
      "/products/vestido-utilitario-marrom/04.jpg",
      "/products/vestido-utilitario-marrom/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Marrom"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-043",
    "slug": "calca-jeans-wide-leg",
    "name": "Calça Jeans Wide Leg",
    "category": "calcas",
    "description": "Calça Jeans Wide Leg da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/calca-jeans-wide-leg/01.jpg",
      "/products/calca-jeans-wide-leg/02.jpg",
      "/products/calca-jeans-wide-leg/03.jpg",
      "/products/calca-jeans-wide-leg/04.jpg",
      "/products/calca-jeans-wide-leg/05.jpg",
      "/products/calca-jeans-wide-leg/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-044",
    "slug": "regata-vinho",
    "name": "Regata Vinho",
    "category": "blusas",
    "description": "Regata Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/regata-vinho/01.jpg",
      "/products/regata-vinho/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vinho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-045",
    "slug": "camiseta-branca-oversized",
    "name": "Camiseta Branca Oversized",
    "category": "blusas",
    "description": "Camiseta Branca Oversized da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/camiseta-branca-oversized/01.jpg",
      "/products/camiseta-branca-oversized/02.jpg",
      "/products/camiseta-branca-oversized/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-046",
    "slug": "camisa-rosa-ampla",
    "name": "Camisa Rosa Ampla",
    "category": "blusas",
    "description": "Camisa Rosa Ampla da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/camisa-rosa-ampla/01.jpg",
      "/products/camisa-rosa-ampla/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-047",
    "slug": "camiseta-marrom",
    "name": "Camiseta Marrom",
    "category": "blusas",
    "description": "Camiseta Marrom da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/camiseta-marrom/01.jpg",
      "/products/camiseta-marrom/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Marrom"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-048",
    "slug": "conjunto-vinho",
    "name": "Conjunto Vinho",
    "category": "conjuntos",
    "description": "Conjunto Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-vinho/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vinho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-049",
    "slug": "conjunto-azul-marinho-com-short",
    "name": "Conjunto Azul Marinho com Short",
    "category": "conjuntos",
    "description": "Conjunto Azul Marinho com Short da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-azul-marinho-com-short/01.jpg",
      "/products/conjunto-azul-marinho-com-short/02.jpg",
      "/products/conjunto-azul-marinho-com-short/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-050",
    "slug": "macacao-preto-de-alfaiataria",
    "name": "Macacão Preto de Alfaiataria",
    "category": "conjuntos",
    "description": "Macacão Preto de Alfaiataria da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/macacao-preto-de-alfaiataria/01.jpg",
      "/products/macacao-preto-de-alfaiataria/02.jpg",
      "/products/macacao-preto-de-alfaiataria/03.jpg",
      "/products/macacao-preto-de-alfaiataria/04.jpg",
      "/products/macacao-preto-de-alfaiataria/05.jpg",
      "/products/macacao-preto-de-alfaiataria/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-051",
    "slug": "vestido-verde-midi",
    "name": "Vestido Verde Midi",
    "category": "vestidos",
    "description": "Vestido Verde Midi da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-verde-midi/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-052",
    "slug": "conjunto-curto-cru",
    "name": "Conjunto Curto Cru",
    "category": "conjuntos",
    "description": "Conjunto Curto Cru da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-curto-cru/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-053",
    "slug": "vestido-longo-bege-bordado",
    "name": "Vestido Longo Bege Bordado",
    "category": "vestidos",
    "description": "Vestido Longo Bege Bordado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 189.9,
    "images": [
      "/products/vestido-longo-bege-bordado/01.jpg",
      "/products/vestido-longo-bege-bordado/02.jpg",
      "/products/vestido-longo-bege-bordado/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-054",
    "slug": "conjunto-branco-de-renda",
    "name": "Conjunto Branco de Renda",
    "category": "conjuntos",
    "description": "Conjunto Branco de Renda da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-branco-de-renda/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-055",
    "slug": "vestido-preto-bordado",
    "name": "Vestido Preto Bordado",
    "category": "vestidos",
    "description": "Vestido Preto Bordado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-preto-bordado/01.jpg",
      "/products/vestido-preto-bordado/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-056",
    "slug": "conjunto-lilas",
    "name": "Conjunto Lilás",
    "category": "conjuntos",
    "description": "Conjunto Lilás da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-lilas/01.jpg",
      "/products/conjunto-lilas/02.jpg",
      "/products/conjunto-lilas/03.jpg",
      "/products/conjunto-lilas/04.jpg",
      "/products/conjunto-lilas/05.jpg",
      "/products/conjunto-lilas/06.jpg",
      "/products/conjunto-lilas/07.jpg",
      "/products/conjunto-lilas/08.jpg",
      "/products/conjunto-lilas/09.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Lilás"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-057",
    "slug": "conjunto-lilas-gola-alta",
    "name": "Conjunto Lilás Gola Alta",
    "category": "conjuntos",
    "description": "Conjunto Lilás Gola Alta da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-lilas-gola-alta/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Lilás"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-058",
    "slug": "vestido-azul-em-camadas",
    "name": "Vestido Azul em Camadas",
    "category": "vestidos",
    "description": "Vestido Azul em Camadas da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-azul-em-camadas/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-059",
    "slug": "jaqueta-azul",
    "name": "Jaqueta Azul",
    "category": "blusas",
    "description": "Jaqueta Azul da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/jaqueta-azul/01.jpg",
      "/products/jaqueta-azul/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-060",
    "slug": "calca-pantalona-azul",
    "name": "Calça Pantalona Azul",
    "category": "calcas",
    "description": "Calça Pantalona Azul da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 179.9,
    "images": [
      "/products/calca-pantalona-azul/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-061",
    "slug": "saia-midi-crua",
    "name": "Saia Midi Crua",
    "category": "saias",
    "description": "Saia Midi Crua da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 129.9,
    "images": [
      "/products/saia-midi-crua/01.jpg",
      "/products/saia-midi-crua/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-062",
    "slug": "vestido-chemise-lilas",
    "name": "Vestido Chemise Lilás",
    "category": "vestidos",
    "description": "Vestido Chemise Lilás da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-chemise-lilas/01.jpg",
      "/products/vestido-chemise-lilas/02.jpg",
      "/products/vestido-chemise-lilas/03.jpg",
      "/products/vestido-chemise-lilas/04.jpg",
      "/products/vestido-chemise-lilas/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Lilás"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-063",
    "slug": "calca-estampada-vinho",
    "name": "Calça Estampada Vinho",
    "category": "calcas",
    "description": "Calça Estampada Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/calca-estampada-vinho/01.jpg",
      "/products/calca-estampada-vinho/02.jpg",
      "/products/calca-estampada-vinho/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Vinho",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-064",
    "slug": "vestido-jeans-midi",
    "name": "Vestido Jeans Midi",
    "category": "vestidos",
    "description": "Vestido Jeans Midi da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-jeans-midi/01.jpg",
      "/products/vestido-jeans-midi/02.jpg",
      "/products/vestido-jeans-midi/03.jpg",
      "/products/vestido-jeans-midi/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-065",
    "slug": "macaquinho-jeans",
    "name": "Macaquinho Jeans",
    "category": "conjuntos",
    "description": "Macaquinho Jeans da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macaquinho-jeans/01.jpg",
      "/products/macaquinho-jeans/02.jpg",
      "/products/macaquinho-jeans/03.jpg",
      "/products/macaquinho-jeans/04.jpg",
      "/products/macaquinho-jeans/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-066",
    "slug": "vestido-jeans-longo",
    "name": "Vestido Jeans Longo",
    "category": "vestidos",
    "description": "Vestido Jeans Longo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-jeans-longo/02.jpg",
      "/products/vestido-jeans-longo/03.jpg",
      "/products/vestido-jeans-longo/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-067",
    "slug": "conjunto-azul-e-branco",
    "name": "Conjunto Azul e Branco",
    "category": "conjuntos",
    "description": "Conjunto Azul e Branco da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-azul-e-branco/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco",
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-069",
    "slug": "cardigan-branco-longo",
    "name": "Cardigan Branco Longo",
    "category": "blusas",
    "description": "Cardigan Branco Longo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/cardigan-branco-longo/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-070",
    "slug": "vestido-chemise-estampado",
    "name": "Vestido Chemise Estampado",
    "category": "vestidos",
    "description": "Vestido Chemise Estampado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-chemise-estampado/01.jpg",
      "/products/vestido-chemise-estampado/02.jpg",
      "/products/vestido-chemise-estampado/03.jpg",
      "/products/vestido-chemise-estampado/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-071",
    "slug": "vestido-midi-branco",
    "name": "Vestido Midi Branco",
    "category": "vestidos",
    "description": "Vestido Midi Branco da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-midi-branco/01.jpg",
      "/products/vestido-midi-branco/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-072",
    "slug": "vestido-jeans-longo-com-botoes",
    "name": "Vestido Jeans Longo com Botões",
    "category": "vestidos",
    "description": "Vestido Jeans Longo com Botões da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-jeans-longo-com-botoes/01.jpg",
      "/products/vestido-jeans-longo-com-botoes/02.jpg",
      "/products/vestido-jeans-longo-com-botoes/03.jpg",
      "/products/vestido-jeans-longo-com-botoes/04.jpg",
      "/products/vestido-jeans-longo-com-botoes/06.jpg",
      "/products/vestido-jeans-longo-com-botoes/08.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-073",
    "slug": "vestido-tubinho-marinho",
    "name": "Vestido Tubinho Marinho",
    "category": "vestidos",
    "description": "Vestido Tubinho Marinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 189.9,
    "images": [
      "/products/vestido-tubinho-marinho/01.jpg",
      "/products/vestido-tubinho-marinho/04.jpg",
      "/products/vestido-tubinho-marinho/05.jpg",
      "/products/vestido-tubinho-marinho/06.jpg",
      "/products/vestido-tubinho-marinho/07.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-074",
    "slug": "macacao-verde-oliva",
    "name": "Macacão Verde Oliva",
    "category": "conjuntos",
    "description": "Macacão Verde Oliva da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/macacao-verde-oliva/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-075",
    "slug": "blusa-estampada-com-short",
    "name": "Blusa Estampada com Short",
    "category": "blusas",
    "description": "Blusa Estampada com Short da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/blusa-estampada-com-short/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-076",
    "slug": "vestido-longo-patchwork",
    "name": "Vestido Longo Patchwork",
    "category": "vestidos",
    "description": "Vestido Longo Patchwork da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-longo-patchwork/01.jpg",
      "/products/vestido-longo-patchwork/02.jpg",
      "/products/vestido-longo-patchwork/03.jpg",
      "/products/vestido-longo-patchwork/04.jpg",
      "/products/vestido-longo-patchwork/05.jpg",
      "/products/vestido-longo-patchwork/06.jpg",
      "/products/vestido-longo-patchwork/07.jpg",
      "/products/vestido-longo-patchwork/08.jpg",
      "/products/vestido-longo-patchwork/09.jpg",
      "/products/vestido-longo-patchwork/10.jpg",
      "/products/vestido-longo-patchwork/11.jpg",
      "/products/vestido-longo-patchwork/12.jpg",
      "/products/vestido-longo-patchwork/13.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-077",
    "slug": "macacao-jeans-pantalona",
    "name": "Macacão Jeans Pantalona",
    "category": "conjuntos",
    "description": "Macacão Jeans Pantalona da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macacao-jeans-pantalona/01.jpg",
      "/products/macacao-jeans-pantalona/02.jpg",
      "/products/macacao-jeans-pantalona/03.jpg",
      "/products/macacao-jeans-pantalona/04.jpg",
      "/products/macacao-jeans-pantalona/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-078",
    "slug": "blusa-patchwork",
    "name": "Blusa Patchwork",
    "category": "blusas",
    "description": "Blusa Patchwork da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-patchwork/01.jpg",
      "/products/blusa-patchwork/02.jpg",
      "/products/blusa-patchwork/03.jpg",
      "/products/blusa-patchwork/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-080",
    "slug": "conjunto-preto-essencial",
    "name": "Conjunto Preto Essencial",
    "category": "conjuntos",
    "description": "Conjunto Preto Essencial da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-preto-essencial/01.jpg",
      "/products/conjunto-preto-essencial/02.jpg",
      "/products/conjunto-preto-essencial/03.jpg",
      "/products/conjunto-preto-essencial/05.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-081",
    "slug": "conjunto-bege-com-blazer-cropped",
    "name": "Conjunto Bege com Blazer Cropped",
    "category": "conjuntos",
    "description": "Conjunto Bege com Blazer Cropped da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-bege-com-blazer-cropped/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-082",
    "slug": "vestido-branco-e-preto-de-renda",
    "name": "Vestido Branco e Preto de Renda",
    "category": "vestidos",
    "description": "Vestido Branco e Preto de Renda da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-branco-e-preto-de-renda/01.jpg",
      "/products/vestido-branco-e-preto-de-renda/06.jpg",
      "/products/vestido-branco-e-preto-de-renda/07.jpg",
      "/products/vestido-branco-e-preto-de-renda/08.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto",
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-083",
    "slug": "macacao-azul-marinho",
    "name": "Macacão Azul Marinho",
    "category": "conjuntos",
    "description": "Macacão Azul Marinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/macacao-azul-marinho/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-084",
    "slug": "macacao-rose",
    "name": "Macacão Rosé",
    "category": "conjuntos",
    "description": "Macacão Rosé da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/macacao-rose/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-085",
    "slug": "vestido-verde-estampado",
    "name": "Vestido Verde Estampado",
    "category": "vestidos",
    "description": "Vestido Verde Estampado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 189.9,
    "images": [
      "/products/vestido-verde-estampado/01.jpg",
      "/products/vestido-verde-estampado/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-086",
    "slug": "vestido-listrado-coral",
    "name": "Vestido Listrado Coral",
    "category": "vestidos",
    "description": "Vestido Listrado Coral da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-listrado-coral/01.jpg",
      "/products/vestido-listrado-coral/02.jpg",
      "/products/vestido-listrado-coral/03.jpg",
      "/products/vestido-listrado-coral/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vermelho",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-087",
    "slug": "vestido-longo-bege-com-laco",
    "name": "Vestido Longo Bege com Laço",
    "category": "vestidos",
    "description": "Vestido Longo Bege com Laço da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-longo-bege-com-laco/01.jpg",
      "/products/vestido-longo-bege-com-laco/02.jpg",
      "/products/vestido-longo-bege-com-laco/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-088",
    "slug": "calca-zebra",
    "name": "Calça Zebra",
    "category": "calcas",
    "description": "Calça Zebra da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 179.9,
    "images": [
      "/products/calca-zebra/01.jpg",
      "/products/calca-zebra/02.jpg",
      "/products/calca-zebra/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-089",
    "slug": "blusa-animal-print",
    "name": "Blusa Animal Print",
    "category": "blusas",
    "description": "Blusa Animal Print da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/blusa-animal-print/01.jpg",
      "/products/blusa-animal-print/02.jpg",
      "/products/blusa-animal-print/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-090",
    "slug": "conjunto-off-white",
    "name": "Conjunto Off-white",
    "category": "conjuntos",
    "description": "Conjunto Off-white da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-off-white/01.jpg",
      "/products/conjunto-off-white/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-091",
    "slug": "conjunto-colete-e-bermuda-caramelo",
    "name": "Conjunto Colete e Bermuda Caramelo",
    "category": "conjuntos",
    "description": "Conjunto Colete e Bermuda Caramelo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-colete-e-bermuda-caramelo/01.jpg",
      "/products/conjunto-colete-e-bermuda-caramelo/02.jpg",
      "/products/conjunto-colete-e-bermuda-caramelo/03.jpg",
      "/products/conjunto-colete-e-bermuda-caramelo/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Caramelo"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-092",
    "slug": "conjunto-colete-bege",
    "name": "Conjunto Colete Bege",
    "category": "conjuntos",
    "description": "Conjunto Colete Bege da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-colete-bege/01.jpg",
      "/products/conjunto-colete-bege/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-093",
    "slug": "macacao-preto-com-decote",
    "name": "Macacão Preto com Decote",
    "category": "conjuntos",
    "description": "Macacão Preto com Decote da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macacao-preto-com-decote/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-094",
    "slug": "conjunto-colete-e-bermuda-cru",
    "name": "Conjunto Colete e Bermuda Cru",
    "category": "conjuntos",
    "description": "Conjunto Colete e Bermuda Cru da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-colete-e-bermuda-cru/02.jpg",
      "/products/conjunto-colete-e-bermuda-cru/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-095",
    "slug": "blusa-bege-basica",
    "name": "Blusa Bege Básica",
    "category": "blusas",
    "description": "Blusa Bege Básica da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/blusa-bege-basica/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-096",
    "slug": "conjunto-rose-de-alfaiataria",
    "name": "Conjunto Rosé de Alfaiataria",
    "category": "conjuntos",
    "description": "Conjunto Rosé de Alfaiataria da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-rose-de-alfaiataria/01.jpg",
      "/products/conjunto-rose-de-alfaiataria/03.jpg",
      "/products/conjunto-rose-de-alfaiataria/04.jpg",
      "/products/conjunto-rose-de-alfaiataria/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-098",
    "slug": "vestido-curto-marinho",
    "name": "Vestido Curto Marinho",
    "category": "vestidos",
    "description": "Vestido Curto Marinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-curto-marinho/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-099",
    "slug": "vestido-preto-estampado",
    "name": "Conjunto Caramelo com Bermuda",
    "category": "conjuntos",
    "description": "Conjunto Caramelo com Bermuda da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-preto-estampado/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Caramelo"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-100",
    "slug": "conjunto-bege-com-calca",
    "name": "Conjunto Bege com Calça",
    "category": "conjuntos",
    "description": "Conjunto Bege com Calça da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-bege-com-calca/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-101",
    "slug": "calca-listrada-azul",
    "name": "Calça Listrada Azul",
    "category": "calcas",
    "description": "Calça Listrada Azul da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 149.9,
    "images": [
      "/products/calca-listrada-azul/01.jpg",
      "/products/calca-listrada-azul/02.jpg",
      "/products/calca-listrada-azul/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Azul",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-102",
    "slug": "vestido-longo-estampado-vinho",
    "name": "Vestido Longo Estampado Vinho",
    "category": "vestidos",
    "description": "Vestido Longo Estampado Vinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/vestido-longo-estampado-vinho/01.jpg",
      "/products/vestido-longo-estampado-vinho/02.jpg",
      "/products/vestido-longo-estampado-vinho/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vinho",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-103",
    "slug": "vestido-midi-listrado-marrom",
    "name": "Vestido Midi Listrado Marrom",
    "category": "vestidos",
    "description": "Vestido Midi Listrado Marrom da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-midi-listrado-marrom/01.jpg",
      "/products/vestido-midi-listrado-marrom/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Marrom",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-104",
    "slug": "cropped-poa-marinho",
    "name": "Cropped Poá Marinho",
    "category": "blusas",
    "description": "Cropped Poá Marinho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/cropped-poa-marinho/03.jpg",
      "/products/cropped-poa-marinho/02.jpg",
      "/products/cropped-poa-marinho/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-105",
    "slug": "saia-longa-de-renda-branca",
    "name": "Saia Longa de Renda Branca",
    "category": "saias",
    "description": "Saia Longa de Renda Branca da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 129.9,
    "images": [
      "/products/saia-longa-de-renda-branca/03.jpg",
      "/products/saia-longa-de-renda-branca/01.jpg",
      "/products/saia-longa-de-renda-branca/02.jpg",
      "/products/saia-longa-de-renda-branca/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-106",
    "slug": "saia-midi-preta",
    "name": "Saia Midi Preta",
    "category": "saias",
    "description": "Saia Midi Preta da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 139.9,
    "images": [
      "/products/saia-midi-preta/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-107",
    "slug": "vestido-longo-preto-amplo",
    "name": "Vestido Longo Preto Amplo",
    "category": "vestidos",
    "description": "Vestido Longo Preto Amplo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-longo-preto-amplo/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-109",
    "slug": "conjunto-verde-oliva",
    "name": "Conjunto Verde Oliva",
    "category": "conjuntos",
    "description": "Conjunto Verde Oliva da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-verde-oliva/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-110",
    "slug": "conjunto-branco-de-alfaiataria",
    "name": "Conjunto Branco de Alfaiataria",
    "category": "conjuntos",
    "description": "Conjunto Branco de Alfaiataria da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-branco-de-alfaiataria/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-111",
    "slug": "conjunto-rosa-claro",
    "name": "Conjunto Rosa Claro",
    "category": "conjuntos",
    "description": "Conjunto Rosa Claro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-rosa-claro/01.jpg",
      "/products/conjunto-rosa-claro/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-112",
    "slug": "vestido-longo-coral",
    "name": "Vestido Longo Coral",
    "category": "vestidos",
    "description": "Vestido Longo Coral da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-longo-coral/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vermelho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-113",
    "slug": "conjunto-branco-pantalona",
    "name": "Conjunto Branco Pantalona",
    "category": "conjuntos",
    "description": "Conjunto Branco Pantalona da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-branco-pantalona/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-114",
    "slug": "blusa-listrada-com-jeans",
    "name": "Blusa Listrada com Jeans",
    "category": "blusas",
    "description": "Blusa Listrada com Jeans da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-listrada-com-jeans/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-115",
    "slug": "camiseta-branca-e-jeans",
    "name": "Blusa Branca com Jeans",
    "category": "blusas",
    "description": "Blusa Branca com Jeans da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 109.9,
    "images": [
      "/products/camiseta-branca-e-jeans/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco",
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-116",
    "slug": "conjunto-verde-lima",
    "name": "Conjunto Verde Lima",
    "category": "conjuntos",
    "description": "Conjunto Verde Lima da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-verde-lima/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-117",
    "slug": "blusa-branca-com-babados",
    "name": "Blusa Branca com Babados",
    "category": "blusas",
    "description": "Blusa Branca com Babados da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 89.9,
    "images": [
      "/products/blusa-branca-com-babados/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-118",
    "slug": "conjunto-preto-pantalona",
    "name": "Conjunto Preto Pantalona",
    "category": "conjuntos",
    "description": "Conjunto Preto Pantalona da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-preto-pantalona/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-119",
    "slug": "vestido-midi-branco-reto",
    "name": "Vestido Midi Branco Reto",
    "category": "vestidos",
    "description": "Vestido Midi Branco Reto da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-midi-branco-reto/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-121",
    "slug": "saia-longa-amarela",
    "name": "Saia Longa Amarela",
    "category": "saias",
    "description": "Saia Longa Amarela da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 129.9,
    "images": [
      "/products/saia-longa-amarela/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Amarelo"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-122",
    "slug": "conjunto-rosa-pink-de-alfaiataria",
    "name": "Conjunto Rosa Pink de Alfaiataria",
    "category": "conjuntos",
    "description": "Conjunto Rosa Pink de Alfaiataria da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-rosa-pink-de-alfaiataria/01.jpg",
      "/products/conjunto-rosa-pink-de-alfaiataria/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-123",
    "slug": "calca-azul-claro",
    "name": "Calça Azul Claro",
    "category": "calcas",
    "description": "Calça Azul Claro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 169.9,
    "images": [
      "/products/calca-azul-claro/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-124",
    "slug": "vestido-jeans-tomara-que-caia",
    "name": "Vestido Jeans Tomara que Caia",
    "category": "vestidos",
    "description": "Vestido Jeans Tomara que Caia da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-jeans-tomara-que-caia/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-125",
    "slug": "vestido-jeans-floral",
    "name": "Vestido Jeans Floral",
    "category": "vestidos",
    "description": "Vestido Jeans Floral da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 189.9,
    "images": [
      "/products/vestido-jeans-floral/01.jpg",
      "/products/vestido-jeans-floral/02.jpg",
      "/products/vestido-jeans-floral/03.jpg",
      "/products/vestido-jeans-floral/04.jpg",
      "/products/vestido-jeans-floral/05.jpg",
      "/products/vestido-jeans-floral/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul",
      "Estampado"
    ],
    "inStock": true,
    "featured": true,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-126",
    "slug": "macaquinho-jeans-utilitario",
    "name": "Conjunto Jeans Utilitário",
    "category": "conjuntos",
    "description": "Conjunto Jeans Utilitário da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/macaquinho-jeans-utilitario/02.jpg",
      "/products/macaquinho-jeans-utilitario/03.jpg",
      "/products/macaquinho-jeans-utilitario/04.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-127",
    "slug": "vestido-longo-listrado-coral",
    "name": "Vestido Longo Listrado Coral",
    "category": "vestidos",
    "description": "Vestido Longo Listrado Coral da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-longo-listrado-coral/01.jpg",
      "/products/vestido-longo-listrado-coral/02.jpg",
      "/products/vestido-longo-listrado-coral/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vermelho",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-128",
    "slug": "conjunto-branco-com-babados",
    "name": "Conjunto Branco com Babados",
    "category": "conjuntos",
    "description": "Conjunto Branco com Babados da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-branco-com-babados/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-129",
    "slug": "conjunto-verde-bordado",
    "name": "Conjunto Verde Bordado",
    "category": "conjuntos",
    "description": "Conjunto Verde Bordado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-verde-bordado/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-130",
    "slug": "macacao-branco",
    "name": "Macacão Branco",
    "category": "conjuntos",
    "description": "Macacão Branco da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/macacao-branco/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-131",
    "slug": "vestido-azul-vivo",
    "name": "Vestido Azul Vivo",
    "category": "vestidos",
    "description": "Vestido Azul Vivo da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/vestido-azul-vivo/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-132",
    "slug": "vestido-chumbo-fluido",
    "name": "Vestido Chumbo Fluido",
    "category": "vestidos",
    "description": "Vestido Chumbo Fluido da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/vestido-chumbo-fluido/01.jpg",
      "/products/vestido-chumbo-fluido/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Cinza"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-134",
    "slug": "blusa-branca-decote-v",
    "name": "Blusa Branca Decote V",
    "category": "blusas",
    "description": "Blusa Branca Decote V da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-branca-decote-v/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-135",
    "slug": "macacao-branco-pantalona",
    "name": "Macacão Branco Pantalona",
    "category": "conjuntos",
    "description": "Macacão Branco Pantalona da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/macacao-branco-pantalona/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-137",
    "slug": "saia-longa-amarela-clara",
    "name": "Saia Longa Amarela Clara",
    "category": "saias",
    "description": "Saia Longa Amarela Clara da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 129.9,
    "images": [
      "/products/saia-longa-amarela-clara/01.jpg",
      "/products/saia-longa-amarela-clara/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Amarelo"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-138",
    "slug": "blusa-branca-ombro-a-ombro",
    "name": "Blusa Branca Ombro a Ombro",
    "category": "blusas",
    "description": "Blusa Branca Ombro a Ombro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 99.9,
    "images": [
      "/products/blusa-branca-ombro-a-ombro/01.jpg",
      "/products/blusa-branca-ombro-a-ombro/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-139",
    "slug": "conjunto-bege-minimalista",
    "name": "Conjunto Bege Minimalista",
    "category": "conjuntos",
    "description": "Conjunto Bege Minimalista da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-bege-minimalista/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-140",
    "slug": "conjunto-creme-floral",
    "name": "Conjunto Creme Floral",
    "category": "conjuntos",
    "description": "Conjunto Creme Floral da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-creme-floral/01.jpg",
      "/products/conjunto-creme-floral/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-141",
    "slug": "macaquinho-branco-listrado",
    "name": "Macaquinho Branco Listrado",
    "category": "conjuntos",
    "description": "Macaquinho Branco Listrado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macaquinho-branco-listrado/01.jpg",
      "/products/macaquinho-branco-listrado/02.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-142",
    "slug": "conjunto-bege-de-renda",
    "name": "Conjunto Bege de Renda",
    "category": "conjuntos",
    "description": "Conjunto Bege de Renda da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-bege-de-renda/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Bege"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-143",
    "slug": "macaquinho-azul-claro",
    "name": "Macaquinho Azul Claro",
    "category": "conjuntos",
    "description": "Macaquinho Azul Claro da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/macaquinho-azul-claro/01.jpg",
      "/products/macaquinho-azul-claro/02.jpg",
      "/products/macaquinho-azul-claro/03.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-144",
    "slug": "conjunto-jeans-com-bermuda",
    "name": "Conjunto Jeans com Bermuda",
    "category": "conjuntos",
    "description": "Conjunto Jeans com Bermuda da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-jeans-com-bermuda/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-145",
    "slug": "conjunto-branco-e-preto",
    "name": "Conjunto Branco e Preto",
    "category": "conjuntos",
    "description": "Conjunto Branco e Preto da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-branco-e-preto/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Preto",
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-146",
    "slug": "conjunto-floral-rosa",
    "name": "Conjunto Floral Rosa",
    "category": "conjuntos",
    "description": "Conjunto Floral Rosa da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-floral-rosa/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa",
      "Estampado"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-147",
    "slug": "conjunto-vermelho",
    "name": "Conjunto Vermelho",
    "category": "conjuntos",
    "description": "Conjunto Vermelho da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-vermelho/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Vermelho"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-148",
    "slug": "camisa-branca-longa",
    "name": "Camisa Branca Longa",
    "category": "blusas",
    "description": "Camisa Branca Longa da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 119.9,
    "images": [
      "/products/camisa-branca-longa/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-149",
    "slug": "conjunto-verde-com-short",
    "name": "Conjunto Verde com Short",
    "category": "conjuntos",
    "description": "Conjunto Verde com Short da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/conjunto-verde-com-short/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-150",
    "slug": "conjunto-branco-tomara-que-caia",
    "name": "Conjunto Branco Tomara que Caia",
    "category": "conjuntos",
    "description": "Conjunto Branco Tomara que Caia da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-branco-tomara-que-caia/02.jpg",
      "/products/conjunto-branco-tomara-que-caia/03.jpg",
      "/products/conjunto-branco-tomara-que-caia/06.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-151",
    "slug": "conjunto-rosa-assimetrico",
    "name": "Conjunto Rosa Assimétrico",
    "category": "conjuntos",
    "description": "Conjunto Rosa Assimétrico da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 219.9,
    "images": [
      "/products/conjunto-rosa-assimetrico/01.jpg"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Rosa"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-152",
    "slug": "conjunto-verde-de-alfaiataria-com-calca",
    "name": "Conjunto Verde de Alfaiataria com Calça",
    "category": "conjuntos",
    "description": "Conjunto Verde de Alfaiataria com Calça da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 229.9,
    "images": [
      "/products/conjunto-verde-de-alfaiataria-com-calca/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Verde"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-153",
    "slug": "macacao-azul-marinho-com-alcas",
    "name": "Macacão Azul Marinho com Alças",
    "category": "conjuntos",
    "description": "Macacão Azul Marinho com Alças da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 199.9,
    "images": [
      "/products/macacao-azul-marinho-com-alcas/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Azul"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  },
  {
    "id": "real-154",
    "slug": "conjunto-branco-com-saia-midi",
    "name": "Vestido Midi Branco Texturizado",
    "category": "vestidos",
    "description": "Vestido Midi Branco Texturizado da seleção atual da Divino Look. Veja todas as fotos para conferir modelagem, caimento e detalhes da peça.",
    "price": 209.9,
    "images": [
      "/products/conjunto-branco-com-saia-midi/clean.png"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      "Branco"
    ],
    "inStock": true,
    "featured": false,
    "isNew": false,
    "createdAt": "2026-10-25"
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

export const getRelated = (product: Product, n = 4) =>
  products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(products.filter((item) => item.id !== product.id && item.category !== product.category && item.featured))
    .slice(0, n);

export const priceBounds = {
  min: Math.floor(Math.min(...products.map((product) => product.price)) / 10) * 10,
  max: Math.ceil(Math.max(...products.map((product) => product.price)) / 10) * 10,
};

export const allColors = Array.from(new Set(products.flatMap((product) => product.colors))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);
