import { colorSwatches } from "@/data/products";
import { cn } from "@/lib/utils";

export function Swatch({ color, className }: { color: string; className?: string }) {
  const value = colorSwatches[color] ?? "#bbb";
  const light = ["Branco", "Off-white"].includes(color);
  return (
    <span
      aria-hidden
      className={cn("inline-block size-3.5 rounded-full", light && "ring-1 ring-ink/25 ring-inset", className)}
      style={{ background: value }}
    />
  );
}
