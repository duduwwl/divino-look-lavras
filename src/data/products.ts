import type { CategoryFilter, CategorySlug, Product, Size } from "@/types/product";
import { photo } from "@/lib/photos";

/**
 * SAMPLE CATALOGUE — demonstration data only.
 * Names, prices, sizes, colours and stock are illustrative and are NOT the
 * store's official prices or inventory. Photographs are Unsplash images used
 * as stand-ins until the store's own product photos are added.
 */

export const categories: {
  slug: CategoryFilter;
  label: string;
  blurb: string;
  image: string;
}[] = [
  { slug: "vestidos", label: "Vestidos", blurb: "Midi, longos e chemises", image: photo("1747396206869-75ea57b325ce", "3:4") },
  { slug: "conjuntos", label: "Conjuntos", blurb: "Alfaiataria e coordenados", image: photo("1617647858823-2424b6dc472f", "3:4") },
  { slug: "blusas", label: "Blusas", blurb: "Do básico ao delicado", image: photo("1761117228880-df2425bd70da", "3:4") },
  { slug: "calcas", label: "Calças", blurb: "Pantalonas e retas", image: photo("1767631338127-8cd80ee2f9df", "3:4") },
  { slug: "saias", label: "Saias", blurb: "Midi, lápis e evasê", image: photo("1590852669429-d1cd8775ea59", "3:4") },
  { slug: "fitness", label: "Moda Fitness", blurb: "Para treinar com estilo", image: photo("1606902965551-dce093cda6e7", "3:4") },
  { slug: "lancamentos", label: "Lançamentos", blurb: "O que acabou de chegar", image: photo("1750064773510-bbbf549db4d2", "3:4") },
];

export const categoryLabel: Record<CategorySlug, string> = {
  vestidos: "Vestidos",
  conjuntos: "Conjuntos",
  blusas: "Blusas",
  calcas: "Calças",
  saias: "Saias",
  fitness: "Moda Fitness",
};

export const ALL_SIZES: Size[] = ["PP", "P", "M", "G", "GG", "Único"];

/** Colour swatches used by filters and selectors. */
export const colorSwatches: Record<string, string> = {
  Preto: "#1f1c1a",
  Branco: "#ffffff",
  "Off-white": "#f1eadf",
  Bege: "#d9c4a8",
  Caramelo: "#a86f43",
  Marrom: "#6e463c",
  Rosa: "#e3b5b3",
  Vermelho: "#9e2f2b",
  Vinho: "#5e2130",
  Azul: "#3b587f",
  Verde: "#56704f",
  Amarelo: "#dcb24c",
  Lilás: "#b9a6cc",
  Cinza: "#9a9591",
  Estampado: "conic-gradient(#9e2f2b 0 25%, #dcb24c 0 50%, #56704f 0 75%, #f1eadf 0)",
};

type Seed = Omit<Product, "id" | "slug" | "images"> & { images: [string, ...string[]] };

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const p = (id: string, ar = "4:5") => photo(id, ar);

const seeds: Seed[] = [
  // ——— Vestidos
  {
    name: "Vestido Midi Aurora",
    category: "vestidos",
    description:
      "Vestido midi feminino com caimento elegante, ideal para composições sofisticadas e ocasiões especiais. Decote suave, cintura marcada e saia fluida que acompanha o movimento.",
    price: 189.9,
    images: [p("1747396206869-75ea57b325ce"), p("1726591383658-37fc19442523")],
    sizes: ["P", "M", "G"],
    colors: ["Bege", "Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-20",
  },
  {
    name: "Vestido Longo Carmim",
    category: "vestidos",
    description:
      "Vestido longo de mangas compridas em tom carmim, com tecido de toque macio e caimento reto. Uma peça marcante para jantares e eventos à noite.",
    price: 259.9,
    images: [p("1612336307429-8a898d10e223"), p("1662532577856-e8ee8b138a8b")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Vermelho", "Vinho"],
    inStock: true,
    featured: true,
    isNew: false,
    createdAt: "2026-09-02",
  },
  {
    name: "Vestido Chemise Lis",
    category: "vestidos",
    description:
      "Chemise de botões com cinto do mesmo tecido. Versátil: vai do trabalho ao almoço de domingo sem perder a elegância.",
    price: 169.9,
    originalPrice: 199.9,
    images: [p("1700748910236-3b744b8dacad"), p("1700748910920-81f4826ede95")],
    sizes: ["PP", "P", "M", "G"],
    colors: ["Caramelo", "Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-08-14",
  },
  {
    name: "Vestido Noir Essencial",
    category: "vestidos",
    description:
      "O pretinho que resolve qualquer ocasião. Modelagem ajustada ao corpo, comprimento midi e acabamento limpo, pronto para receber acessórios.",
    price: 179.9,
    images: [p("1700748909387-7c3691ef29bc"), p("1556914249-863ba0ec162d")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto"],
    inStock: true,
    featured: true,
    isNew: false,
    createdAt: "2026-07-30",
  },
  {
    name: "Vestido Floral Primavera",
    category: "vestidos",
    description:
      "Estampa floral em cores quentes, alças finas e saia evasê. Leve para os dias de sol, bonito com rasteira ou sandália de salto.",
    price: 149.9,
    images: [p("1602303894456-398ce544d90b"), p("1583261538022-26a857d8b8ba")],
    sizes: ["P", "M", "G"],
    colors: ["Estampado", "Amarelo"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-12",
  },
  {
    name: "Vestido Rosé Janela",
    category: "vestidos",
    description:
      "Vestido em tom rosé com tecido leve e fluido. Decote reto e fenda discreta para um visual romântico e contemporâneo.",
    price: 199.9,
    images: [p("1750064773510-bbbf549db4d2"), p("1551180452-cc3ca222cdfb")],
    sizes: ["PP", "P", "M"],
    colors: ["Rosa"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-18",
  },
  {
    name: "Vestido Branco Luz",
    category: "vestidos",
    description:
      "Vestido branco de alças com franzido no busto e barra assimétrica. Fresco, iluminado e perfeito para dias quentes.",
    price: 164.9,
    images: [p("1737188550207-df877c6392dc"), p("1585131609775-8eecc878fdfc")],
    sizes: ["P", "M", "G"],
    colors: ["Branco", "Off-white"],
    inStock: false,
    featured: false,
    isNew: false,
    createdAt: "2026-06-21",
  },
  {
    name: "Vestido Poá Clássico",
    category: "vestidos",
    description:
      "O poá que nunca sai de moda, em versão midi com mangas bufantes e botões frontais. Charme retrô com modelagem atual.",
    price: 159.9,
    images: [p("1593528625646-d705402054ba"), p("1504051771394-dd2e66b2e08f")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-05-10",
  },
  {
    name: "Vestido Verde Jardim",
    category: "vestidos",
    description:
      "Vestido em verde profundo com decote canoa e saia rodada. Uma cor que valoriza todos os tons de pele.",
    price: 189.9,
    images: [p("1653152707179-125e4e184a0b"), p("1728205104611-061fa1465f85")],
    sizes: ["P", "M", "G"],
    colors: ["Verde"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-08-28",
  },

  // ——— Conjuntos
  {
    name: "Conjunto Alfaiataria Bella",
    category: "conjuntos",
    description:
      "Conjunto de alfaiataria com modelagem contemporânea e acabamento refinado. Blazer estruturado e calça de cintura alta que podem ser usados juntos ou separados.",
    price: 279.9,
    images: [p("1617647858823-2424b6dc472f"), p("1613915617430-8ab0fd7c6baf")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Marrom", "Off-white"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-15",
  },
  {
    name: "Conjunto Executiva Noir",
    category: "conjuntos",
    description:
      "Blazer acinturado e calça reta em preto absoluto. A base de um guarda-roupa de trabalho elegante e sem esforço.",
    price: 299.9,
    images: [p("1584273143981-41c073dfe8f8"), p("1677246791501-85875b1ab187")],
    sizes: ["PP", "P", "M", "G"],
    colors: ["Preto"],
    inStock: true,
    featured: true,
    isNew: false,
    createdAt: "2026-09-10",
  },
  {
    name: "Conjunto Saia & Blazer Paris",
    category: "conjuntos",
    description:
      "Blazer curto com saia mini do mesmo tecido. Um coordenado com espírito parisiense, lindo com scarpin ou mocassim.",
    price: 289.9,
    images: [p("1730308234548-91c457042cdb"), p("1730308242954-304f615bb73a")],
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Bege"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-08",
  },
  {
    name: "Conjunto Verde Oliva",
    category: "conjuntos",
    description:
      "Alfaiataria em verde oliva, com blazer alongado e calça pantalona. Cor de estação para sair do óbvio com sofisticação.",
    price: 319.9,
    images: [p("1731412673523-93af46c2c1dd"), p("1788506713070-664c8dbe6705")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-08-02",
  },
  {
    name: "Conjunto Azul Marinho",
    category: "conjuntos",
    description:
      "Blazer de abotoamento simples e calça de alfaiataria em azul marinho. Clássico, atemporal e fácil de combinar.",
    price: 309.9,
    originalPrice: 349.9,
    images: [p("1712759519800-121e6ded66ee"), p("1608234808654-2a8875faa7fd")],
    sizes: ["P", "M", "G"],
    colors: ["Azul", "Cinza"],
    inStock: false,
    featured: false,
    isNew: false,
    createdAt: "2026-06-05",
  },
  {
    name: "Conjunto Rubi",
    category: "conjuntos",
    description:
      "Blazer vermelho de ombros marcados com calça combinando. Para quem gosta de ser lembrada pela cor.",
    price: 329.9,
    images: [p("1580478491436-fd6a937acc9e"), p("1616065297556-f05bc00c9a3e")],
    sizes: ["P", "M", "G"],
    colors: ["Vermelho", "Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-07-12",
  },

  // ——— Blusas
  {
    name: "Blusa Serena",
    category: "blusas",
    description:
      "Blusa versátil de visual delicado, perfeita para produções casuais e elegantes. Tecido leve com caimento solto e acabamento cuidadoso.",
    price: 89.9,
    images: [p("1770294758906-c8762abb2c8b"), p("1680690517143-d813ac08cd13")],
    sizes: ["PP", "P", "M", "G"],
    colors: ["Branco", "Rosa", "Preto"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-19",
  },
  {
    name: "Blusa Rubra",
    category: "blusas",
    description:
      "Blusa vermelha com decote em V e mangas amplas. Combina com alfaiataria clara e com jeans no fim de semana.",
    price: 99.9,
    images: [p("1761117228880-df2425bd70da"), p("1761121317492-57feee4fc674")],
    sizes: ["P", "M", "G"],
    colors: ["Vermelho"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-16",
  },
  {
    name: "Camisa Linho Areia",
    category: "blusas",
    description:
      "Camisa de botões com textura de linho, mangas dobráveis e modelagem levemente ampla. Básica no melhor sentido.",
    price: 119.9,
    images: [p("1610573007604-e1262df83d0a"), p("1595272251257-1bbe120103d5")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Bege"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-07-20",
  },
  {
    name: "Blusa Turquesa Seda",
    category: "blusas",
    description:
      "Blusa de toque acetinado em turquesa intenso, com gola laço. Fica linda com saia preta ou calça off-white.",
    price: 129.9,
    images: [p("1704775989365-eebfd4659a23"), p("1780488704750-5092dabdc266")],
    sizes: ["P", "M", "G"],
    colors: ["Azul", "Branco"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-08-09",
  },
  {
    name: "Regata Canelada Essencial",
    category: "blusas",
    description:
      "Regata canelada de alças largas, macia e com ótimo caimento. A base para todas as composições da semana.",
    price: 59.9,
    images: [p("1619694772796-f39f96a3343a"), p("1619694830144-909e8ad9026c")],
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: ["Branco", "Preto", "Bege"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-05-28",
  },
  {
    name: "Blusa Noite Gola Alta",
    category: "blusas",
    description:
      "Blusa preta de gola alta e mangas longas, em malha encorpada. Elegância discreta para dias frios.",
    price: 94.9,
    images: [p("1750390200250-b21f94615c03"), p("1645636667214-c4875ef3d59c")],
    sizes: ["P", "M", "G"],
    colors: ["Preto"],
    inStock: false,
    featured: false,
    isNew: false,
    createdAt: "2026-04-17",
  },

  // ——— Calças
  {
    name: "Calça Pantalona Riviera",
    category: "calcas",
    description:
      "Pantalona de cintura alta e pernas amplas, com caimento fluido que alonga a silhueta. Linda com blusas justas e sandálias.",
    price: 159.9,
    images: [p("1767631338127-8cd80ee2f9df"), p("1789110519338-8b8d7f35872a")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Verde"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-14",
  },
  {
    name: "Calça Risca de Giz",
    category: "calcas",
    description:
      "Calça de alfaiataria off-white com riscas finas, cintura alta e pregas frontais. Clássica com um toque fashion.",
    price: 179.9,
    images: [p("1789110854083-e4752bded644"), p("1789110519976-ea1f044db897")],
    sizes: ["PP", "P", "M", "G"],
    colors: ["Off-white", "Amarelo"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-05",
  },
  {
    name: "Calça Linho Terracota",
    category: "calcas",
    description:
      "Calça de linho com cós de amarrar e pernas retas. Fresca, confortável e bonita do café da manhã ao fim da tarde.",
    price: 149.9,
    images: [p("1789110854331-6d3cabfef781"), p("1789110520406-ebee1a8b4f23")],
    sizes: ["P", "M", "G"],
    colors: ["Vermelho", "Lilás"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-07-03",
  },
  {
    name: "Calça Pantalona Palmeiras",
    category: "calcas",
    description:
      "Estampa de folhagens em vermelho e branco, modelagem pantalona e tecido leve. A peça que vira o centro do look.",
    price: 169.9,
    images: [p("1789110520665-f07353f0afbe"), p("1789110854331-6d3cabfef781")],
    sizes: ["P", "M", "G"],
    colors: ["Estampado"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-06-18",
  },
  {
    name: "Calça Reta Preta",
    category: "calcas",
    description:
      "Calça reta em preto com cós alto e bolsos faca. Um curinga de alfaiataria para o dia a dia.",
    price: 139.9,
    originalPrice: 159.9,
    images: [p("1552902875-9ac1f9fe0c07"), p("1552902865-b72c031ac5ea")],
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: ["Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-05-02",
  },

  // ——— Saias
  {
    name: "Saia Midi Plissada Noir",
    category: "saias",
    description:
      "Saia midi com estampa floral sobre fundo preto e cós elástico confortável. Movimento bonito a cada passo.",
    price: 129.9,
    images: [p("1590852669429-d1cd8775ea59"), p("1615898290907-0ad011905389")],
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Estampado"],
    inStock: true,
    featured: true,
    isNew: false,
    createdAt: "2026-09-18",
  },
  {
    name: "Saia Poá Rubi",
    category: "saias",
    description:
      "Saia evasê de poá vermelho, cintura marcada e comprimento abaixo do joelho. Alegre e feminina.",
    price: 119.9,
    images: [p("1789110519584-ce21260be4e6"), p("1789110854005-6376fa97be36")],
    sizes: ["PP", "P", "M", "G"],
    colors: ["Vermelho", "Branco"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-10",
  },
  {
    name: "Saia Jeans Brilho",
    category: "saias",
    description:
      "Saia de sarja branca com aplicações de brilho e cinto caramelo. Para quem quer um básico com assinatura.",
    price: 139.9,
    images: [p("1789110854402-7aa666508ef4"), p("1762343041573-aa2827852bc9")],
    sizes: ["P", "M", "G"],
    colors: ["Branco"],
    inStock: false,
    featured: false,
    isNew: false,
    createdAt: "2026-06-30",
  },

  // ——— Moda Fitness
  {
    name: "Legging Active Move",
    category: "fitness",
    description:
      "Legging esportiva de visual moderno, ideal para treinos e composições athleisure. Cós alto, compressão na medida e tecido que não marca.",
    price: 119.9,
    images: [p("1584863495140-a320b13a11a8"), p("1600696491085-19dbbeb4f8c1")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Azul"],
    inStock: true,
    featured: true,
    isNew: false,
    createdAt: "2026-09-25",
  },
  {
    name: "Conjunto Fitness Rosé",
    category: "fitness",
    description:
      "Top de sustentação média e legging de cintura alta em rosé. Bonito no treino e no café depois dele.",
    price: 169.9,
    images: [p("1606902965551-dce093cda6e7"), p("1606903037631-f09fd0bd74b4")],
    sizes: ["P", "M", "G"],
    colors: ["Rosa", "Lilás"],
    inStock: true,
    featured: true,
    isNew: true,
    createdAt: "2026-10-17",
  },
  {
    name: "Top Sustentação Studio",
    category: "fitness",
    description:
      "Top com alças cruzadas nas costas e bojo removível. Conforto para yoga, pilates e musculação.",
    price: 79.9,
    images: [p("1617085606193-6b17105cff2a"), p("1594269807754-7b7926246d65")],
    sizes: ["P", "M", "G"],
    colors: ["Rosa", "Preto"],
    inStock: true,
    featured: false,
    isNew: false,
    createdAt: "2026-08-21",
  },
  {
    name: "Conjunto Athleisure Pedra",
    category: "fitness",
    description:
      "Conjunto em tom neutro que sai da academia direto para a rua, com tecido de secagem rápida.",
    price: 189.9,
    images: [p("1776152615222-919857a3e6b1"), p("1788463127375-423984537d89")],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Bege", "Cinza"],
    inStock: true,
    featured: false,
    isNew: true,
    createdAt: "2026-10-02",
  },
];

export const products: Product[] = seeds.map((s, i) => ({
  ...s,
  id: `dl-${String(i + 1).padStart(3, "0")}`,
  slug: slugify(s.name),
}));

export const getProduct = (slug: string) => products.find((x) => x.slug === slug);

export const getRelated = (product: Product, n = 4) =>
  products
    .filter((x) => x.id !== product.id && x.category === product.category)
    .concat(products.filter((x) => x.id !== product.id && x.category !== product.category && x.featured))
    .slice(0, n);

export const priceBounds = {
  min: Math.floor(Math.min(...products.map((x) => x.price)) / 10) * 10,
  max: Math.ceil(Math.max(...products.map((x) => x.price)) / 10) * 10,
};

export const allColors = Array.from(new Set(products.flatMap((x) => x.colors))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);
