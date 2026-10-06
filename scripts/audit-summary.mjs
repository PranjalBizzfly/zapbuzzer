import { allPages } from "../src/content/pages/index.ts";

const counts = {};
allPages.forEach(p => p.sections.forEach(s => counts[s.type] = (counts[s.type] || 0) + 1));
console.log("SECTION COUNTS:", counts);
