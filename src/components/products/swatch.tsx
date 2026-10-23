import { colorSwatches } from "@/data/products";
import { cn } from "@/lib/utils";

const printColors = ["#9e2f2b", "#dcb24c", "#56704f", "#f1eadf"];

export function Swatch({ color, className }: { color: string; className?: string }) {
  const base = cn("inline-block size-3.5 shrink-0 overflow-hidden rounded-full", className);
  if (colorSwatches[color] === "pattern") {
    // printed fabric: four flat quarters instead of a gradient
    return (
      <span aria-hidden className={cn(base, "grid grid-cols-2")}>
        {printColors.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </span>
    );
  }
  const light = ["Branco", "Off-white"].includes(color);
  return (
    <span
      aria-hidden
      className={cn(base, light && "ring-1 ring-ink/25 ring-inset")}
      style={{ background: colorSwatches[color] ?? "#bbb" }}
    />
  );
}
