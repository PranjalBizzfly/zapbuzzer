import sharp from "sharp";
import fs from "fs";
import path from "path";

const brainDir = "C:/Users/Dreams/.gemini/antigravity-ide/brain/38a3417d-c50a-4d07-8136-6454b2c4089f";
const outDir = "c:/Projects/Zapbuzzer-Website/public/images";

const imagesToProcess = [
  {
    src: "test_pantry_preview_1791268059901.jpg",
    dest: "pantry-hub-hero.webp",
    width: 1280,
  },
  {
    src: "blog_whatsapp_chaos_1791268263214.jpg",
    dest: "blog-whatsapp-chaos.webp",
    width: 1280,
  },
  {
    src: "blog_chase_calls_1791268282285.jpg",
    dest: "blog-chase-calls.webp",
    width: 1280,
  },
  {
    src: "blog_first_accept_wins_1791268301894.jpg",
    dest: "blog-first-accept-wins.webp",
    width: 1280,
  },
  {
    src: "blog_pantry_catalog_1791268320651.jpg",
    dest: "blog-pantry-catalog.webp",
    width: 1280,
  },
  {
    src: "blog_facilities_sla_1791268339584.jpg",
    dest: "blog-facilities-sla.webp",
    width: 1280,
  },
  {
    src: "blog_sound_alerts_override_1791268357523.jpg",
    dest: "blog-sound-alerts-override.webp",
    width: 1280,
  },
  {
    src: "blog_it_desk_dispatch_1791268378511.jpg",
    dest: "blog-it-desk-dispatch.webp",
    width: 1280,
  },
  {
    src: "blog_reception_courier_1791268398724.jpg",
    dest: "blog-reception-courier-handover.webp",
    width: 1280,
  },
  {
    src: "careers_team_culture_1791268415713.jpg",
    dest: "careers-team-culture.webp",
    width: 1280,
  },
];

const portraitsToProcess = [
  {
    src: "avatar_raj_unique_1791268449974.jpg",
    dest: "avatar-raj.webp",
  },
  {
    src: "avatar_tanvi_unique_1791268468262.jpg",
    dest: "avatar-tanvi.webp",
  },
];

async function run() {
  console.log("Converting workplace images to WebP...");
  for (const item of imagesToProcess) {
    const inputPath = path.join(brainDir, item.src);
    const outputPath = path.join(outDir, item.dest);
    await sharp(inputPath)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toFile(outputPath);
    const stats = fs.statSync(outputPath);
    console.log(`Created ${item.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("Converting unique persona portraits to WebP...");
  for (const item of portraitsToProcess) {
    const inputPath = path.join(brainDir, item.src);
    const outputPath = path.join(outDir, item.dest);
    await sharp(inputPath)
      .resize({ width: 320, height: 320, fit: "cover" })
      .webp({ quality: 88, effort: 6 })
      .toFile(outputPath);
    const stats = fs.statSync(outputPath);
    console.log(`Created ${item.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("All conversions complete!");
}

run().catch((err) => {
  console.error("Error during conversion:", err);
  process.exit(1);
});
