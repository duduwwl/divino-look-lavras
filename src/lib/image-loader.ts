/**
 * Custom next/image loader for the static export.
 * Remote Unsplash images are resized by Unsplash's own CDN (imgix params),
 * so every <Image> gets a real responsive srcset without a Node server.
 * Local images (starting with "/") are prefixed with the deploy base path.
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
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 72));
    url.searchParams.set("auto", "format");
    if (!url.searchParams.has("fit")) url.searchParams.set("fit", "crop");
    return url.toString();
  }
  if (src.startsWith("/")) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    return `${base}${src}`;
  }
  return src;
}
