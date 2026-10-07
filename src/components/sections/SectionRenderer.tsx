import type { Section, VisualKind } from "@/content/types";
import Image from "next/image";
import { Visual } from "@/components/visuals/Visual";
import { Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Spotlight } from "@/components/motion/Spotlight";
import { site } from "@/lib/site";

/*
 * Renders one content section as a full-width band, following Sky9's inner-page
 * structure: centered section header (badge, title, subtitle), then a grid of
 * cards / steps / table underneath. The page alternates band backgrounds.
 */

export const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Badge text shown above each section's heading, by section type. */
const badgeFor: Record<Section["type"], string> = {
  prose: "Overview",
  "problem-solution": "The difference",
  workflow: "Step by step",
  features: "Capabilities",
  scenario: "Real scenario",
  visual: "Product view",
  comparison: "Comparison",
  table: "At a glance",
  stats: "By the numbers",
  checklist: "Key highlights",
  callout: "Good to know",
  audience: "Who benefits",
  metrics: "What you can measure",
  glossary: "Glossary",
};

const icons: IconName[] = ["bolt", "target", "clock", "users", "chart", "shield", "layers", "sparkles", "workflow"];

const delay = (i: number, cols = 3) => ({ ["--reveal-delay" as string]: `${(i % cols) * 0.08}s` }) as React.CSSProperties;

/** Sky9 FeatureCard: icon tile that fills on hover, title, body. */
function FeatureCard({ icon, title, body, i, cols = 3 }: { icon: IconName; title: string; body: string; i: number; cols?: number }) {
  return (
    <div data-reveal style={delay(i, cols)} className="h-full">
      <Spotlight className="glass-panel card-fx group flex h-full flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-2">
        <div className="relative z-[2]">
          <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-accent/20 bg-accent-soft text-accent shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
            <Icon name={icon} className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
          </span>
          <h3 className="mb-3 font-heading text-xl font-bold transition-colors group-hover:text-accent-text">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{body}</p>
        </div>
      </Spotlight>
    </div>
  );
}

/** Grid that keeps an odd last card spanning, like Sky9 does. */
const spanLast = (i: number, n: number, cls: string) => (i === n - 1 && n % 2 !== 0 ? cls : "");

/**
 * Shows a square 320px portrait inside a wide 16:10 frame without stretching it: the sharp portrait
 * sits centred at the frame's height, over a soft blurred copy that fills the sides (decorative).
 */
function PortraitFill({ src, alt, hoverZoom = false }: { src: string; alt: string; hoverZoom?: boolean }) {
  return (
    <>
      <Image src={src} alt="" aria-hidden fill sizes="64px" className="scale-125 object-cover opacity-70 blur-2xl" />
      <div className="absolute inset-y-0 left-1/2 aspect-square -translate-x-1/2">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 62vw, 270px"
          className={`object-cover ${hoverZoom ? "transition-transform duration-700 ease-out group-hover:scale-105" : ""}`}
        />
      </div>
    </>
  );
}

export function getDedicatedScenarioImage(pagePath?: string, persona?: string): { src: string; alt: string } | null {
  const p = (pagePath || "").toLowerCase();
  const per = (persona || "").toLowerCase();

  // /mobile-app -> Tanvi (Scenario: Tanvi only)
  if (p === "mobile-app" && per.includes("tanvi")) {
    return {
      src: "/images/avatar-tanvi.webp",
      alt: "Portrait of Tanvi from the design team, smiling at her desk in a modern office",
    };
  }

  // /use-cases/office-manager -> Priya (Scenario: Priya only)
  if (p === "use-cases/office-manager" && per.includes("priya")) {
    return {
      src: "/images/avatar-priya.webp",
      alt: "Portrait of Priya, the office manager, in a grey blazer in an open-plan office",
    };
  }

  // /use-cases/improve-response-time -> Om (Scenario: Om only)
  if (p === "use-cases/improve-response-time" && per.includes("om")) {
    return {
      src: "/images/avatar-om.webp",
      alt: "Portrait of Om, an engineer, smiling in front of rows of developer workstations",
    };
  }

  return null;
}

export function SectionRenderer({
  section,
  index,
  introVisual,
  pagePath,
  usedImages,
}: {
  section: Section;
  index: number;
  introVisual?: VisualKind;
  pagePath?: string;
  usedImages?: Set<string>;
}) {
  const pageUsed = usedImages ?? new Set<string>();
  const headProps = { eyebrow: badgeFor[section.type], typewriter: true };

  switch (section.type) {
    case "prose": {
      // First prose section = Sky9 "intro" split: copy left, framed visual right.
      if (index === 0) {
        return (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div data-reveal className="space-y-5">
              <Eyebrow>{section.eyebrow ?? badgeFor.prose}</Eyebrow>
              <h2 id={sectionId(section.heading)} className="scroll-mt-28 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-base leading-relaxed text-fg/85 sm:text-lg" : "text-sm leading-relaxed text-muted sm:text-base"}>
                  {p}
                </p>
              ))}
              {section.bullets && (
                <div className="flex flex-wrap gap-3 pt-1">
                  {section.bullets.map((b, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2/70 px-4 py-2.5 text-sm font-semibold">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <div className="pt-2">
                <Button href={site.app.signUp}>Start free 14-day trial</Button>
              </div>
            </div>
            <div data-reveal style={delay(1)} className="relative">
              <div className="glass-panel group relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="truncate text-xs font-semibold text-muted">ZapBuzzer Operational Flow</span>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live System
                  </span>
                </div>
                <div className="rounded-2xl bg-surface-2/60 p-3.5 sm:p-4">
                  <Visual kind={introVisual ?? "request-timeline"} />
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div>
          <SectionHeading {...headProps} eyebrow={section.eyebrow ?? badgeFor.prose} title={section.heading} />
          <div data-reveal className="glass-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-fg/80 sm:text-lg">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {section.bullets && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {section.bullets.map((b, i) => (
                  <div key={i} className={`flex items-start gap-3 rounded-xl border border-line bg-surface-2/70 p-4 ${spanLast(i, section.bullets!.length, "sm:col-span-2")}`}>
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.6} />
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    case "problem-solution": {
      // Sky9 Mission / Vision: two large side-by-side cards with modern workplace visual accent.
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div className="eq-titles grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { t: section.problem.title, pts: section.problem.points, icon: "target" as IconName, bad: true },
              { t: section.solution.title, pts: section.solution.points, icon: "check" as IconName, bad: false },
            ].map((c, i) => (
              <div key={c.t} data-reveal style={delay(i, 2)} className={`glass-panel rounded-3xl p-7 sm:p-9 ${c.bad ? "" : "border-accent/40"}`}>
                {/* Matching status bar on both cards keeps icons, headings and lists aligned. */}
                {c.bad ? (
                  <div className="mb-6 flex items-center justify-between rounded-xl border border-danger/20 bg-danger/[0.06] px-4 py-2.5 text-xs font-semibold text-danger">
                    <span className="flex items-center gap-2">
                      <Icon name="phone" className="h-4 w-4" />
                      <span>Today · Manual & Noisy</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-danger" />
                      Unowned
                    </span>
                  </div>
                ) : (
                  <div className="mb-6 flex items-center justify-between rounded-xl border border-accent/25 bg-accent-soft/60 px-4 py-2.5 text-xs font-semibold text-accent-text">
                    <span className="flex items-center gap-2">
                      <Icon name="sparkles" className="h-4 w-4 text-accent" />
                      <span>With ZapBuzzer · Automated & Silent</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Optimized
                    </span>
                  </div>
                )}
                <span className={`mb-6 grid h-12 w-12 place-items-center rounded-xl ${c.bad ? "bg-[oklch(60%_0.2_20/0.12)] text-danger" : "bg-accent-soft text-accent"}`}>
                  <Icon name={c.icon} className="h-6 w-6" strokeWidth={2.4} />
                </span>
                <h3 className="mb-4 font-heading text-2xl font-bold">{c.t}</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-fg/80 sm:text-base">
                  {c.pts.map((p, j) => (
                    <li key={j} className="flex gap-3">
                      {c.bad ? <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" /> : <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.6} />}
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "features":
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div className="eq-titles grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((f, i) => (
              <div key={i} className={spanLast(i, section.items.length, "md:col-span-2 lg:col-span-1")}>
                <FeatureCard icon={icons[i % icons.length]} title={f.title} body={f.body} i={i} />
              </div>
            ))}
          </div>
        </div>
      );

    case "workflow":
      // Sky9 "Our Learning Framework": numbered step cards in a row.
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <ol className={`eq-titles lg:[--eq-lines:3] xl:[--eq-lines:2] grid grid-cols-1 gap-6 sm:grid-cols-2 ${section.steps.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {section.steps.map((s, i) => (
              <li key={i} data-reveal style={delay(i, 4)} className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-accent-soft font-heading font-bold text-accent-text transition-colors group-hover:bg-accent group-hover:text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold">{s.title.replace(/^\d+[.)]\s*/, "")}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "scenario": {
      const candidateScenarioImg = getDedicatedScenarioImage(pagePath, section.persona);
      const scenarioImg = candidateScenarioImg && !pageUsed.has(candidateScenarioImg.src) ? candidateScenarioImg : null;
      if (scenarioImg) {
        pageUsed.add(scenarioImg.src);
      }
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.setting} />
          <div data-reveal className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-ink via-ink to-[#1b1d55] p-6 text-white shadow-2xl sm:p-10">
            <div className="orb -left-24 -top-24 h-72 w-72 bg-accent/35" aria-hidden />
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="space-y-4 lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-lg">
                  {scenarioImg ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <PortraitFill src={scenarioImg.src} alt={scenarioImg.alt} />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-black/75 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active Workplace Scenario</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3.5 border-b border-white/10 p-5 bg-white/[0.04]">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent-2/30 bg-accent/30 font-heading font-bold text-accent-2">
                        <Icon name="users" className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Verified Scenario
                        </span>
                        <p className="font-heading text-lg font-bold text-white">{section.persona}</p>
                      </div>
                    </div>
                  )}
                  <div className="p-4 sm:p-5">
                    {scenarioImg && <p className="font-heading text-lg font-bold text-white">{section.persona}</p>}
                    <p className={`${scenarioImg ? "mt-1" : ""} text-xs leading-relaxed text-white/70`}>{section.setting}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-accent-2/30 bg-accent/20 p-4 sm:p-5 text-sm leading-relaxed text-white/90">
                  <span className="font-bold text-accent-2">Outcome: </span>
                  {section.outcome}
                </div>
              </div>
              {/* Vertical timeline joined by a line. On desktop the steps share the photo column's height, so no empty block is left below them. */}
              <ol className="relative flex flex-col gap-3 lg:col-span-7 lg:self-stretch">
                <span className="absolute bottom-6 left-[2.45rem] top-6 z-[5] w-px bg-gradient-to-b from-accent-2/50 via-accent-2/25 to-transparent" aria-hidden />
                {section.timeline.map((t, i) => (
                  <li key={i} className="relative flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition lg:flex-1 lg:items-center duration-300 hover:border-accent-2/40 hover:bg-white/[0.07]">
                    <span className="relative z-10 h-fit shrink-0 rounded-md bg-[#262a6b] px-2 py-1 font-mono text-[11px] font-bold tabular-nums text-accent-2">{t.time}</span>
                    <span className="text-sm leading-relaxed text-white/85">{t.event}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      );
    }

    case "visual": {
      const flip = index % 2 === 1;
      return (
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div data-reveal className={`space-y-5 ${flip ? "lg:order-2" : ""}`}>
            <Eyebrow>{badgeFor.visual}</Eyebrow>
            <h2 id={sectionId(section.heading)} className="scroll-mt-28 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{section.body}</p>
            {section.points && (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {section.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.6} />
                    <span className="text-sm text-fg/80">{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div data-reveal style={delay(1)} className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
            <div className="glass-panel group overflow-hidden rounded-3xl border border-line bg-surface/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="truncate text-xs font-semibold text-muted">ZapBuzzer Workplace Terminal</span>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Telemetry
                </span>
              </div>
              <Visual kind={section.visual} />
            </div>
          </div>
        </div>
      );
    }

    case "comparison":
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div data-reveal className="glass-panel overflow-hidden rounded-2xl">
            <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] text-sm font-bold md:grid">
              <div className="bg-surface-2 px-6 py-4 text-muted">&nbsp;</div>
              <div className="bg-surface-2 px-6 py-4 font-heading">{section.columns[0]}</div>
              <div className="bg-accent px-6 py-4 font-heading text-white">{section.columns[1]}</div>
            </div>
            {section.rows.map((r, i) => (
              <div key={i} className="grid border-t border-line text-sm transition-colors hover:bg-accent-soft/50 md:grid-cols-[1fr_1.4fr_1.4fr] sm:text-[15px]">
                <div className="px-6 pt-4 font-semibold md:py-4">{r.label}</div>
                <div className="px-6 py-1 text-muted md:py-4">
                  <span className="text-xs font-semibold md:hidden">{section.columns[0]}: </span>
                  {r.a}
                </div>
                <div className="px-6 pb-4 pt-1 md:bg-accent-soft/40 md:py-4">
                  <span className="text-xs font-semibold text-accent-text md:hidden">{section.columns[1]}: </span>
                  {r.b}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "table":
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div data-reveal className="glass-panel overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[600px] text-left text-sm sm:text-[15px]">
              <thead className="bg-surface-2">
                <tr>
                  {section.headers.map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 font-heading font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((r, i) => (
                  <tr key={i} className="border-t border-line align-top transition-colors hover:bg-accent-soft/50">
                    {r.map((c, j) => (
                      <td key={j} className={`px-6 py-4 ${j === 0 ? "font-semibold" : "text-muted"}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "stats":
      return (
        <div>
          {section.heading && <SectionHeading {...headProps} title={section.heading} />}
          <StatsBar items={section.items} note={section.note} />
        </div>
      );

    case "checklist":
      // Sky9 "Key Principles & Highlights" grid.
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div className="eq-titles grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((it, i) => (
              <div key={i} data-reveal style={delay(i)} className="glass-panel flex items-start gap-3 rounded-xl p-5 transition hover:border-accent/50">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.6} />
                <span className="text-sm font-medium">{it}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "callout":
      return (
        <div data-reveal className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-accent-soft p-7 text-center backdrop-blur-xl sm:p-10">
          <Eyebrow>{badgeFor.callout}</Eyebrow>
          <h3 className="mt-4 font-heading text-2xl font-bold">{section.title}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-fg/80">{section.body}</p>
        </div>
      );

    case "audience":
      // Practitioner / people cards: one consistent icon header on every card (no single photo
      // card, which made one card taller than its row). Rows are centred, so a short last row
      // (e.g. 5 items) sits in the middle instead of leaving a lone card on the left.
      {
        const n = section.items.length;
        const per = n % 4 === 0 ? 4 : n === 2 ? 2 : 3;
        const itemW = per === 4 ? "lg:w-[calc(25%-18px)]" : per === 3 ? "lg:w-[calc(33.333%-16px)]" : "lg:w-[calc(50%-12px)]";
        return (
        <div>
          <SectionHeading {...headProps} title={section.heading} />
          <div className="eq-titles [--eq-lines:3] lg:max-xl:[--eq-lines:4] flex flex-wrap justify-center gap-6">
            {section.items.map((a, i) => {
              return (
                <div key={a.role} data-reveal style={delay(i, 4)} className={`glass-panel card-fx group w-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-accent/50 sm:w-[calc(50%-12px)] ${itemW}`}>
                  {(
                    <div className="flex items-center gap-3.5 border-b border-line bg-surface-2/60 p-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent-soft text-accent shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                        <Icon name={icons[i % icons.length]} className="h-6 w-6" />
                      </span>
                      <div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified Role
                        </span>
                        <h3 className="font-heading text-base font-bold transition-colors group-hover:text-accent-text">{a.role}</h3>
                      </div>
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <p className="text-sm leading-relaxed text-muted">{a.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        );
      }

    case "metrics":
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} intro={section.intro} />
          <div className="eq-titles grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((m, i) => (
              <div key={m.metric} className={spanLast(i, section.items.length, "md:col-span-2 lg:col-span-1")}>
                <FeatureCard icon="chart" title={m.metric} body={m.meaning} i={i} />
              </div>
            ))}
          </div>
        </div>
      );

    case "glossary":
      return (
        <div>
          <SectionHeading {...headProps} title={section.heading} />
          <dl className="eq-titles grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...section.terms]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((t, i) => (
                <div key={t.term} id={sectionId(t.term)} data-reveal style={delay(i)} className="glass-panel card-fx group scroll-mt-28 rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
                  <dt className="font-heading text-lg font-bold transition-colors group-hover:text-accent-text">{t.term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{t.definition}</dd>
                </div>
              ))}
          </dl>
        </div>
      );
  }
}

/** Sky9 StatsBar: one card, four columns with dividers, icon tiles. */
export function StatsBar({ items, note }: { items: { value: string; label: string }[]; note?: string }) {
  const statIcons: IconName[] = ["clock", "check", "phone", "sparkles"];
  return (
    <Spotlight className="glass-panel rounded-2xl shadow-xl sm:rounded-3xl" data-reveal>
      <dl className={`relative z-[2] grid grid-cols-2 ${items.length === 3 ? "md:grid-cols-3" : items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-4"}`}>
        {items.map((s, i) => (
          <div key={s.label} className={`group flex flex-col items-center px-3 py-6 text-center sm:py-8 ${i > 0 ? "md:border-l md:border-line" : ""} ${i % 2 ? "border-l border-line md:border-l" : ""}`}>
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-accent/20 bg-accent-soft text-accent shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white sm:h-16 sm:w-16">
              <Icon name={statIcons[i % 4]} className="h-7 w-7" />
            </span>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-heading text-3xl font-extrabold tracking-tight transition-colors group-hover:text-accent-text sm:text-4xl">{s.value}</dd>
            <p className="mt-1.5 max-w-[160px] text-xs font-medium leading-snug text-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </dl>
      {note && <p className="relative z-[2] border-t border-line px-4 py-3 text-center text-xs text-muted">{note}</p>}
    </Spotlight>
  );
}
