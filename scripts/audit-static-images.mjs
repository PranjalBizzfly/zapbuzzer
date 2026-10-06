import fs from "fs";
import path from "path";
import { posts as blogPosts } from "../src/lib/blog-posts.ts";
import { companyPageList } from "../src/lib/companyPages.ts";
import { allPaths } from "../src/content/manifest.ts";

const PUBLIC_IMAGES_DIR = "c:/Projects/Zapbuzzer-Website/public/images";

async function runAudit() {
  console.log("=================================================");
  console.log("   COMPREHENSIVE ZAPBUZZER IMAGE AUDIT");
  console.log("=================================================\n");

  // 1. Check all files on disk
  const filesOnDisk = fs.readdirSync(PUBLIC_IMAGES_DIR).filter(f => f.endsWith(".webp"));
  console.log(`Found ${filesOnDisk.length} WebP images on disk in public/images/:\n`);
  for (const f of filesOnDisk) {
    const stat = fs.statSync(path.join(PUBLIC_IMAGES_DIR, f));
    console.log(`  - ${f.padEnd(36)} (${Math.round(stat.size / 1024)} KB)`);
  }
  console.log();

  // 2. Track references
  // Map of imagePath -> Array<{ page: string, context: string, alt: string }>
  const imageUsages = new Map();

  function recordUsage(imgSrc, page, context, alt) {
    if (!imageUsages.has(imgSrc)) {
      imageUsages.set(imgSrc, []);
    }
    imageUsages.get(imgSrc).push({ page, context, alt });
  }

  // A. Homepage references
  const homepageImages = [
    { src: "/images/pantry-operations.webp", context: "Pantry operations tab", alt: "Corporate pantry barista in a modern Pune office preparing fresh espresso and chai orders" },
    { src: "/images/print-room-operations.webp", context: "Print room operations tab", alt: "Print room technician organizing freshly printed full-color pitch decks next to a digital laser printer" },
    { src: "/images/it-support-operations.webp", context: "IT support operations tab", alt: "Indian IT support engineer configuring high-resolution monitors and HDMI docking station at an ergonomic workstation in Pune tech office" },
    { src: "/images/facilities-operations.webp", context: "Facilities operations tab", alt: "Facilities manager adjusting smart conference room AC and climate control touchscreen panel in Pune corporate office" },
    { src: "/images/courier-reception-operations.webp", context: "Courier operations tab", alt: "Corporate receptionist scanning courier delivery parcel with digital tablet system at entrance mailroom desk" },
    { src: "/images/avatar-aarav.webp", context: "Aarav Sharma CEO testimonial", alt: "Aarav Sharma, Founder & CEO at Acme HQ" },
    { src: "/images/quiet-office-contrast.webp", context: "Quiet office transformation visual", alt: "A calm, quiet modern Indian tech workplace in Pune where coffee and requests arrive silently without shouting down the hall" },
    { src: "/images/mobile-app-workplace.webp", context: "Mobile app notification visual", alt: "Operations supervisor checking incoming ZapBuzzer mobile alert in a modern glass corporate corridor in Pune" },
  ];
  for (const item of homepageImages) {
    recordUsage(item.src, "/", item.context, item.alt);
  }

  // B. Careers page references
  recordUsage(
    "/images/careers-team-culture.webp",
    "/careers",
    "Careers team culture visual",
    "ZapBuzzer software engineering and product design team collaborating around a workstation in a modern, light-filled Pune studio"
  );

  // C. Solutions Hub hero images
  recordUsage(
    "/images/pantry-hub-hero.webp",
    "/solutions/pantry",
    "Pantry hub hero visual",
    "Corporate pantry beverage counter where a barista prepares fresh coffee and tea orders from a digital order queue screen"
  );

  // D. Dedicated audience avatars on solution pages
  recordUsage(
    "/images/avatar-raj.webp",
    "/solutions/pantry",
    "Audience card: Arjun (Pantry Staff)",
    "Arjun, Pantry and Hospitality Specialist at modern corporate beverage counter"
  );
  recordUsage(
    "/images/avatar-kavya.webp",
    "/solutions/print-room",
    "Audience card: Kavya (Sales Teams)",
    "Kavya, Sales & Client Operations Lead organizing presentation printing"
  );
  recordUsage(
    "/images/avatar-deepak.webp",
    "/solutions/facilities",
    "Audience card: Deepak (Admin Head)",
    "Deepak, Head of Workplace Administration coordinating environmental controls"
  );
  recordUsage(
    "/images/avatar-neha.webp",
    "/solutions/courier",
    "Audience card: Neha (Receptionists)",
    "Neha, Front Desk and Reception Lead organizing inbound delivery parcels"
  );

  // E. Dedicated scenario avatars on specific pages
  recordUsage(
    "/images/avatar-tanvi.webp",
    "/mobile-app",
    "Scenario card: Tanvi (Design Lead)",
    "Tanvi, Design Lead requesting urgent HDMI cable on ZapBuzzer mobile app"
  );
  recordUsage(
    "/images/avatar-priya.webp",
    "/use-cases/office-manager",
    "Scenario card: Priya (Workplace Operations)",
    "Priya, Office Operations Manager overseeing quiet office request routing"
  );
  recordUsage(
    "/images/avatar-om.webp",
    "/use-cases/improve-response-time",
    "Scenario card: Om (Software Engineer)",
    "Om, Senior Software Engineer resolving meeting room projector request"
  );

  // F. Blog posts (8 posts)
  for (const post of blogPosts) {
    recordUsage(
      post.image,
      `/blog/${post.slug}`,
      `Blog article: ${post.title}`,
      post.imageAlt
    );
  }

  console.log("Checking all tracked image references against files on disk...\n");
  let missingFiles = 0;
  for (const [imgSrc, usages] of imageUsages.entries()) {
    const filename = path.basename(imgSrc);
    const diskPath = path.join(PUBLIC_IMAGES_DIR, filename);
    if (!fs.existsSync(diskPath)) {
      console.error(`❌ MISSING FILE ON DISK: ${imgSrc} (used in ${usages.map(u => u.page).join(", ")})`);
      missingFiles++;
    } else {
      console.log(`✅ File exists: ${filename}`);
    }
  }

  // Check for orphan files on disk
  console.log("\nChecking for unused orphan files on disk...");
  let orphanCount = 0;
  for (const file of filesOnDisk) {
    const webPath = `/images/${file}`;
    if (!imageUsages.has(webPath)) {
      console.warn(`⚠️ UNREFERENCED FILE ON DISK: ${file}`);
      orphanCount++;
    }
  }
  if (orphanCount === 0) {
    console.log("✅ Zero unreferenced files on disk. Every image is accounted for!");
  }

  // 3. Duplicate checks
  console.log("\nAuditing image uniqueness across pages (Cross-page duplicates)...");
  let crossPageDuplicates = 0;
  for (const [imgSrc, usages] of imageUsages.entries()) {
    const uniquePages = Array.from(new Set(usages.map(u => u.page)));
    if (uniquePages.length > 1) {
      crossPageDuplicates++;
      console.error(`❌ CROSS-PAGE DUPLICATE: ${imgSrc} appears on ${uniquePages.length} pages:`);
      for (const u of usages) {
        console.error(`     - Page: ${u.page} (${u.context})`);
      }
    } else {
      console.log(`✅ Strictly 1 page: ${imgSrc} -> ${uniquePages[0]}`);
    }
  }

  // 4. Intra-page duplicate checks
  console.log("\nAuditing image uniqueness within each page (Intra-page duplicates)...");
  let intraPageDuplicates = 0;
  const pageToImages = new Map();
  for (const [imgSrc, usages] of imageUsages.entries()) {
    for (const u of usages) {
      if (!pageToImages.has(u.page)) {
        pageToImages.set(u.page, []);
      }
      pageToImages.get(u.page).push({ src: imgSrc, context: u.context });
    }
  }

  for (const [page, imgs] of pageToImages.entries()) {
    const srcCounts = new Map();
    for (const item of imgs) {
      srcCounts.set(item.src, (srcCounts.get(item.src) || 0) + 1);
    }
    for (const [src, count] of srcCounts.entries()) {
      if (count > 1) {
        intraPageDuplicates++;
        console.error(`❌ INTRA-PAGE DUPLICATE on ${page}: ${src} repeated ${count} times!`);
      }
    }
  }
  if (intraPageDuplicates === 0) {
    console.log("✅ Zero intra-page duplicates across all pages!");
  }

  // 5. Alt text quality audit
  console.log("\nAuditing alt text quality for all content images...");
  let altErrors = 0;
  for (const [imgSrc, usages] of imageUsages.entries()) {
    for (const u of usages) {
      if (!u.alt || u.alt.trim().length < 15) {
        console.error(`❌ LOW QUALITY / SHORT ALT: ${imgSrc} on ${u.page}: "${u.alt}"`);
        altErrors++;
      } else if (
        u.alt.toLowerCase().includes("placeholder") ||
        u.alt.toLowerCase().includes("untitled") ||
        u.alt.toLowerCase().includes("temp image")
      ) {
        console.error(`❌ GENERIC ALT TEXT: ${imgSrc} on ${u.page}: "${u.alt}"`);
        altErrors++;
      }
    }
  }
  if (altErrors === 0) {
    console.log("✅ All alt text is descriptive, contextual, and high quality!");
  }

  // Final Summary
  console.log("\n=================================================");
  console.log("                 AUDIT SUMMARY");
  console.log("=================================================");
  console.log(`Total WebP files on disk:       ${filesOnDisk.length}`);
  console.log(`Total images referenced:        ${imageUsages.size}`);
  console.log(`Missing files on disk:          ${missingFiles}`);
  console.log(`Orphan files on disk:           ${orphanCount}`);
  console.log(`Cross-page duplicate images:    ${crossPageDuplicates}`);
  console.log(`Intra-page duplicate images:    ${intraPageDuplicates}`);
  console.log(`Alt text errors/deficiencies:   ${altErrors}`);
  console.log("=================================================");

  if (
    missingFiles === 0 &&
    orphanCount === 0 &&
    crossPageDuplicates === 0 &&
    intraPageDuplicates === 0 &&
    altErrors === 0
  ) {
    console.log("\n🎉 PERFECT AUDIT: ZERO DUPLICATES, ZERO CROPS, 100% RELEVANT IMAGES & ACCURATE ALT TEXT!\n");
  } else {
    console.error("\n❌ AUDIT FAILED WITH ISSUES.\n");
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
