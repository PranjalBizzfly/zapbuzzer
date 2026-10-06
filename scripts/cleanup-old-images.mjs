import fs from "fs";
import path from "path";

const outDir = "c:/Projects/Zapbuzzer-Website/public/images";
const filesToDelete = [
  "pantry-detail.webp",
  "print-room-detail.webp",
  "it-support-detail.webp",
  "facilities-detail.webp",
  "courier-detail.webp",
  "mobile-detail.webp",
  "quiet-office-detail.webp",
  "avatar-vivek.webp"
];

for (const f of filesToDelete) {
  const p = path.join(outDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("Deleted obsolete cropped file:", f);
  }
}

console.log("Cleanup complete!");
