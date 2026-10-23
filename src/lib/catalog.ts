import type { CategoryFilter, Product, Size } from "@/types/product";
import { categoryLabel } from "@/data/products";

export type SortKey = "recentes" | "menor-preco" | "maior-preco" | "nome" | "destaques";
export type Availability = "todos" | "em-estoque" | "esgotados";

export type Filters = {
  q: string;
  category: CategoryFilter | "todos";
  sizes: Size[];
  colors: string[];
  min: number | null;
  max: number | null;
  availability: Availability;
  sort: SortKey;
};

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recentes", label: "Mais recentes" },
  { value: "destaques", label: "Destaques" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "nome", label: "Nome A–Z" },
];

export const emptyFilters: Filters = {
  q: "",
  category: "todos",
  sizes: [],
  colors: [],
  min: null,
  max: null,
  availability: "todos",
  sort: "recentes",
};

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export function searchProducts(list: Product[], query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return list;
  return list.filter((p) => {
    const hay = normalize(
      [p.name, categoryLabel[p.category], p.description, p.colors.join(" "), p.isNew ? "lancamento novidade" : ""].join(" "),
    );
    return terms.every((t) => hay.includes(t.replace(/s$/, "")));
  });
}

export function applyFilters(list: Product[], f: Filters) {
  let out = searchProducts(list, f.q);
  if (f.category === "lancamentos") out = out.filter((p) => p.isNew);
  else if (f.category !== "todos") out = out.filter((p) => p.category === f.category);
  if (f.sizes.length) out = out.filter((p) => p.sizes.some((s) => f.sizes.includes(s)));
  if (f.colors.length) out = out.filter((p) => p.colors.some((c) => f.colors.includes(c)));
  if (f.min != null) out = out.filter((p) => p.price >= f.min!);
  if (f.max != null) out = out.filter((p) => p.price <= f.max!);
  if (f.availability === "em-estoque") out = out.filter((p) => p.inStock);
  if (f.availability === "esgotados") out = out.filter((p) => !p.inStock);

  const sorted = [...out];
  switch (f.sort) {
    case "menor-preco":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "maior-preco":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "nome":
      sorted.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
      break;
    case "destaques":
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.createdAt.localeCompare(a.createdAt));
      break;
    default:
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
  return sorted;
}

const CATS = ["vestidos", "conjuntos", "blusas", "calcas", "saias", "fitness", "lancamentos"];
const SIZES: Size[] = ["PP", "P", "M", "G", "GG", "Único"];

export function filtersFromParams(sp: URLSearchParams): Filters {
  const num = (k: string) => {
    const v = sp.get(k);
    if (v == null || v === "") return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const cat = sp.get("categoria") ?? "todos";
  const sort = (sp.get("ordem") ?? "recentes") as SortKey;
  const avail = (sp.get("disponibilidade") ?? "todos") as Availability;
  return {
    q: sp.get("busca") ?? "",
    category: (CATS.includes(cat) ? cat : "todos") as Filters["category"],
    sizes: (sp.get("tamanhos")?.split(",") ?? []).filter((s): s is Size => SIZES.includes(s as Size)),
    colors: sp.get("cores")?.split(",").filter(Boolean) ?? [],
    min: num("min"),
    max: num("max"),
    availability: ["todos", "em-estoque", "esgotados"].includes(avail) ? avail : "todos",
    sort: sortOptions.some((o) => o.value === sort) ? sort : "recentes",
  };
}

export function filtersToQuery(f: Filters) {
  const sp = new URLSearchParams();
  if (f.q) sp.set("busca", f.q);
  if (f.category !== "todos") sp.set("categoria", f.category);
  if (f.sizes.length) sp.set("tamanhos", f.sizes.join(","));
  if (f.colors.length) sp.set("cores", f.colors.join(","));
  if (f.min != null) sp.set("min", String(f.min));
  if (f.max != null) sp.set("max", String(f.max));
  if (f.availability !== "todos") sp.set("disponibilidade", f.availability);
  if (f.sort !== "recentes") sp.set("ordem", f.sort);
  return sp.toString();
}

export function activeFilterCount(f: Filters) {
  return (
    (f.category !== "todos" ? 1 : 0) +
    f.sizes.length +
    f.colors.length +
    (f.min != null || f.max != null ? 1 : 0) +
    (f.availability !== "todos" ? 1 : 0)
  );
}
