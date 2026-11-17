import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const shirts = [
  ["camiseta-flor-azul", "01.jpg"],
  ["camiseta-beach-off-white", "01.jpg"],
  ["camiseta-rosa-basica", "02.jpg"],
  ["camiseta-ballet-azul", "01.jpg"],
  ["camiseta-azul-com-flores", "01.jpg"],
  ["camiseta-relaxed-branca", "01.jpg"],
  ["camiseta-girassol-terracota", "01.jpg"],
  ["camiseta-vermelha-basica", "01.jpg"],
];

const colorDistance = (data, offset, background) =>
  Math.max(
    Math.abs(data[offset] - background[0]),
    Math.abs(data[offset + 1] - background[1]),
    Math.abs(data[offset + 2] - background[2]),
  );

for (const [slug, filename] of shirts) {
  const input = path.join(root, "public", "products", slug, filename);
  const { data, info } = await sharp(input).rotate().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const corners = [0, width - 1, (height - 1) * width, height * width - 1];
  const background = [0, 1, 2].map((channel) =>
    Math.round(corners.reduce((sum, pixel) => sum + data[pixel * channels + channel], 0) / corners.length),
  );
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  const enqueue = (pixel) => {
    if (visited[pixel]) return;
    const offset = pixel * channels;
    if (colorDistance(data, offset, background) > 12) return;
    visited[pixel] = 1;
    queue[tail++] = pixel;
  };

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    if (x > 0) enqueue(pixel - 1);
    if (x + 1 < width) enqueue(pixel + 1);
    if (y > 0) enqueue(pixel - width);
    if (y + 1 < height) enqueue(pixel + width);
  }

  for (let pixel = 0; pixel < visited.length; pixel++) {
    if (visited[pixel]) data[pixel * channels + 3] = 0;
  }

  await sharp(data, { raw: info })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 2 })
    .extend({ top: 24, bottom: 24, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 7, quality: 100 })
    .toFile(path.join(root, "public", "products", slug, "cutout-hq.png"));
}

console.log(`Created ${shirts.length} transparent shirt cutouts.`);
