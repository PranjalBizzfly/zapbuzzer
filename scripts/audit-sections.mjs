import { allPages } from "../src/content/pages/index.ts";

const typeCounts = {};
const scenarioPages = [];
const audiencePages = [];

for (const p of allPages) {
  for (const s of p.sections) {
    typeCounts[s.type] = (typeCounts[s.type] || 0) + 1;
    if (s.type === "scenario") scenarioPages.push({ path: p.path, persona: s.persona, heading: s.heading });
    if (s.type === "audience") audiencePages.push({ path: p.path, heading: s.heading, roles: s.items.map(it => it.role) });
  }
}

console.log("Section counts:", typeCounts);
console.log("\nScenario pages count:", scenarioPages.length);
console.log("Scenario pages:", JSON.stringify(scenarioPages, null, 2));
console.log("\nAudience pages count:", audiencePages.length);
console.log("Audience pages:", JSON.stringify(audiencePages, null, 2));
