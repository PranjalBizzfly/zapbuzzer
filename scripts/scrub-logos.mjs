// Blurs third-party company logos (employers / vendors) that would wrongly suggest a customer or
// partner relationship. Originals are kept in image-originals/ (run once; safe to re-run).
// Usage: node scripts/scrub-logos.mjs
import sharp from "sharp";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";

/** [x, y, w, h] regions in the 1280×714 source images. */
const REGIONS = {
  "facilities-operations.webp": [[652, 348, 82, 50]], // "Infosys Facilities" on polo
  "blog-facilities-sla.webp": [
    [860, 356, 100, 52], // "Infosys Facilities Management" on shirt
    [128, 160, 50, 28], [352, 182, 42, 26], [352, 400, 44, 24], // Schneider marks on the BMS screen
  ],
  "it-support-operations.webp": [[932, 362, 48, 46], [896, 330, 48, 140]], // "TRTA" logo on polo and lanyard
  "print-room-operations.webp": [[700, 262, 62, 44]], // employer logo on chest
};

const SRC = "public/images";
const BAK = "image-originals";
if (!existsSync(BAK)) mkdirSync(BAK);

for (const [file, regions] of Object.entries(REGIONS)) {
  const src = `${SRC}/${file}`;
  const bak = `${BAK}/${file}`;
  if (!existsSync(bak)) copyFileSync(src, bak);
  const base = sharp(bak);
  const overlays = [];
  for (const [left, top, width, height] of regions) {
    const patch = await sharp(bak).extract({ left, top, width, height }).blur(7).toBuffer();
    overlays.push({ input: patch, left, top });
  }
  await base.composite(overlays).webp({ quality: 88, effort: 6 }).toFile(src);
  console.log(`scrubbed ${file} (${regions.length} region${regions.length > 1 ? "s" : ""})`);
}
