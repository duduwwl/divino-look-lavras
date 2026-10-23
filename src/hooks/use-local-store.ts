"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Tiny persisted store on top of localStorage + useSyncExternalStore.
 * Safe when storage is blocked (private mode): falls back to memory.
 */
export function createLocalStore<T>(key: string, initial: T) {
  let memory: T = initial;
  let loaded = false;
  const listeners = new Set<() => void>();

  const read = (): T => {
    if (!loaded && typeof window !== "undefined") {
      loaded = true;
      try {
        const raw = window.localStorage.getItem(key);
        if (raw) memory = JSON.parse(raw) as T;
      } catch {
        /* ignore */
      }
    }
    return memory;
  };

  const write = (next: T) => {
    memory = next;
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l());
  };

  const subscribe = (l: () => void) => {
    listeners.add(l);
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
        loaded = false;
        read();
        l();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(l);
      window.removeEventListener("storage", onStorage);
    };
  };

  function useStore(): [T, (updater: (prev: T) => T) => void] {
    const value = useSyncExternalStore(subscribe, read, () => initial);
    const set = useCallback((updater: (prev: T) => T) => write(updater(read())), []);
    return [value, set];
  }

  return useStore;
}
