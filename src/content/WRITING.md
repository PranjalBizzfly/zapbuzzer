# Writing guide for page content files

Every non-home page is a `PageContent` object (see `types.ts`) in a file under `src/content/pages/`.
Paths come from `manifest.ts` — use them exactly, no leading slash.

## File format
```ts
import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "features/first-accept-wins",
    title: "First-Accept-Wins Request Routing",        // brand suffix is added automatically
    description: "...140–160 chars, unique...",
    h1: "...",
    eyebrow: "Feature",
    lead: "...",
    keywords: ["first accept wins routing", "..."],
    heroVisual: "acceptance",
    sections: [ /* see types.ts Section union */ ],
    faqs: [ { q: "...", a: "..." } ],
    related: ["features/request-routing", "sla", "notifications/multi-channel", "admin/staff-assignment", "analytics"],
    cta: { title: "...", body: "..." },
  },
];
```
Use double-quoted strings; escape inner double quotes or use typographic quotes (“ ” ’). Plain text only,
no markdown or HTML inside strings.

## Hard rules
1. Facts: stay inside `FACTS.md`. Never invent integrations (Slack, Teams, Jira…), certifications
   (ISO, SOC 2), API endpoint names, payload fields, prices, customer names, quotes or statistics.
   Only the four real quotes may be quoted. For Enterprise items (SSO/SAML, white-label, custom domain,
   REST API, webhooks, on-prem, dedicated CSM) describe purpose, typical use and how to engage —
   never technical specifics. Things like "configurable SLA per category", "categories", "roles" are
   fine as product concepts; avoid claiming exact UI settings you can't know.
2. Plan accuracy: Free = email notifications only, 10 staff, 1 location, 30 days history.
   Telegram/WhatsApp, SLA + escalation chain, full analytics + scorecards, audit logs + reports,
   multi-location = Pro. SSO/SAML, white-label, custom domain, API/webhooks, CSM, on-prem = Enterprise.
   Mention the plan when a page is about a plan-gated capability.
3. Depth: major feature/solution hub pages 900–1500 words; other feature/use-case pages 700–1200;
   workflow pages 600–1000; guides 1200–1800. Count words across lead + sections + FAQs.
   Aim for 7–11 sections per page, mixing types (prose, problem-solution, workflow, visual, scenario,
   features, metrics, comparison/table, audience, checklist, callout, stats). Every page should
   include at least one `visual` section and usually one `scenario`.
4. Uniqueness: each page has its own angle. Do not paste the same paragraph across pages. If the
   core lifecycle (request → routing → notification → first accept → assignment → SLA timer →
   progress → delivery → rating → analytics) is relevant, explain it *from this page's angle*
   (e.g. on Print SLA, what the timer means for a 24-copy colour job).
5. Write for humans: concrete office details (boss cabin, 3rd-floor pantry, Conference Room B,
   board meeting at 11, pitch in 10 minutes). Use the canonical cast where it fits; you may add
   other Indian first names for staff/employees in scenarios. No hype words like "revolutionary",
   "seamless", "cutting-edge", "unlock", "leverage", "in today's fast-paced world".
6. FAQs: 4–7 per page, genuinely page-specific, answers 2–4 sentences.
7. `related`: 5–8 paths that exist in the manifest; include the parent hub, a sibling, a feature,
   a use case or workflow, and a commercial page (pricing/free-trial/demo) where relevant.
8. Titles ≤ 60 chars, unique. Descriptions unique. H1 different from title wording where natural.
9. Visual kinds available: request-dashboard, staff-queue, request-timeline, sla-timer, analytics,
   scorecard, mobile-app, notification-flow, acceptance, delivery, catalog, print-job, escalation,
   roles, audit-log, before-after.
10. When finished, run `npx tsc --noEmit -p .` from the project root and fix any errors in your files.
