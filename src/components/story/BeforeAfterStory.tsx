import { ScrollStory } from "./ScrollStory";
import { Eyebrow } from "@/components/ui/primitives";

const w = (a: number, b: number, more: Record<string, string | number> = {}) =>
  ({ ["--a" as string]: a, ["--b" as string]: b, ...Object.fromEntries(Object.entries(more).map(([k, v]) => [`--${k}`, v])) }) as React.CSSProperties;

const oldWay = [
  ["2:00", "Aarav rings the pantry: two coffees for the boss cabin."],
  ["2:09", "Still waiting. Second call. Raju forgot the order."],
  ["2:14", "Third call. Raju has stepped out for lunch."],
  ["2:25", "A colleague finally brings it. The meeting is half over."],
];
const newWay = [
  ["2:00:00", "One tap sends two black coffees to the Boss Cabin."],
  ["2:00:12", "Arjun claims it; his name and photo appear."],
  ["2:01", "Marked as started, three minutes away."],
  ["2:04", "Handed over with a photo, then rated five stars."],
];

/**
 * Pinned comparison: the phone-call version plays out line by line, then the
 * ZapBuzzer version slides over it while the old one dims, ending on the score.
 */
export function BeforeAfterStory() {
  return (
    <ScrollStory length={2.6} label="The Same Coffee Order, Handled Two Ways" stageClassName="flex items-center">
      <div className="container-x w-full py-10 lg:py-0">
        <div className="st mx-auto mb-10 max-w-3xl text-center" style={w(0, 0.08, { y: "30px" })}>
          <Eyebrow>A tale of two afternoons</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">The Same Coffee Order, Handled Two Ways</h2>
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:block lg:h-[380px]">
          {/* The old way — dims and steps back once the new way arrives */}
          <div data-dim className="stp lg:absolute lg:left-0 lg:top-0 lg:w-[56%]" style={{ ...w(0.42, 0.58), opacity: "calc(1 - var(--t) * 0.25)", transform: "translateX(calc(var(--t) * -24px))", transformOrigin: "left center" }}>
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
              <p className="font-heading text-lg font-bold">The phone-call way</p>
              <ul className="mt-5 space-y-3.5">
                {oldWay.map(([t, d], i) => (
                  <li key={t} className="st flex gap-3 text-[15px]" style={w(0.06 + i * 0.07, 0.12 + i * 0.07, { x: "-30px", y: "0px" })}>
                    <span className="w-12 shrink-0 font-mono font-bold tabular-nums">{t}</span>
                    <span className="text-muted">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="st mt-6 rounded-xl bg-[oklch(60%_0.2_20/0.1)] px-4 py-3 font-semibold text-[oklch(50%_0.19_20)] dark:text-[oklch(72%_0.17_20)]" style={w(0.34, 0.4, { y: "16px" })}>
                25 minutes · three calls · coffee gone cold
              </p>
            </div>
          </div>

          {/* The ZapBuzzer way — slides in over the top */}
          <div className="st lg:absolute lg:right-0 lg:top-10 lg:w-[56%]" style={w(0.42, 0.56, { x: "320px", y: "0px", s: 0.04 })}>
            <div className="rounded-3xl border border-accent/40 bg-glass-strong p-6 shadow-[0_40px_90px_-40px_oklch(40%_0.18_277/0.7)] backdrop-blur-xl sm:p-8">
              <p className="font-heading text-lg font-bold text-accent-text">The ZapBuzzer way</p>
              <ul className="mt-5 space-y-3.5">
                {newWay.map(([t, d], i) => (
                  <li key={t} className="st flex gap-3 text-[15px]" style={w(0.56 + i * 0.06, 0.62 + i * 0.06, { x: "30px", y: "0px" })}>
                    <span className="w-16 shrink-0 font-mono font-bold tabular-nums">{t}</span>
                    <span className="text-muted">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="st mt-6 rounded-xl bg-[oklch(62%_0.16_155/0.12)] px-4 py-3 font-semibold text-[oklch(42%_0.13_155)] dark:text-[oklch(78%_0.14_155)]" style={w(0.8, 0.86, { y: "16px" })}>
                4 minutes · zero calls · still hot
              </p>
            </div>
          </div>
        </div>

        {/* Final score */}
        <div className="st mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 text-center" style={w(0.86, 0.94, { y: "40px", s: 0.1 })}>
          {[
            ["25 → 4", "minutes"],
            ["3 → 0", "phone calls"],
            ["Cold → hot", "coffee"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-line bg-surface/80 p-4">
              <p className="font-heading text-2xl font-extrabold text-accent-text sm:text-3xl">{v}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollStory>
  );
}
