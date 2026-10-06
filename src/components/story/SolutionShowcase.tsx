import Image from "next/image";
import Link from "next/link";
import { ScrollStory } from "./ScrollStory";
import { Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";

export interface ShowcaseItem {
  label: string;
  href: string;
  lead: string;
  caps: string[];
  img: string;
  alt: string;
  chip: { icon: string; title: string; meta: string };
}

const w = (a: number, b: number, more: Record<string, string | number> = {}) =>
  ({ ["--a" as string]: a, ["--b" as string]: b, ...Object.fromEntries(Object.entries(more).map(([k, v]) => [`--${k}`, v])) }) as React.CSSProperties;

/** Each photo arrives from a different direction. */
const entries = [
  { x: "0px", y: "80px", s: 0.08 },
  { x: "160px", y: "0px", s: 0.04 },
  { x: "0px", y: "-80px", s: 0.04 },
  { x: "-160px", y: "0px", s: 0.04 },
  { x: "0px", y: "0px", s: 0.16 },
];

/**
 * Pinned showcase: one stage, five teams. The rail highlights the active team,
 * its copy crossfades on the left, and its photo + live request swap on the right.
 */
export function SolutionShowcase({ items }: { items: ShowcaseItem[] }) {
  const n = items.length;
  const slot = 1 / n;
  const win = (i: number) => {
    const a = i === 0 ? 0 : i * slot - 0.03;
    const b = i === 0 ? 0.0001 : i * slot + 0.03;
    const last = i === n - 1;
    return { a, b, c: last ? 2 : (i + 1) * slot - 0.03, d: last ? 3 : (i + 1) * slot + 0.03 };
  };

  return (
    <ScrollStory length={n * 0.7 + 1} settleAt={0.9} label="Solutions for Every Team" stageClassName="flex items-center">
      <div className="container-x w-full py-10 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: rail + crossfading copy */}
          <div className="lg:col-span-5">
            <Eyebrow>Solutions for every team</Eyebrow>
            <ul className="mt-6 hidden gap-2 lg:flex lg:flex-wrap" aria-hidden>
              {items.map((it, i) => {
                const t = win(i);
                return (
                  <li key={it.label} className="relative overflow-hidden rounded-full border border-line px-3.5 py-1.5 text-xs font-bold text-muted">
                    <span>{it.label}</span>
                    <span className="st absolute inset-0 grid place-items-center rounded-full bg-accent text-white" style={w(t.a, t.b, { c: t.c, d: t.d, y: "0px", s: 0.3, es: 0.3 })}>
                      {it.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="relative mt-8 space-y-12 lg:h-[340px] lg:space-y-0">
              {items.map((it, i) => {
                const t = win(i);
                return (
                  <div key={it.label} className="st lg:absolute lg:inset-x-0 lg:top-0" style={w(t.a, t.b, { c: t.c, d: t.d, y: "40px", ey: "-40px" })}>
                    <h3 className="font-heading text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">{it.label}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">{it.lead}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2.5">
                      {it.caps.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.6} />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link href={it.href} className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-text">
                      Explore {it.label}
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    {/* Phones: show the photo inline under its copy */}
                    <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-line lg:hidden">
                      <Image src={it.img} alt={it.alt} fill sizes="100vw" className="object-cover" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: the stage (desktop only) */}
          <div className="relative hidden lg:col-span-7 lg:block">
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-accent/20 via-violet/10 to-fuchsia/15 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-[0_50px_100px_-40px_oklch(40%_0.18_277/0.6)]">
              <div className="mb-3 flex items-center gap-2 px-2 pt-1">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted">zapbuzzer.com/requests</span>
              </div>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem] bg-surface-2">
                {items.map((it, i) => {
                  const t = win(i);
                  const e = entries[i % entries.length];
                  return (
                    <div key={it.label} className="st absolute inset-0" style={w(t.a, t.b, { c: t.c, d: t.d, ...e, es: 0.06 })}>
                      <Image src={it.img} alt={it.alt} fill sizes="(max-width: 1280px) 60vw, 760px" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating live-request chip per team, arriving after its photo */}
            {items.map((it, i) => {
              const t = win(i);
              return (
                <div
                  key={it.label}
                  className="st absolute -bottom-6 -left-8 w-80 rounded-2xl border border-line bg-glass-strong p-4 shadow-2xl backdrop-blur-xl"
                  style={w(t.a + 0.04, t.b + 0.04, { c: t.c - 0.02, d: t.d - 0.02, x: "-60px", y: "30px", s: 0.1 })}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-2xl" aria-hidden>{it.chip.icon}</span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{it.chip.title}</p>
                      <p className="truncate text-xs text-muted">{it.chip.meta}</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-accent-text">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Live
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollStory>
  );
}
