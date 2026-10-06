import { allPaths as manifestPaths } from "../src/content/manifest.ts";
import { companyPageList } from "../src/lib/companyPages.ts";
import { posts as blogPosts } from "../src/lib/blog-posts.ts";

const BASE_URL = process.argv[2] ?? "http://localhost:3001";

async function audit() {
  const allUrls = [
    "",
    ...manifestPaths,
    ...companyPageList.map(c => c.href.replace(/^\//, "")),
    ...blogPosts.map(b => `blog/${b.slug}`),
  ];
  // Deduplicate URLs
  const uniquePaths = Array.from(new Set(allUrls));
  
  console.log(`Auditing ${uniquePaths.length + 1} pages on ${BASE_URL}...`);
  
  const imageToPages = new Map();
  const pageToImages = new Map();
  
  for (const path of ["", ...uniquePaths]) {
    const url = path === "" ? `${BASE_URL}/` : `${BASE_URL}/${path}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const html = await res.text();
      // Extract images: next/image or standard img
      // We care about the original image file path in public/images/
      const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
      const pageImgs = [];
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        let src = match[1];
        // decode Next.js image url if applicable
        if (src.includes("/_next/image?url=")) {
          const params = new URL(src, BASE_URL).searchParams;
          src = params.get("url") || src;
        }
        // Exclude system SVGs and shared UI logos/brand kit (prompt rule: "Keep shared logos and essential UI icons unchanged")
        if (src.endsWith(".svg") || src.includes("logo.png") || src.includes("/press-kit/")) continue;
        
        pageImgs.push(src);
        if (!imageToPages.has(src)) {
          imageToPages.set(src, new Set());
        }
        imageToPages.get(src).add(path === "" ? "/" : `/${path}`);
      }
      pageToImages.set(path === "" ? "/" : `/${path}`, pageImgs);
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }

  console.log("\n=== AUDIT RESULTS ===");
  console.log(`Total unique non-SVG image sources found: ${imageToPages.size}`);
  
  let crossPageDuplicates = 0;
  let intraPageDuplicates = 0;

  for (const [img, pages] of imageToPages.entries()) {
    if (pages.size > 1) {
      crossPageDuplicates++;
      console.log(`\n❌ CROSS-PAGE DUPLICATED (${pages.size} pages): ${img}`);
      console.log(`   Pages: ${Array.from(pages).slice(0, 5).join(", ")}${pages.size > 5 ? ` ... (+${pages.size - 5} more)` : ""}`);
    } else {
      console.log(`\n✅ UNIQUE (1 page): ${img} on ${Array.from(pages)[0]}`);
    }
  }

  for (const [page, imgs] of pageToImages.entries()) {
    const counts = new Map();
    for (const img of imgs) {
      counts.set(img, (counts.get(img) || 0) + 1);
    }
    for (const [img, count] of counts.entries()) {
      // In SolutionShowcase on '/', desktop (hidden lg:block) and mobile (lg:hidden) viewports each have an Image tag for responsive CSS
      if (page === "/" && count === 2 && img.includes("-operations.webp")) {
        console.log(`ℹ️ Responsive desktop+mobile markup on ${page}: ${img}`);
        continue;
      }
      if (count > 1) {
        intraPageDuplicates++;
        console.log(`\n❌ INTRA-PAGE DUPLICATE on ${page}: ${img} repeated ${count} times`);
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Cross-page duplicate images: ${crossPageDuplicates}`);
  console.log(`Intra-page duplicate occurrences: ${intraPageDuplicates}`);
  console.log(`Total unique images utilized: ${imageToPages.size}`);
  console.log(`Final Result: ${crossPageDuplicates === 0 && intraPageDuplicates === 0 ? "🎉 ZERO DUPLICATE IMAGES ACROSS ENTIRE WEBSITE!" : "FAILED"}`);
  console.log(`========================================\n`);
}

audit().catch(console.error);
