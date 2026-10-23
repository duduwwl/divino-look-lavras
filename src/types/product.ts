export type CategorySlug =
  | "vestidos"
  | "conjuntos"
  | "blusas"
  | "calcas"
  | "saias"
  | "fitness";

/** "lancamentos" is a virtual category: every product with isNew. */
export type CategoryFilter = CategorySlug | "lancamentos";

export type Size = "PP" | "P" | "M" | "G" | "GG" | "Único";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: Size[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  /** ISO date used by "Mais recentes". Sample data. */
  createdAt: string;
};

export type CartItem = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: Size;
  color: string;
  quantity: number;
};
