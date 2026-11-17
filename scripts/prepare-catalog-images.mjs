import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const jobs = [
  ["public/products/conjunto-verde-de-alfaiataria/01.jpg", "public/products/conjunto-verde-de-alfaiataria/01-clean-hq.webp", false],
  ["public/products/conjunto-areia/02.jpg", "public/products/conjunto-areia/02-clean-hq.webp", false],
  ["public/products/vestido-longo-preto/03.jpg", "public/products/vestido-longo-preto/03-clean-hq.webp", false],
  ["public/products/macacao-verde-longo/02.jpg", "public/products/macacao-verde-longo/02-clean-hq.webp", true],
  ["public/products/vestido-utilitario-marrom/01.jpg", "public/products/vestido-utilitario-marrom/01-clean-hq.webp", false],
  ["public/products/vestido-longo-bege-bordado/02.jpg", "public/products/vestido-longo-bege-bordado/02-clean-hq.webp", false],
  ["public/products/vestido-preto-bordado/01.jpg", "public/products/vestido-preto-bordado/01-clean-hq.webp", false],
  ["public/products/vestido-midi-branco/01.jpg", "public/products/vestido-midi-branco/01-clean-hq.webp", true],
];

for (const [input, output, trim] of jobs) {
  let pipeline = sharp(path.join(root, input), { failOn: "error" }).rotate();
  if (trim) pipeline = pipeline.trim({ background: "#ffffff", threshold: 18 });
  await pipeline.webp({ quality: 100, effort: 6, smartSubsample: true }).toFile(path.join(root, output));
}

await sharp(path.join(root, "public/products/blusa-pessego/01.jpg"), { failOn: "error" })
  .extract({ left: 4, top: 190, width: 583, height: 998 })
  .png({ quality: 100, compressionLevel: 6 })
  .toFile(path.join(root, "public/products/blusa-pessego/01-clean-hq.png"));

console.log(`Prepared ${jobs.length + 1} catalog images.`);
