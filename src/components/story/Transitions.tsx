import { ScrollStory } from "./ScrollStory";

const w = (a: number, b: number, more: Record<string, string | number> = {}) =>
  ({ ["--a" as string]: a, ["--b" as string]: b, ...Object.fromEntries(Object.entries(more).map(([k, v]) => [`--${k}`, v])) }) as React.CSSProperties;

/**
 * Large cinematic wipe: a dark circle opens from the centre until it fills the
 * screen, with a headline settling inside it. The next section continues on the
 * same dark background, so the hand-off is seamless.
 */
export function CircleWipe({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <ScrollStory length={1.7} settleAt={0.91} label={title}>
      <div className="relative h-full w-full lg:min-h-[60vh]">
        <div
          className="stp absolute inset-0 bg-ink"
          style={{ ...w(0, 0.75), clipPath: "circle(calc(var(--t) * 80%) at 50% 55%)" }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-fuchsia/25" />
          <div className="bg-dots absolute inset-0 opacity-[0.07]" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center px-4 py-16 text-center lg:min-h-[60vh] lg:py-0">
          <p className="st text-xs font-bold uppercase tracking-[0.25em] text-accent-2" style={w(0.35, 0.55, { y: "20px" })}>
            {eyebrow}
          </p>
          <h2 className="st mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl" style={w(0.45, 0.75, { y: "60px", s: 0.12 })}>
            {title}
          </h2>
        </div>
      </div>
    </ScrollStory>
  );
}

/**
 * Closing zoom: the call-to-action starts as an inset rounded card and grows to
 * full-bleed as you scroll, then its content settles in.
 */
export function ZoomOutro({ children }: { children: React.ReactNode }) {
  return (
    <ScrollStory length={1.6} settleAt={0.64} label="Get Started" stageClassName="flex items-center">
      <div
        data-dim
        className="stp relative w-full overflow-hidden bg-gradient-to-r from-[#3d3fb8] via-accent to-[#3d3fb8] dark:from-[#1f2170] dark:via-[#2b2d9a] dark:to-[#1f2170] lg:h-full"
        style={{
          ...w(0, 0.45),
          transform: "scale(calc(0.86 + var(--t) * 0.14))",
          borderRadius: "calc((1 - var(--t)) * 48px)",
        }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia/30 blur-3xl" />
          <div className="bg-dots absolute inset-0 opacity-20" />
        </div>
        <div className="st relative flex h-full items-center py-14 lg:py-0" style={w(0.08, 0.4, { y: "50px" })}>
          {children}
        </div>
      </div>
    </ScrollStory>
  );
}
