"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { createLocalStore } from "@/hooks/use-local-store";
import type { CartItem } from "@/types/product";

const useCartStore = createLocalStore<CartItem[]>("divino-look:sacola", []);
const useFavStore = createLocalStore<string[]>("divino-look:favoritos", []);

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: Omit<CartItem, "key">) => void;
  addMany: (items: Omit<CartItem, "key">[]) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  notice: { id: number; text: string } | null;
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const MAX_QTY = 10;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useCartStore();
  const [favorites, setFavorites] = useFavStore();
  const [isOpen, setOpen] = useState(false);
  const [notice, setNotice] = useState<CartContextValue["notice"]>(null);

  const merge = useCallback(
    (incoming: Omit<CartItem, "key">[]) =>
      setItems((prev) => {
        const next = [...prev];
        for (const item of incoming) {
          const key = `${item.productId}__${item.size}__${item.color}`;
          const found = next.find((i) => i.key === key);
          if (found) found.quantity = Math.min(MAX_QTY, found.quantity + item.quantity);
          else next.push({ ...item, key });
        }
        return next.map((i) => ({ ...i }));
      }),
    [setItems],
  );

  const add = useCallback(
    (item: Omit<CartItem, "key">) => {
      merge([item]);
      setNotice({ id: Date.now(), text: `${item.name} foi para a sacola` });
      setOpen(true);
    },
    [merge],
  );

  const addMany = useCallback(
    (list: Omit<CartItem, "key">[]) => {
      merge(list);
      setNotice({ id: Date.now(), text: `Look com ${list.length} peças foi para a sacola` });
      setOpen(true);
    },
    [merge],
  );

  const remove = useCallback((key: string) => setItems((prev) => prev.filter((i) => i.key !== key)), [setItems]);
  const setQuantity = useCallback(
    (key: string, quantity: number) =>
      setItems((prev) =>
        prev.map((i) => (i.key === key ? { ...i, quantity: Math.max(1, Math.min(MAX_QTY, quantity)) } : i)),
      ),
    [setItems],
  );
  const clear = useCallback(() => setItems(() => []), [setItems]);
  const toggleFavorite = useCallback(
    (id: string) => setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setFavorites],
  );

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = items.reduce((s, i) => s + i.quantity * i.price, 0);
    return {
      items,
      count,
      subtotal,
      add,
      addMany,
      remove,
      setQuantity,
      clear,
      isOpen,
      setOpen,
      notice,
      favorites,
      toggleFavorite,
    };
  }, [items, add, addMany, remove, setQuantity, clear, isOpen, notice, favorites, toggleFavorite]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
