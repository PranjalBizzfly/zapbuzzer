import type { Metadata } from "next";
import Link from "next/link";
import { LiveRequest } from "@/components/home/LiveRequest";
import { FeatureExplorer, type ExplorerItem } from "@/components/home/FeatureExplorer";
import { Visual } from "@/components/visuals/Visual";
import { Avatar, Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Accordion } from "@/components/motion/Accordion";
import { CountUp } from "@/components/motion/CountUp";
import { Spotlight } from "@/components/motion/Spotlight";
import { Tilt } from "@/components/motion/Tilt";
import { Typewriter } from "@/components/motion/Typewriter";
import { plans } from "@/components/templates/Templates";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage } from "@/content/registry";
import { labelFor } from "@/content/manifest";
import type { VisualKind } from "@/content/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ZapBuzzer — Internal Request CRM for Offices | Press a button. Staff knows." },
  description:
    "One tap for coffee, prints, IT help, facilities and courier pickups. ZapBuzzer routes it to the right team, first to accept owns it, and every request is timed and rated.",
  alternates: { canonical: "/" },
  openGraph: { title: "ZapBuzzer — One tap. Everyone who needs to know, knows.", url: "/" },
};

// Post-hero copy is written independently of zapbuzzer.com: same facts, new wording.

const journey = [
  {
    t: "Choose and send",
    d: "Open the catalogue and pick what you need — a coffee, a print job, help from IT. Add a note, say where it should go, and send it off.",
    icon: "bolt" as IconName,
  },
  {
    t: "The right people hear about it",
    d: "Everyone on the responsible team is alerted together through the app, Telegram, WhatsApp and email, and the alert keeps repeating until somebody responds.",
    icon: "users" as IconName,
  },
  {
    t: "The quickest hand claims it",
    d: "The first available person to accept becomes the owner. You see who it is and when to expect them, and you score the job once it arrives.",
    icon: "target" as IconName,
  },
];

const explorerTabs = ["Everything", "Asking", "Alerts & deadlines", "Oversight"];
const explorer: ExplorerItem[] = [
  { title: "Pantry menu", body: "Teas, coffees, juices, snacks and dry fruits laid out like a menu, so a regular order needs a single tap.", href: "/solutions/pantry/catalog", icon: "sparkles", tab: "Asking", meta: "Pantry" },
  { title: "Print jobs", body: "Attach a PDF, choose how many copies and whether they’re in colour, and the prints are carried to you.", href: "/solutions/print-room", icon: "layers", tab: "Asking", meta: "Print" },
  { title: "IT & facilities fixes", body: "A freezing AC, a frozen projector or a missing HDMI cable goes straight to the team that can sort it out.", href: "/solutions/it-support", icon: "workflow", tab: "Asking", meta: "IT" },
  { title: "Every channel at once", body: "Alerts arrive in the app, on Telegram, on WhatsApp and by email together — and keep arriving until someone accepts.", href: "/notifications/multi-channel", icon: "bolt", tab: "Alerts & deadlines", meta: "Pro" },
  { title: "Single ownership", body: "The whole team sees the request; the person who accepts first takes it on, so nothing rests on assumptions.", href: "/features/first-accept-wins", icon: "target", tab: "Alerts & deadlines", meta: "Core" },
  { title: "Deadlines & escalation", body: "Each request carries a due time. When it slips past, a manager is pulled in automatically.", href: "/sla", icon: "clock", tab: "Alerts & deadlines", meta: "Pro" },
  { title: "Scorecards & insight", body: "Learn who responds quickest, who earns the best ratings and which hours keep your teams busiest.", href: "/analytics", icon: "chart", tab: "Oversight", meta: "Pro" },
  { title: "Permissions & audit trail", body: "Fine-grained access for each role, a record of every action taken, and spending that only the owner can see.", href: "/admin/roles-and-permissions", icon: "shield", tab: "Oversight", meta: "Pro" },
];

const marquee = [
  ["☕", "Pantry", "Brews, snacks & team lunches", "/solutions/pantry"],
  ["🖨️", "Print room", "Copies and colour, delivered", "/solutions/print-room"],
  ["💻", "IT support", "Screens, cables & devices", "/solutions/it-support"],
  ["❄️", "Facilities", "Climate, rooms & repairs", "/solutions/facilities"],
  ["📦", "Courier & reception", "Parcels, pickups & visitors", "/solutions/courier"],
];

const programs: { path: string; visual: VisualKind; icon: IconName }[] = [
  { path: "solutions/pantry", visual: "catalog", icon: "sparkles" },
  { path: "solutions/print-room", visual: "print-job", icon: "layers" },
  { path: "solutions/it-support", visual: "request-dashboard", icon: "workflow" },
  { path: "solutions/facilities", visual: "sla-timer", icon: "clock" },
  { path: "solutions/courier", visual: "audit-log", icon: "mail" },
];

/** Six everyday moments, told as need → what happened. */
const moments = [
  { n: "Aarav", r: "CEO", need: "Halfway through a board call, Aarav sends a coffee order to the Boss Cabin.", then: "The pantry team gets it on Telegram, and Raj has accepted within 12 seconds.", h: "/workflows/coffee-request", icon: "sparkles" as IconName },
  { n: "Kavya", r: "Sales", need: "Ten minutes before a pitch, Kavya uploads her deck and asks for 24 colour copies.", then: "The print room picks the job up and the copies reach her before the demo begins.", h: "/workflows/print-request", icon: "layers" as IconName },
  { n: "Om", r: "Engineer", need: "The conference-room AC is jammed at 16°C, so Om raises a facilities request.", then: "Deepak is alerted — and if the fix takes longer than 15 minutes, it moves up to a manager.", h: "/workflows/ac-issue", icon: "clock" as IconName },
  { n: "Neha", r: "Reception", need: "A courier is waiting at the gate, so Neha logs a pickup.", then: "The mailroom records the handover and the whole trail stays available for audit.", h: "/workflows/courier-pickup", icon: "mail" as IconName },
  { n: "Tanvi", r: "Design", need: "There’s no HDMI cable in the meeting room, so Tanvi asks IT for one.", then: "Priya walks it over in three minutes, and the meeting carries on as if nothing happened.", h: "/workflows/hdmi-request", icon: "workflow" as IconName },
  { n: "Vivek", r: "Operations", need: "Vivek orders lunch for twelve, picking the items and adding a note.", then: "The pantry queues the order, Vivek rates it on arrival, and the owner can see what it cost.", h: "/workflows/lunch-request", icon: "users" as IconName },
];

// Real customer quotes — kept verbatim because they are attributed to people.
const quotes = [
  ["Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.", "Priya", "Office Manager"],
  ["Print jobs land at my desk before the client even sits down. Zero chase calls.", "Kavya", "Sales Lead"],
  ["Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.", "Deepak", "Admin Head"],
];

const faqs = [
  { q: "In one sentence, what does ZapBuzzer do?", a: "It gives everyday office requests — refreshments, printing, IT help, facilities problems, courier pickups — a one-tap way in, a single accountable owner, a running clock and a rating, so nothing depends on someone remembering a phone call." },
  { q: "Why not just keep using a WhatsApp group?", a: "Messages in a group belong to nobody: there’s no owner, no deadline and no history you can measure. In ZapBuzzer each request is claimed by exactly one person, timed, escalated if it runs late and counted in your reports. On Pro, staff can still receive the alerts on WhatsApp and Telegram." },
  { q: "What do support staff need on their side?", a: "The Android app, which keeps ringing even when the phone is silent or locked. On Pro the same alert also goes out on Telegram, WhatsApp and email, so each person can be reached through the channel they already check." },
  { q: "How much setup is involved?", a: "Very little. There are no setup fees and you don’t need a consultant: create the workspace, add your catalogue and teams, invite colleagues and send the first request — usually all within an afternoon." },
  { q: "How is it priced?", a: "The Free plan covers one location and up to 10 staff. Pro costs ₹99 per seat per month and adds unlimited staff, multiple locations, Telegram and WhatsApp alerts, deadlines with escalation, analytics and audit logs. Enterprise is priced to fit. Each plan begins with a 14-day trial that needs no card." },
];

const delay = (i: number, cols = 3) => ({ ["--reveal-delay" as string]: `${(i % cols) * 0.08}s` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: site.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android",
          description: site.description,
          offers: [
            { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
            { "@type": "Offer", name: "Pro", price: "99", priceCurrency: "INR", description: "Per seat per month" },
          ],
        }}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative -mt-[72px] flex items-center overflow-hidden bg-surface-2/60 pb-8 pt-[96px] sm:pb-12 sm:pt-[110px] lg:pb-16 lg:pt-[120px]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="anim-orb absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] rounded-full bg-fuchsia/12 blur-3xl" />
        </div>
        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="stagger space-y-4 text-center sm:space-y-5 lg:col-span-7 lg:text-left">
              <div className="inline-block">
                <Eyebrow>One tap. Everyone who needs to know, knows.</Eyebrow>
              </div>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
                  <Typewriter text="Stop calling the pantry boy three times for one coffee." cursor />
                </h1>
                <p className="text-xl font-semibold text-accent-text sm:text-2xl">{site.tagline}</p>
              </div>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
                ZapBuzzer turns every internal office request — coffee, prints, IT help, facilities, courier pickups — into a single tap.
                Routed to the right team. Accepted by whoever’s free first. Delivered with a timer running. No more chase calls.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                <Button href={site.app.signUp} className="w-full sm:w-auto">Start free — 14-day trial</Button>
                <Button href={site.app.demo} variant="secondary" className="w-full sm:w-auto">Try the demo</Button>
              </div>
              <ul className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-medium text-muted sm:text-sm md:gap-6 lg:justify-start">
                {["No credit card", "No setup call", "Up and running in an afternoon"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.6} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero dashboard card */}
            <div className="anim-rise lg:col-span-5" style={{ animationDelay: "0.1s" }}>
              <Tilt max={6}>
                <div className="relative mx-auto w-full max-w-xl px-2 py-3 sm:px-0">
                  <div className="pointer-events-none absolute -inset-1 animate-pulse rounded-3xl bg-gradient-to-r from-accent/30 to-fuchsia/25 opacity-70 blur-xl dark:opacity-40" />
                  <div className="anim-float absolute -top-2 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-accent-2/60 bg-accent px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md sm:-right-2">
                    <Icon name="target" className="h-4 w-4" />
                    First-accept-wins
                  </div>
                  <div className="anim-float-slow absolute -bottom-2 left-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/10 bg-ink px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md sm:-left-2">
                    <Icon name="clock" className="h-4 w-4 text-accent-2" />
                    SLA timer running
                  </div>
                  <div className="glass-panel relative overflow-hidden rounded-2xl p-5 shadow-2xl sm:p-6" style={{ background: "var(--glass-strong)" }}>
                    <div className="mb-4 flex items-center justify-between border-b border-line pb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        <span className="ml-2 font-mono text-xs font-medium text-muted">zapbuzzer.com/requests</span>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-[11px] font-bold text-accent-text">
                        <span className="h-2 w-2 animate-ping rounded-full bg-success" /> Live
                      </span>
                    </div>
                    <LiveRequest />
                    <div className="mt-4 space-y-3">
                      <div className="glass-panel rounded-xl p-3.5">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-xs font-bold sm:text-sm">
                            <span className="rounded-lg bg-accent-soft p-1.5 text-accent"><Icon name="chart" className="h-4 w-4" /></span>
                            Pilot offices, first month
                          </span>
                          <span className="rounded-md border border-accent/30 bg-accent-soft px-2 py-0.5 text-xs font-bold text-accent-text">96% on time</span>
                        </div>
                        <div className="flex items-end justify-between pt-1">
                          <div>
                            <p className="font-heading text-lg font-extrabold">32s avg accept</p>
                            <p className="text-xs text-muted">4.8★ avg staff rating</p>
                          </div>
                          <div className="anim-bars flex h-8 items-end gap-1" aria-hidden>
                            <span className="h-[60%] w-2.5 rounded-t bg-accent/50" />
                            <span className="h-[75%] w-2.5 rounded-t bg-accent/70" />
                            <span className="h-[85%] w-2.5 rounded-t bg-accent" />
                            <span className="h-full w-2.5 rounded-t bg-violet" />
                          </div>
                        </div>
                      </div>
                      <div className="glass-panel rounded-xl p-3.5">
                        <p className="mb-2 flex items-center gap-2 text-xs font-bold sm:text-sm">
                          <span className="rounded-lg bg-accent-soft p-1.5 text-accent"><Icon name="workflow" className="h-4 w-4" /></span>
                          One tap, three things happen
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono font-semibold">Tap</span>
                          <span className="font-bold text-muted">→</span>
                          <span className="rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono font-bold text-accent-text">Right team pinged</span>
                          <span className="font-bold text-muted">→</span>
                          <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono font-semibold">First accept owns it</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>


      {/* ───────── Solutions marquee ───────── */}
      <div className="relative w-full overflow-hidden border-y border-line/60 bg-surface-2/60 py-3 backdrop-blur-md sm:py-3.5">
        <div className="marquee overflow-hidden">
          <ul className="marquee-track gap-3 pr-3 sm:gap-4 sm:pr-4">
            {[...marquee, ...marquee, ...marquee, ...marquee].map(([e, t, d, h], i) => (
              <li key={i} aria-hidden={i >= marquee.length}>
                <Link
                  href={h}
                  tabIndex={i >= marquee.length ? -1 : undefined}
                  className="group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-glass px-4 py-2.5 shadow-sm backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-accent hover:shadow-md"
                >
                  <span className="text-lg transition-transform group-hover:scale-110 sm:text-xl" aria-hidden>{e}</span>
                  <span className="flex flex-col text-left">
                    <span className="flex items-center gap-1.5">
                      <span className="font-heading text-xs font-bold transition-colors group-hover:text-accent-text sm:text-sm">{t}</span>
                      <Icon name="arrowRight" className="h-3.5 w-3.5 -translate-x-1 text-accent opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="text-[10px] font-semibold text-accent-text">{d}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ───────── Six moments (scenarios first) ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Inside a working day"
            title="Six requests, six people, zero chasing"
            intro="Different roles, different needs — the same one-tap path every time. Here’s how each of these played out."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moments.map((m, i) => (
              <Link key={m.n} href={m.h} data-reveal style={delay(i)} className="glass-panel card-fx group flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <Avatar name={m.n} size="h-11 w-11 text-base" />
                    <span>
                      <span className="block font-heading font-bold">{m.n}</span>
                      <span className="block text-xs font-semibold text-accent-text">{m.r}</span>
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon name={m.icon} className="h-4 w-4" />
                  </span>
                </div>
                <ol className="relative mt-5 flex-1 space-y-4 border-l-2 border-dashed border-line pl-5">
                  <li className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-surface bg-muted" aria-hidden />
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">The need</span>
                    <span className="mt-0.5 block text-sm leading-relaxed">{m.need}</span>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-surface bg-accent" aria-hidden />
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-accent-text">What happened</span>
                    <span className="mt-0.5 block text-sm leading-relaxed">{m.then}</span>
                  </li>
                </ol>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent-text">
                  Follow this workflow
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Results scoreboard ───────── */}
      <section className="relative z-20 bg-surface-2/60 py-10 sm:py-12">
        <div className="container-x">
          <Spotlight className="glass-panel rounded-2xl px-4 py-6 shadow-xl sm:rounded-3xl sm:px-8 sm:py-8" data-reveal>
            <div className="relative z-[2] grid items-center gap-6 lg:grid-cols-[0.9fr_2fr]">
              <div className="text-center lg:text-left">
                <Eyebrow>Measured results</Eyebrow>
                <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight sm:text-3xl">The numbers after month one</h2>
                <p className="mt-2 text-sm text-muted">Averages recorded by our pilot offices during their first four weeks.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {(
                  [
                    ["32s", "until someone accepts", "clock"],
                    ["96%", "delivered within the deadline", "check"],
                    ["−87%", "fewer phone calls", "phone"],
                    ["4.8★", "average rating for staff", "sparkles"],
                  ] as [string, string, IconName][]
                ).map(([v, l, ic]) => (
                  <div key={l} className="group flex flex-col items-center rounded-2xl border border-line bg-surface/70 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                    <span className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                      <Icon name={ic} className="h-6 w-6" />
                    </span>
                    <p className="font-heading text-3xl font-extrabold tracking-tight"><CountUp value={v} /></p>
                    <p className="mt-1 text-xs font-medium leading-snug text-muted">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Spotlight>
        </div>
      </section>

      {/* ───────── How a request travels ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="How a request travels"
            title="From tap to rating in six stages"
            intro="Every request moves along the same accountable route, which is why none of them get lost and all of them can be measured."
          />
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {(
              [
                ["Ask", "One tap, on the web or the app", "bolt"],
                ["Route", "Sent to the team responsible", "workflow"],
                ["Claim", "The first to accept owns it", "target"],
                ["Clock", "A deadline and an ETA start", "clock"],
                ["Hand over", "Delivery confirmed, with a photo if needed", "check"],
                ["Score", "A rating that feeds the scorecard", "chart"],
              ] as [string, string, IconName][]
            ).map(([t, d, ic], i) => (
              <li
                key={t}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 0.07}s` } as React.CSSProperties}
                className="glass-panel group relative flex flex-col items-center rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="absolute right-3 top-2 font-mono text-xs font-bold text-muted/60">0{i + 1}</span>
                <span className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet text-white shadow-[0_10px_20px_-10px_oklch(56%_0.2_277/0.8)] transition-transform duration-300 group-hover:scale-110">
                  <Icon name={ic} className="h-5 w-5" />
                </span>
                <h3 className="font-heading font-bold">{t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>

          {/* The first three stages, explained */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {journey.map((s, i) => (
              <div key={s.t} data-reveal style={delay(i)} className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent-soft p-6">
                <span className="font-mono text-xs font-bold text-accent-text">Stage {i + 1}</span>
                <h3 className="mt-2 flex items-center gap-2 font-heading text-lg font-bold">
                  <Icon name={s.icon} className="h-5 w-5 text-accent" />
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Same order, two afternoons ───────── */}
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="A tale of two afternoons"
            title="The same coffee order, handled two ways"
            intro="One Tuesday, one office, one request for two coffees. On the left, the phone; on the right, ZapBuzzer."
          />
          <div data-reveal>
            <Visual kind="before-after" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-[1.4fr_1fr]">
            <div data-reveal className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold">Why the phone version fails</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A spoken order lives only in someone’s memory. When that person forgets or steps away, the request simply disappears — and the person
                who asked has to keep checking. Printouts vanish inside group chats and IT problems sit unread in private messages for the same reason:
                no one has clearly taken them on.
              </p>
            </div>
            <figure data-reveal style={delay(1)} className="relative rounded-2xl border border-l-4 border-line border-l-accent bg-glass p-6">
              <blockquote className="text-sm font-medium italic leading-relaxed">
                “The office runs quieter. Nobody’s shouting names down the hall. Coffee arrives before anyone asks twice.”
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-accent-text">Aarav Sharma · Founder & CEO, Acme HQ (Pune)</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ───────── Capabilities explorer ───────── */}
      <section className="relative overflow-hidden bg-surface py-10 sm:py-12 md:py-14">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[320px] w-[550px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container-x relative z-10">
          <SectionHeading eyebrow="Capabilities" title="What’s inside the platform" intro="Filter by what you want to do: ask for something, stay on top of alerts and deadlines, or keep an eye on how the office runs." />
          <FeatureExplorer tabs={explorerTabs} items={explorer} />
        </div>
      </section>

      {/* ───────── Solution spotlights (alternating) ───────── */}
      {programs.map((p, i) => {
        const page = getPage(p.path);
        if (!page) return null;
        const label = labelFor(p.path);
        const feat = page.sections.find((s) => s.type === "features");
        const caps = feat && feat.type === "features" ? feat.items.slice(0, 4).map((x) => x.title) : [];
        const reversed = i % 2 === 1;
        return (
          <section key={p.path} className={`py-10 sm:py-14 ${i % 2 ? "bg-surface" : "bg-surface-2/50"}`}>
            <div className="container-x">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div data-reveal className={`space-y-4 sm:space-y-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <Eyebrow>Solution spotlight · {String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                    <Typewriter text={label} />
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">{page.lead}</p>
                  {caps.length > 0 && (
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {caps.map((c) => (
                        <li key={c} className="flex items-start gap-2 rounded-xl border border-line bg-surface/70 p-3">
                          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.6} />
                          <span className="text-sm text-fg/80">{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="pt-2">
                    <Button href={`/${p.path}`} variant="dark">Explore {label}</Button>
                  </div>
                </div>
                <div data-reveal style={delay(1)} className={`relative ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="glass-panel relative overflow-hidden rounded-2xl p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
                      <span className="flex items-center gap-2">
                        <Icon name={p.icon} className="h-5 w-5 text-accent" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wide text-accent-text">{label}</span>
                      </span>
                      <span className="flex items-center gap-1.5 rounded bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent-text">
                        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-success" /> Live
                      </span>
                    </div>
                    <Visual kind={p.visual} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ───────── Principles ───────── */}
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="Our principles" title="Three ideas behind the product" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {(
              [
                ["Shaped around real office work", "Pantry, print room, IT, facilities and courier each get proper treatment. This was never meant to be a generic task list.", "building"],
                ["Quick without configuration", "Ownership by first acceptance, request timers and automatic escalation all work from day one.", "bolt"],
                ["Fair to the people doing the work", "Staff are credited for every job they complete and measured on scorecards, rather than simply nagged.", "users"],
              ] as [string, string, IconName][]
            ).map(([t, d, ic], i) => (
              <div key={t} data-reveal style={delay(i)}>
                <Spotlight className="glass-panel card-fx group flex h-full flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-2">
                  <div className="relative z-[2]">
                    <span className="font-heading text-5xl font-extrabold text-accent/20">{i + 1}</span>
                    <span className="mt-2 mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon name={ic} className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2 font-heading text-xl font-bold transition-colors group-hover:text-accent-text">{t}</h3>
                    <p className="text-sm leading-relaxed text-muted">{d}</p>
                  </div>
                </Spotlight>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Four channels, one alert", "App, Telegram, WhatsApp and email go off together and keep repeating until the request is picked up.", "bolt", "/notifications/multi-channel"],
                ["One request, one owner", "Ownership goes to the first person who taps Accept — never to a vague “someone”.", "target", "/features/first-accept-wins"],
                ["A due time on everything", "Each request has a deadline, and a manager steps in automatically when it slips.", "clock", "/sla"],
                ["Visibility for invisible work", "Response speed, punctuality and ratings for jobs that used to go unmeasured.", "chart", "/analytics"],
              ] as [string, string, IconName, string][]
            ).map(([t, d, ic, h], i) => (
              <Link key={t} href={h} data-reveal style={delay(i, 2)} className="glass-panel card-fx group flex items-start gap-4 rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                  <Icon name={ic} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-heading font-bold transition-colors group-hover:text-accent-text">{t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{d}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Who uses it + company numbers ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="Who uses it" title="Built for every desk that asks or answers" intro="Small studios and multi-floor headquarters alike — more than 200 offices across 14 cities now route their requests this way." />
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white lg:col-span-5" data-reveal>
              <div className="orb -right-16 -top-16 h-48 w-48 bg-accent/40" aria-hidden />
              <p className="relative text-xs font-bold uppercase tracking-wider text-accent-2">ZapBuzzer today</p>
              <div className="relative mt-4 grid grid-cols-2 gap-4">
                {[
                  ["200+", "offices live"],
                  ["1.2M", "requests handled"],
                  ["14", "cities"],
                  ["99.9%", "platform uptime"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-heading text-3xl font-extrabold text-accent-2"><CountUp value={v} /></p>
                    <p className="mt-1 text-xs text-white/70">{l}</p>
                  </div>
                ))}
              </div>
              <p className="relative mt-5 text-xs text-white/60">Trusted by teams including</p>
              <ul className="relative mt-2 flex flex-wrap gap-2" aria-label="Client offices">
                {["Acme HQ", "Northwind", "Lumen Labs", "Volt & Co", "Brightpath", "Meridian"].map((c) => (
                  <li key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">{c}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {(["use-cases/ceo", "use-cases/office-manager", "use-cases/it-manager", "use-cases/facilities-manager"] as const).map((path, i) => {
                const pg = getPage(path);
                return (
                  <Link key={path} href={`/${path}`} data-reveal style={delay(i, 2)} className="glass-panel card-fx group flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                      <Icon name={(["sparkles", "users", "workflow", "building"] as IconName[])[i]} className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-accent-text">For the {labelFor(path)}</h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{pg?.h1}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-text">
                      Read the use case
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Mobile ───────── */}
      <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-fuchsia/20" aria-hidden />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-12">
          <div data-reveal className="space-y-5 lg:col-span-7">
            <Eyebrow invert>On the move</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Your team, reachable wherever they are</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {(
                [
                  ["Loud when it matters", "Alerts still ring when the phone is on silent or locked.", "phone"],
                  ["One tap for anything", "Summon staff or security, raise an alarm, or order something.", "bolt"],
                  ["Track as you walk", "Pick up requests and follow each one through to delivery.", "target"],
                ] as [string, string, IconName][]
              ).map(([t, d, ic]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-accent-2/40">
                  <Icon name={ic} className="h-5 w-5 text-accent-2" />
                  <p className="mt-2 font-heading text-sm font-bold">{t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{d}</p>
                </div>
              ))}
            </div>
            <Button href="/mobile-app" variant="light">Download for Android</Button>
          </div>
          <div data-reveal className="anim-float lg:col-span-5">
            <Visual kind="mobile-app" />
          </div>
        </div>
      </section>

      {/* ───────── Enterprise ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Enterprise"
            title="Scaling to groups and facility operators"
            intro="Larger organisations get company sign-in through SSO and SAML, their own brand on their own domain, a REST API with webhooks, a named customer success manager and the choice to host it on their own servers."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["enterprise/security", "enterprise/multi-location", "integrations/sso-saml", "developers/api"] as const).map((path, i) => {
              const pg = getPage(path);
              return (
                <Link key={path} href={`/${path}`} data-reveal style={delay(i, 4)} className="glass-panel card-fx group flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                    <Icon name={(["shield", "building", "users", "workflow"] as IconName[])[i]} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-bold transition-colors group-hover:text-accent-text">{labelFor(path)}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-muted">{pg?.description}</p>
                </Link>
              );
            })}
          </div>
          <div data-reveal className="mt-10 text-center">
            <Button href="/enterprise" variant="secondary">Plan an enterprise rollout</Button>
          </div>
        </div>
      </section>

      {/* ───────── Customer voices ───────── */}
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="In their words" title="What changed, according to the people using it" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {quotes.map(([q, n, r], i) => (
              <figure key={n} data-reveal style={delay(i)} className="glass-panel group relative flex flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                <span className="absolute right-6 top-4 font-heading text-6xl leading-none text-accent/15" aria-hidden>“</span>
                <blockquote className="relative z-10 mb-6 flex-grow text-[15px] italic leading-relaxed text-fg/85">“{q}”</blockquote>
                <figcaption className="relative z-10 flex items-center gap-3 border-t border-line pt-4">
                  <Avatar name={n} size="h-11 w-11 text-base" />
                  <span>
                    <span className="block font-heading font-bold">{n}</span>
                    <span className="block text-xs font-medium text-accent-text">{r}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Pricing ───────── */}
      <section className="relative overflow-hidden bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x relative z-10">
          <SectionHeading eyebrow="Plans" title="Simple per-seat pricing" intro="You only pay for the seats you use and can stop at any time. There are no setup fees and no consultants, and most offices are live the same afternoon." />
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <div key={p.name} data-reveal style={delay(i)} className={`glass-panel group relative flex flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-2 ${p.popular ? "border-accent/60 ring-1 ring-accent/30" : "hover:border-accent/50"}`}>
                {p.popular && (
                  <span className="beam absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-accent-2">Teams’ favourite</span>
                )}
                <h3 className="font-heading text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                <p className="mt-5 flex items-end gap-1.5 border-b border-line pb-5">
                  <span className="font-heading text-4xl font-extrabold tracking-tight">{p.price}</span>
                  <span className="pb-1 text-sm text-muted">{p.unit}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.6} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href={p.href} variant={p.popular ? "primary" : "secondary"} className="mt-6 w-full">{p.cta}</Button>
                <Link href={p.more} className="mt-3 text-center text-sm font-semibold text-accent-text hover:underline">What’s in {p.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="Questions" title="Before you sign up" />
          <Accordion items={faqs} numbered />
        </div>
      </section>

      {/* ───────── Closing band ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3d3fb8] via-accent to-[#3d3fb8] py-12 sm:py-16 dark:from-[#1f2170] dark:via-[#2b2d9a] dark:to-[#1f2170]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia/30 blur-3xl" />
        </div>
        <div className="container-x relative z-10">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div data-reveal className="space-y-5 text-center lg:col-span-7 lg:text-left">
              <Eyebrow tone="onBrand">Ready when you are</Eyebrow>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Give your office requests an owner and a clock.</h2>
              <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Try ZapBuzzer free for 14 days. You won’t need a card or an onboarding call — open a workspace, bring your colleagues in and let the requests route themselves.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href={site.app.signUp} variant="light" className="w-full sm:w-auto">Open a free workspace</Button>
                <Button href="/demo" variant="ghost-dark" className="w-full sm:w-auto">Book a walkthrough</Button>
              </div>
            </div>
            <div data-reveal style={delay(1)} className="lg:col-span-5">
              <div className="mx-auto w-full max-w-sm rounded-3xl border border-white/20 bg-black/25 p-7 text-white shadow-2xl backdrop-blur-xl">
                <p className="font-heading text-base font-bold">What the trial includes</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["A full 14-day trial", "No card details requested", "No onboarding call to book", "Talk to us at " + site.email].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-accent-2" strokeWidth={2.6} />
                      <span className="break-all">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
