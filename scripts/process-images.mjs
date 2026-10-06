import sharp from "sharp";
import fs from "fs";
import path from "path";

const brainDir1 = "C:/Users/Dreams/.gemini/antigravity-ide/brain/6146ec65-8c39-4c56-9866-284d92d7b80b";
const brainDir2 = "C:/Users/Dreams/.gemini/antigravity-ide/brain/38a3417d-c50a-4d07-8136-6454b2c4089f";
const outDir = "c:/Projects/Zapbuzzer-Website/public/images";

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Homepage showcase images (strictly unique to homepage)
const homepageImages = [
  { dir: brainDir1, src: "pantry_operations_1791194693971.jpg", dest: "pantry-operations.webp", width: 1280 },
  { dir: brainDir1, src: "print_operations_1791194714215.jpg", dest: "print-room-operations.webp", width: 1280 },
  { dir: brainDir1, src: "it_operations_1791194733409.jpg", dest: "it-support-operations.webp", width: 1280 },
  { dir: brainDir1, src: "facilities_ops_1791194751087.jpg", dest: "facilities-operations.webp", width: 1280 },
  { dir: brainDir1, src: "courier_reception_1791194776388.jpg", dest: "courier-reception-operations.webp", width: 1280 },
  { dir: brainDir1, src: "quiet_office_1791194812715.jpg", dest: "quiet-office-contrast.webp", width: 1280 },
  { dir: brainDir1, src: "mobile_workplace_1791194793917.jpg", dest: "mobile-app-workplace.webp", width: 1280 },
];

// Inner page hub heroes, careers, and blog images (strictly unique per page)
const innerPageImages = [
  { dir: brainDir2, src: "test_pantry_preview_1791268059901.jpg", dest: "pantry-hub-hero.webp", width: 1280 },
  { dir: brainDir2, src: "careers_team_culture_1791268415713.jpg", dest: "careers-team-culture.webp", width: 1280 },
  { dir: brainDir2, src: "blog_whatsapp_chaos_1791268263214.jpg", dest: "blog-whatsapp-chaos.webp", width: 1280 },
  { dir: brainDir2, src: "blog_chase_calls_1791268282285.jpg", dest: "blog-chase-calls.webp", width: 1280 },
  { dir: brainDir2, src: "blog_it_desk_dispatch_1791268378511.jpg", dest: "blog-it-desk-dispatch.webp", width: 1280 },
  { dir: brainDir2, src: "blog_pantry_catalog_1791268320651.jpg", dest: "blog-pantry-catalog.webp", width: 1280 },
  { dir: brainDir2, src: "blog_facilities_sla_1791268339584.jpg", dest: "blog-facilities-sla.webp", width: 1280 },
  { dir: brainDir2, src: "blog_first_accept_wins_1791268301894.jpg", dest: "blog-first-accept-wins.webp", width: 1280 },
  { dir: brainDir2, src: "blog_sound_alerts_override_1791268357523.jpg", dest: "blog-sound-alerts-override.webp", width: 1280 },
  { dir: brainDir2, src: "blog_reception_courier_1791268398724.jpg", dest: "blog-reception-courier-handover.webp", width: 1280 },
];

// Persona portraits (strictly 1:1 original photos, zero crops)
const personaPortraits = [
  { dir: brainDir1, src: "aarav_ceo_1791194831830.jpg", dest: "avatar-aarav.webp" },
  { dir: brainDir1, src: "priya_manager_1791194848502.jpg", dest: "avatar-priya.webp" },
  { dir: brainDir1, src: "kavya_sales_1791194865712.jpg", dest: "avatar-kavya.webp" },
  { dir: brainDir1, src: "deepak_admin_1791194883498.jpg", dest: "avatar-deepak.webp" },
  { dir: brainDir1, src: "om_engineer_1791194904124.jpg", dest: "avatar-om.webp" },
  { dir: brainDir1, src: "neha_reception_1791194921293.jpg", dest: "avatar-neha.webp" },
  { dir: brainDir2, src: "avatar_raj_unique_1791268449974.jpg", dest: "avatar-raj.webp" },
  { dir: brainDir2, src: "avatar_tanvi_unique_1791268468262.jpg", dest: "avatar-tanvi.webp" },
];

async function run() {
  console.log("Processing homepage images to WebP...");
  for (const img of homepageImages) {
    const inputPath = path.join(img.dir, img.src);
    const outputPath = path.join(outDir, img.dest);
    await sharp(inputPath)
      .resize({ width: img.width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toFile(outputPath);
    const stats = fs.statSync(outputPath);
    console.log(`Created ${img.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("Processing inner page, careers, and blog images to WebP...");
  for (const img of innerPageImages) {
    const inputPath = path.join(img.dir, img.src);
    const outputPath = path.join(outDir, img.dest);
    await sharp(inputPath)
      .resize({ width: img.width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toFile(outputPath);
    const stats = fs.statSync(outputPath);
    console.log(`Created ${img.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("Processing persona portrait images to WebP (no crops, 100% original)...");
  for (const p of personaPortraits) {
    const inputPath = path.join(p.dir, p.src);
    const outputPath = path.join(outDir, p.dest);
    await sharp(inputPath)
      .resize({ width: 320, height: 320, fit: "cover" })
      .webp({ quality: 88, effort: 6 })
      .toFile(outputPath);
    const stats = fs.statSync(outputPath);
    console.log(`Created ${p.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("Done! All images processed without any crops or repetitions.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
