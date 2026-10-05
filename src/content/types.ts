/**
 * Content schema for every ZapBuzzer page except the homepage.
 * Page copy lives in src/content/pages/*.ts and is rendered by
 * src/app/[...slug]/page.tsx through src/components/sections/SectionRenderer.
 */

/** Product-UI mockups rendered with HTML/CSS (src/components/visuals). */
export type VisualKind =
  | "request-dashboard" // admin queue of live requests with statuses
  | "staff-queue" // staff phone list with Accept buttons
  | "request-timeline" // request → routed → accepted → started → delivered → rated
  | "sla-timer" // countdown ring with SLA state + escalation note
  | "analytics" // KPI tiles + bar chart
  | "scorecard" // staff scorecards with ratings and on-time %
  | "mobile-app" // phone mockup of employee request grid
  | "notification-flow" // one request fanning out to app/Telegram/WhatsApp/email
  | "acceptance" // first-accept-wins race between staff
  | "delivery" // delivered + rating prompt
  | "catalog" // pantry catalog grid
  | "print-job" // PDF print job card with copies/colour
  | "escalation" // escalation chain ladder
  | "roles" // permissions matrix
  | "audit-log" // audit log rows
  | "before-after"; // chaos vs ZapBuzzer comparison

export type Section =
  | {
      type: "prose";
      eyebrow?: string;
      heading: string;
      paragraphs: string[];
      bullets?: string[];
    }
  | {
      type: "problem-solution";
      heading: string;
      intro?: string;
      problem: { title: string; points: string[] };
      solution: { title: string; points: string[] };
    }
  | {
      type: "workflow";
      heading: string;
      intro?: string;
      steps: { title: string; body: string }[];
    }
  | {
      type: "features";
      heading: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      type: "scenario";
      heading: string;
      persona: string; // e.g. "Priya, Sales Lead"
      setting: string; // one-line context
      timeline: { time: string; event: string }[]; // e.g. { time: "10:02", event: "..." }
      outcome: string;
    }
  | {
      type: "visual";
      visual: VisualKind;
      heading: string;
      body: string;
      points?: string[];
    }
  | {
      type: "comparison";
      heading: string;
      intro?: string;
      columns: [string, string]; // e.g. ["WhatsApp group", "ZapBuzzer"]
      rows: { label: string; a: string; b: string }[];
    }
  | {
      type: "table";
      heading: string;
      intro?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "stats";
      heading?: string;
      items: { value: string; label: string }[];
      note?: string;
    }
  | {
      type: "checklist";
      heading: string;
      intro?: string;
      items: string[];
    }
  | {
      type: "callout";
      tone?: "info" | "tip" | "warning";
      title: string;
      body: string;
    }
  | {
      type: "audience";
      heading: string;
      items: { role: string; benefit: string }[];
    }
  | {
      type: "metrics";
      heading: string;
      intro?: string;
      items: { metric: string; meaning: string }[];
    }
  | {
      type: "glossary";
      heading: string;
      terms: { term: string; definition: string }[];
    };

export type Template =
  | "standard"
  | "pricing"
  | "contact"
  | "auth-signin"
  | "auth-signup"
  | "sitemap";

export interface PageContent {
  /** Path without leading slash, must match the manifest. */
  path: string;
  /** <title> — unique, under ~60 chars, brand appended automatically. */
  title: string;
  /** Meta description, 140–160 chars. */
  description: string;
  h1: string;
  eyebrow: string;
  /** Hero paragraph, 1–3 sentences. */
  lead: string;
  keywords: string[];
  heroVisual?: VisualKind;
  template?: Template;
  sections: Section[];
  faqs?: { q: string; a: string }[];
  /** Paths (no leading slash) of related pages; must exist in manifest. */
  related: string[];
  cta?: { title: string; body: string };
}
