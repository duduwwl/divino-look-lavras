/**
 * Custom next/image loader for the static export.
 * Local product images (starting with "/") are prefixed with the deploy base
 * path so the static export works both locally and on GitHub Pages.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("/")) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const params = new URLSearchParams({
      w: String(width),
      q: String(quality ?? 82),
    });
    return `${base}${src}?${params.toString()}`;
  }
  return src;
}
