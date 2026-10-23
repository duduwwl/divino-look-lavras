/**
 * Unsplash photo URL with a fixed aspect-ratio crop.
 * Width, quality and format are added per-request by src/lib/image-loader.ts.
 * Photos are demonstration stand-ins (Unsplash License) until the store's own
 * photographs are available.
 */
export function photo(id: string, ar = "4:5") {
  return `https://images.unsplash.com/photo-${id}?ar=${encodeURIComponent(ar)}&fit=crop&crop=faces,center`;
}
