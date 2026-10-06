import { ScrollStory } from "./ScrollStory";
import { Avatar } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Timeline window for a `.st` / `.stp` element (all values are fractions of the pinned scroll). */
const w = (a: number, b: number, more: Record<string, string | number> = {}) =>
  ({ ["--a" as string]: a, ["--b" as string]: b, ...Object.fromEntries(Object.entries(more).map(([k, v]) => [`--${k}`, v])) }) as React.CSSProperties;

const steps: { a: number; b: number; c: number; d: number; n: string; t: string; body: string; icon: IconName }[] = [
  { a: 0.0, b: 0.06, c: 0.16, d: 0.22, n: "01", t: "A Request Is Sent", body: "Aarav taps two black coffees for the Boss Cabin and adds a note. That’s the whole effort on his side.", icon: "bolt" },
  { a: 0.18, b: 0.26, c: 0.36, d: 0.42, n: "02", t: "The Whole Team Hears It", body: "Arjun, Manoj and Sunita are alerted together on the app, Telegram, WhatsApp and email. The alert repeats until someone answers.", icon: "users" },
  { a: 0.38, b: 0.46, c: 0.54, d: 0.6, n: "03", t: "One Person Claims It", body: "Arjun taps Accept first. The request is his, the others see it’s taken, and Aarav sees Arjun’s name and photo.", icon: "target" },
  { a: 0.56, b: 0.64, c: 0.72, d: 0.78, n: "04", t: "The Clock Is Running", body: "Arjun marks it started with a three-minute ETA. A deadline runs in the background. If it slips, a manager is brought in.", icon: "clock" },
  { a: 0.74, b: 0.82, c: 2, d: 3, n: "05", t: "Delivered, Then Rated", body: "The coffee arrives with a photo as proof, Aarav rates it five stars, and the job counts towards Arjun’s scorecard.", icon: "sparkles" },
];

const team = [
  { n: "Arjun", note: "Pantry · 3rd floor" },
  { n: "Manoj", note: "Pantry · ground floor" },
  { n: "Sunita", note: "Pantry · 2nd floor" },
];
const channels = ["App", "Telegram", "WhatsApp", "Email"];

export function RequestStory() {
  return (
    <ScrollStory length={3} label="One Request, Start to Finish" stageClassName="flex items-center">
      <div className="container-x grid w-full grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-0">
        {/* Captions: one at a time on desktop, a list on phones */}
        <div className="relative lg:col-span-5 lg:h-[340px]">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent-text">One request, start to finish</p>
          <ol className="space-y-6 lg:space-y-0">
            {steps.map((s) => (
              <li key={s.n} className="st lg:absolute lg:inset-x-0 lg:top-12" style={w(s.a, s.b, { c: s.c, d: s.d, y: "36px", ey: "-36px" })}>
                <span className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet text-white shadow-[0_12px_26px_-12px_oklch(56%_0.2_277/0.9)]">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm font-bold text-muted">{s.n} / 05</span>
                </span>
                <h3 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">{s.t}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* The request card and everything that joins it */}
        <div className="relative lg:col-span-7">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden />

          {/* Channel chips fan out above the card */}
          <div className="relative mb-5 flex flex-wrap justify-center gap-2">
            {channels.map((c, i) => (
              <span
                key={c}
                className="st rounded-full border border-accent/30 bg-glass-strong px-3.5 py-1.5 text-xs font-bold text-accent-text shadow-card backdrop-blur-md"
                style={w(0.18 + i * 0.02, 0.24 + i * 0.02, { y: "-30px", x: `${(i - 1.5) * 30}px`, s: 0.2, c: 0.5, d: 0.56, ey: "-20px" })}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success align-middle" />
                {c}
              </span>
            ))}
          </div>

          <div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:pr-56">
            {/* Main card */}
            <div className="st relative rounded-3xl border border-line bg-glass-strong p-6 shadow-[0_40px_90px_-40px_oklch(40%_0.18_277/0.6)] backdrop-blur-xl" style={w(0, 0.08, { y: "80px", s: 0.12 })}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted">Request #4821</span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-accent-text">Boss Cabin</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-3xl" aria-hidden>☕</span>
                <div>
                  <p className="font-heading text-xl font-bold">2× Black coffee</p>
                  <p className="text-sm text-muted">From Aarav · “Board call, quick please”</p>
                </div>
              </div>

              {/* Owner slot: Arjun lands here */}
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
                <div className="st flex items-center gap-3" style={w(0.4, 0.48, { x: "120px", y: "-40px", s: 0.3 })}>
                  <Avatar name="Arjun" size="h-11 w-11 text-base" />
                  <div>
                    <p className="font-semibold">Arjun accepted</p>
                    <p className="text-xs text-muted">First to tap · 12 seconds</p>
                  </div>
                </div>
                {/* SLA ring fills while the clock runs */}
                <div className="stp relative h-16 w-16 shrink-0" style={w(0.58, 0.76)}>
                  <div className="st-ring absolute inset-0 rounded-full" />
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <span className="font-mono text-[11px] font-bold leading-tight">ETA<br />3 min</span>
                  </div>
                </div>
              </div>

              {/* Delivery proof + rating */}
              <div className="st mt-4 flex items-center gap-4 rounded-2xl border border-success/30 bg-[oklch(62%_0.16_155/0.08)] p-4" style={w(0.76, 0.84, { x: "-120px", y: "0px" })}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-success text-white" aria-hidden>
                  <Icon name="check" className="h-6 w-6" strokeWidth={3} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Delivered to the Boss Cabin</p>
                  <p className="text-xs text-muted">Photo attached · 4 minutes, no phone calls</p>
                </div>
                <div className="flex gap-0.5 text-xl text-[oklch(76.9%_0.188_70)]" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="st" style={w(0.86 + i * 0.02, 0.9 + i * 0.02, { y: "-16px", s: 0.6 })}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* The pinged team: flies in from the right, then two step aside */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:absolute lg:right-0 lg:top-6 lg:mt-0 lg:w-48 lg:grid-cols-1">
              {team.map((m, i) => (
                <div
                  key={m.n}
                  className="st flex items-center gap-3 rounded-2xl border border-line bg-glass-strong p-3 shadow-card backdrop-blur-md"
                  style={w(0.2 + i * 0.03, 0.27 + i * 0.03, { x: "140px", y: "0px", c: i === 0 ? 0.4 : 0.44, d: i === 0 ? 0.46 : 0.52, ex: i === 0 ? "-80px" : "60px", es: 0.1 })}
                >
                  <Avatar name={m.n} size="h-9 w-9 text-sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{m.n}</p>
                    <p className="truncate text-[11px] text-muted">{m.note}</p>
                  </div>
                  <span className="ml-auto h-2 w-2 animate-ping rounded-full bg-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress rail */}
      <div className="absolute inset-x-0 bottom-6 mx-auto hidden w-48 lg:block" aria-hidden>
        <div className="h-1 overflow-hidden rounded-full bg-line">
          <div className="stp st-fill h-full rounded-full bg-gradient-to-r from-accent to-fuchsia" style={w(0, 1)} />
        </div>
      </div>
    </ScrollStory>
  );
}
