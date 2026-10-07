import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroDiscs } from "@/components/three/HeroDiscs";
import { HeroParallax } from "@/components/three/HeroParallax";
import { RequestStory } from "@/components/story/RequestStory";
import { BeforeAfterStory } from "@/components/story/BeforeAfterStory";
import { SolutionShowcase, type ShowcaseItem } from "@/components/story/SolutionShowcase";
import { CircleWipe, ZoomOutro } from "@/components/story/Transitions";
import { FeatureExplorer, type ExplorerItem } from "@/components/home/FeatureExplorer";
import { Avatar, Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Accordion } from "@/components/motion/Accordion";
import { CountUp } from "@/components/motion/CountUp";
import { Spotlight } from "@/components/motion/Spotlight";
import { Typewriter } from "@/components/motion/Typewriter";
import { plans } from "@/components/templates/Templates";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPage } from "@/content/registry";
import { labelFor } from "@/content/manifest";
import type { VisualKind } from "@/content/types";
import { site } from "@/lib/site";
import { titleCase } from "@/lib/titleCase";
import { standaloneFaqs } from "@/content/standaloneFaqs";

export const metadata: Metadata = {
  title: { absolute: "ZapBuzzer | Internal Request CRM for Offices" },
  description:
    "One tap for coffee, prints, IT help, facilities and courier pickups. ZapBuzzer routes it to the right team; the first to accept owns it. Every job is timed.",
  alternates: { canonical: "/" },
  openGraph: { title: "ZapBuzzer | One Tap. Everyone Who Needs to Know, Knows.", url: "/" },
};

// Post-hero copy is written independently of zapbuzzer.com: same facts, new wording.

const journey = [
  {
    t: "Choose and Send",
    d: "Open the catalogue and pick what you need: a coffee, a print job, help from IT. Add a note, say where it should go, and send it off.",
    icon: "bolt" as IconName,
  },
  {
    t: "The Right People Hear About It",
    d: "Everyone on the responsible team is alerted together through the app, Telegram, WhatsApp and email, and the alert keeps repeating until somebody responds.",
    icon: "users" as IconName,
  },
  {
    t: "The First to Accept Takes It",
    d: "The first available person to accept becomes the owner. You see who it is and when to expect them, and you rate the job once it arrives.",
    icon: "target" as IconName,
  },
];

const lifecycleStages = [
    ["Ask", "One tap, on the web or the app", "bolt"],
    ["Route", "Sent to the team responsible", "workflow"],
    ["Claim", "The first to accept owns it", "target"],
    ["Clock", "A deadline and an ETA start", "clock"],
    ["Hand Over", "Delivery confirmed, with a photo if needed", "check"],
    ["Score", "A rating that feeds the scorecard", "chart"],
  ] as [string, string, IconName][];

const explorerTabs = ["Everything", "Asking", "Alerts & Deadlines", "Oversight"];
const explorer: ExplorerItem[] = [
  { title: "Pantry Catalog", body: "Teas, coffees, juices, snacks and dry fruits laid out like a menu, so a regular order needs a single tap.", href: "/solutions/pantry/pantry-catalog", icon: "sparkles", tab: "Asking", meta: "Pantry" },
  { title: "Print Room", body: "Attach a PDF, choose how many copies and whether they’re in colour, and the prints are carried to you.", href: "/solutions/print-room", icon: "layers", tab: "Asking", meta: "Print" },
  { title: "IT Support", body: "A freezing AC, a frozen projector or a missing HDMI cable goes straight to the team that can sort it out.", href: "/solutions/it-support", icon: "workflow", tab: "Asking", meta: "IT" },
  { title: "Multi-Channel Notifications", body: "Alerts arrive in the app, on Telegram, on WhatsApp and by email at the same time, and keep coming until someone accepts.", href: "/notifications/multi-channel-notifications", icon: "bolt", tab: "Alerts & Deadlines", meta: "Pro" },
  { title: "First-Accept-Wins", body: "The whole team sees the request. The first person to accept takes it on, so nobody assumes someone else has it.", href: "/features/first-accept-wins", icon: "target", tab: "Alerts & Deadlines", meta: "Core" },
  { title: "SLA & Escalation", body: "Each request carries a due time. When it slips past, a manager is pulled in automatically.", href: "/sla-and-escalation", icon: "clock", tab: "Alerts & Deadlines", meta: "Pro" },
  { title: "Analytics", body: "Learn who responds quickest, who earns the best ratings and which hours keep your teams busiest.", href: "/analytics", icon: "chart", tab: "Oversight", meta: "Pro" },
  { title: "Roles & Permissions", body: "Set what each role can see and do, keep a record of every action, and show spending to the owner only.", href: "/administration/roles-and-permissions", icon: "shield", tab: "Oversight", meta: "Pro" },
];

const marquee = [
  ["☕", "Pantry", "Brews, snacks & team lunches", "/solutions/pantry"],
  ["🖨️", "Print Room", "Copies and colour, delivered", "/solutions/print-room"],
  ["💻", "IT Support", "Screens, cables & devices", "/solutions/it-support"],
  ["❄️", "Facilities", "Climate, rooms & repairs", "/solutions/facilities"],
  ["📦", "Courier & Reception", "Parcels, pickups & visitors", "/solutions/courier-and-reception"],
];

const programs: { path: string; visual: VisualKind; icon: IconName }[] = [
  { path: "solutions/pantry", visual: "catalog", icon: "sparkles" },
  { path: "solutions/print-room", visual: "print-job", icon: "layers" },
  { path: "solutions/it-support", visual: "request-dashboard", icon: "workflow" },
  { path: "solutions/facilities", visual: "sla-timer", icon: "clock" },
  { path: "solutions/courier-and-reception", visual: "audit-log", icon: "mail" },
];

const spotlightsData: Record<
  string,
  {
    imageSrc: string;
    imageAlt: string;
    imageBadge: string;
    hubTag: string;
    statusText: string;
    stats: { label: string; value: string; sub?: string; highlight?: boolean }[];
    activeRequest: {
      icon: string;
      title: string;
      destination: string;
      owner: string;
      timing: string;
      status: "live" | "delivered" | "in-progress";
    };
  }
> = {
  "solutions/pantry": {
    imageSrc: "/images/pantry-operations.webp",
    imageAlt: "A barista in an apron pulling an espresso shot at an office coffee bar, under a menu board listing espresso, flat white and chai",
    imageBadge: "Live Pantry Fulfillment & Barista Hub",
    hubTag: "Pantry · Real-Time Queue",
    statusText: "Operational",
    stats: [
      { label: "Pilot Avg Accept", value: "32s", sub: "96% on-time delivery", highlight: true },
      { label: "Phone Calls", value: "−87%", sub: "pilot offices, first month" },
      { label: "Avg Staff Rating", value: "4.8★", sub: "Arjun (Pantry Team)" },
    ],
    activeRequest: {
      icon: "☕",
      title: "2× Black Coffee (One Less Sugar)",
      destination: "Boss Cabin · Aarav",
      owner: "Arjun (Accepted in 12s)",
      timing: "ETA 3 min",
      status: "in-progress",
    },
  },
  "solutions/print-room": {
    imageSrc: "/images/print-room-operations.webp",
    imageAlt: "A print room attendant checking freshly printed, spiral-bound colour reports beside a row of office printers",
    imageBadge: "Color Laser & Document Finishing Bay",
    hubTag: "Print Room · High-Speed Duplex",
    statusText: "Active Job",
    stats: [
      { label: "Routing", value: "Whole Team", sub: "first-accept-wins", highlight: true },
      { label: "Active Deck", value: "24 Copies", sub: "Colour Duplex · Stapled" },
      { label: "Delivery Target", value: "Desk 4B", sub: "Kavya (Sales Lead)" },
    ],
    activeRequest: {
      icon: "📄",
      title: "Quarterly Pitch Deck · 24 Pgs Colour",
      destination: "Meeting Rm 1 · Kavya",
      owner: "Suresh (Print Specialist)",
      timing: "Printed & Bound",
      status: "live",
    },
  },
  "solutions/it-support": {
    imageSrc: "/images/it-support-operations.webp",
    imageAlt: "An IT support technician plugging a cable into a desk docking station while a colleague at a dual-monitor workstation looks on",
    imageBadge: "Rapid IT Hardware & Desk Support",
    hubTag: "IT Desk · Instant Dispatch",
    statusText: "Dispatched",
    stats: [
      { label: "Routing", value: "Auto", sub: "auto-routed to IT", highlight: true },
      { label: "HDMI Delivered", value: "3 min", sub: "Tanvi (Design)" },
      { label: "Overdue", value: "Auto-Escalates", sub: "Priya (IT Desk)" },
    ],
    activeRequest: {
      icon: "💻",
      title: "Dual Display HDMI Cable & Adapter",
      destination: "Design Bay · Tanvi",
      owner: "Priya (IT Desk)",
      timing: "Delivered in 3m",
      status: "delivered",
    },
  },
  "solutions/facilities": {
    imageSrc: "/images/facilities-operations.webp",
    imageAlt: "A facilities technician adjusting a meeting room’s AC on a wall-mounted climate control panel, holding a tablet with a floor plan",
    imageBadge: "Smart HVAC & Facilities Control",
    hubTag: "Facilities · SLA Escalation",
    statusText: "Regulated",
    stats: [
      { label: "SLA Deadline", value: "15 min", sub: "manager auto-escalate", highlight: true },
      { label: "Room Climate", value: "22.5°C", sub: "Conference Room B" },
      { label: "Action Owner", value: "Deepak", sub: "Admin Head" },
    ],
    activeRequest: {
      icon: "❄️",
      title: "Conference Room AC Regulation (16°C Reset)",
      destination: "Conf Room B · Om",
      owner: "Deepak (Facilities)",
      timing: "SLA Active · 11m left",
      status: "live",
    },
  },
  "solutions/courier": {
    imageSrc: "/images/courier-reception-operations.webp",
    imageAlt: "A receptionist scanning the barcode on an incoming parcel at the front desk, with other courier packages stacked behind her",
    imageBadge: "Front-Desk Mailroom & Parcel Hub",
    hubTag: "Reception · Audit Log",
    statusText: "Audit-Trailed",
    stats: [
      { label: "Request", value: "Courier Pickup", sub: "mailroom pinged", highlight: true },
      { label: "Pickup", value: "Logged", sub: "Mailroom notified" },
      { label: "Audit Trail", value: "Recorded", sub: "Neha (Reception)" },
    ],
    activeRequest: {
      icon: "📦",
      title: "Urgent Client Parcel Arrived at Gate",
      destination: "Ops Bay · Desk 2A",
      owner: "Neha (Logged & Notified)",
      timing: "Awaiting Handover",
      status: "live",
    },
  },
};

/** Six everyday moments, told as need → what happened. */
const moments = [
  { n: "Aarav", r: "CEO", need: "Halfway through a board call, Aarav sends a coffee order to the Boss Cabin.", then: "The pantry team gets it on Telegram, and Arjun has accepted within 12 seconds.", h: "/workflows/coffee-request", icon: "sparkles" as IconName },
  { n: "Kavya", r: "Sales", need: "Ten minutes before a pitch, Kavya uploads her deck and asks for 24 colour copies.", then: "The print room picks the job up and the copies reach her before the demo begins.", h: "/workflows/print-request", icon: "layers" as IconName },
  { n: "Om", r: "Engineer", need: "The conference-room AC is jammed at 16°C, so Om raises a facilities request.", then: "Deepak is alerted, and if the fix takes longer than 15 minutes, it moves up to a manager.", h: "/workflows/ac-issue", icon: "clock" as IconName },
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


const delay = (i: number, cols = 3) => ({ ["--reveal-delay" as string]: `${(i % cols) * 0.08}s` }) as React.CSSProperties;

/** Pinned solution showcase: copy from each solution page, photo + live request from spotlightsData. */
const showcaseItems: ShowcaseItem[] = programs.flatMap((p) => {
  const page = getPage(p.path);
  const spot = spotlightsData[p.path];
  if (!page || !spot) return [];
  const feat = page.sections.find((s) => s.type === "features");
  return [
    {
      label: labelFor(p.path),
      href: `/${p.path}`,
      lead: page.lead,
      caps: feat && feat.type === "features" ? feat.items.slice(0, 4).map((x) => x.title) : [],
      img: spot.imageSrc,
      alt: spot.imageAlt,
      chip: { icon: spot.activeRequest.icon, title: spot.activeRequest.title, meta: spot.activeRequest.destination },
    },
  ];
});

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
      <section className="relative -mt-[72px] overflow-hidden bg-bg pb-[340px] pt-[104px] sm:pb-[440px] sm:pt-[120px] lg:pb-[490px] lg:pt-[132px]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          {/* Light-mode backdrop (hidden in dark mode) */}
          <div className="hero-light-bg absolute inset-0 dark:hidden">
            <div className="dots right-[3%] top-[18%] h-56 w-56" />
          </div>
          {/* Full-hero 3D stage: machined request discs orbiting the ZapBuzzer bell */}
          <HeroDiscs className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-bg to-transparent" />
        </div>
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-4xl">
            <div data-scroll3d="recede">
            <HeroParallax className="space-y-4 text-center sm:space-y-5">
              <div className="z-depth-3 inline-block">
                <Eyebrow>One tap. Everyone who needs to know, knows.</Eyebrow>
              </div>
              <div className="z-depth-2 space-y-3">
                <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
                  <Typewriter text="Stop Calling the Pantry Boy Three Times for One Coffee." highlight="One Coffee." cursor />
                </h1>
                <p className="text-xl font-semibold text-accent-text sm:text-2xl">{titleCase(site.tagline)}</p>
              </div>
              <p className="z-depth-1 mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                ZapBuzzer turns every internal office request (coffee, prints, IT help, facilities, courier pickups) into a single tap.
                Routed to the right team. Accepted by whoever’s free first. Delivered with a timer running. No more chase calls.
              </p>
              <div className="z-depth-3 flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <Button href={site.app.signUp} className="w-full sm:w-auto">Start free 14-day trial</Button>
                <Button href={site.app.demo} variant="secondary" className="w-full sm:w-auto" lead={<Icon name="play" className="h-5 w-5" />}>Try the demo</Button>
              </div>
              <ul className="z-depth-1 flex flex-wrap justify-center gap-4 pt-4 text-xs font-medium text-muted sm:text-sm md:gap-6">
                {["No Credit Card", "No Setup Call", "Up and Running in an Afternoon"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.6} />
                    {t}
                  </li>
                ))}
              </ul>
            </HeroParallax>
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
                  className="group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-glass px-4 py-2.5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                >
                  <span className="text-lg transition-transform group-hover:scale-110 sm:text-xl" aria-hidden>{e}</span>
                  <span className="flex flex-col text-left">
                    <span className="flex items-center gap-1.5">
                      <span className="font-heading text-xs font-bold transition-colors group-hover:text-accent-text sm:text-sm">{t}</span>
                      <Icon name="arrowRight" className="h-3.5 w-3.5 -translate-x-1 text-accent opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="text-[11px] font-semibold text-accent-text">{d}</span>
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
            eyebrow="Inside a Working Day"
            title="Six Requests, Six People, Zero Chasing"
            intro="Six people with different jobs and different needs, all using the same one-tap request. Here’s how each one went."
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
                <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight sm:text-3xl">The Numbers After Month One</h2>
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

      {/* ───────── One request, start to finish (pinned) ───────── */}
      <section className="bg-surface">
        <RequestStory />
      </section>

      {/* ───────── How a request travels ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="How a Request Travels"
            title="From Tap to Rating in Six Stages"
            intro="Every request follows the same path, with a clear owner at each step. That’s why nothing gets lost and everything can be measured."
          />
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycleStages.map(([t, d, ic], i) => (
              <li
                key={t}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 0.07}s` } as React.CSSProperties}
                className="glass-panel group relative flex flex-col items-center rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet text-white shadow-[0_10px_20px_-10px_oklch(56%_0.2_277/0.8)] transition-transform duration-300 group-hover:scale-110">
                  <Icon name={ic} className="h-5 w-5" />
                </span>
                <h3 className="font-heading font-bold">{t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>

          {/* The first three stages, explained */}
          <div className="eq-titles mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {journey.map((s, i) => (
              <div key={s.t} data-reveal style={delay(i)} className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent-soft p-6">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold">
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
      <BeforeAfterStory />
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div data-reveal className="glass-panel flex flex-col justify-between rounded-3xl p-6 sm:p-7 lg:col-span-7">
              <div>
                <h3 className="font-heading text-xl font-bold">Why the Phone Version Fails</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                  A spoken order lives only in someone’s memory. If that person forgets or steps away, the request is gone, and the person who
                  asked has to keep checking. Print requests get lost in group chats and IT problems sit unread in private messages for the same reason:
                  nobody has clearly taken them on.
                </p>
              </div>
              <figure className="mt-5 rounded-2xl border border-line bg-surface-2/60 p-4 sm:p-5">
                <blockquote className="text-sm font-medium italic leading-relaxed text-fg/90">
                  “The office runs quieter. Nobody’s shouting names down the hall. Coffee arrives before anyone asks twice.”
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-3">
                  <Avatar name="Aarav Sharma" size="h-10 w-10 text-sm" src="/images/avatar-aarav.webp" alt="Aarav Sharma, Founder & CEO at Acme HQ" />
                  <div>
                    <span className="block font-heading text-xs font-bold sm:text-sm">Aarav Sharma</span>
                    <span className="block text-[11px] font-semibold text-accent-text">Founder & CEO, Acme HQ (Pune)</span>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div data-reveal style={delay(1)} className="group relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-4 shadow-xl lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/10]">
                <Image
                  src="/images/quiet-office-contrast.webp"
                  alt="A staff member quietly setting a cup of coffee on an employee’s desk in a bright, plant-filled open office"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/75 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    The Quiet Office
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 font-mono text-[11px] text-white/80 backdrop-blur-md">
                    Zero Phone Tag
                  </span>
                </div>
              </div>
              <p className="mt-3 px-1 text-xs leading-relaxed text-muted">
                ZapBuzzer replaces hallway shouting, lost WhatsApp chats and repeat phone calls with requests that each have a named owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Capabilities explorer ───────── */}
      <section className="relative overflow-hidden bg-surface py-10 sm:py-12 md:py-14">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[320px] w-[550px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container-x relative z-10">
          <SectionHeading eyebrow="Capabilities" title="What’s Inside the Platform" intro="Filter by what you want to do: ask for something, stay on top of alerts and deadlines, or keep an eye on how the office runs." />
          <FeatureExplorer tabs={explorerTabs} items={explorer} />
        </div>
      </section>

      {/* ───────── Solution showcase (pinned) ───────── */}
      <section className="bg-surface-2/50">
        <SolutionShowcase items={showcaseItems} />
      </section>

      {/* ───────── Principles ───────── */}
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="Our Principles" title="Three Ideas Behind the Product" />
          <div className="eq-titles grid grid-cols-1 gap-5 md:grid-cols-3">
            {(
              [
                ["Shaped Around Real Office Work", "Pantry, print room, IT, facilities and courier each get their own setup. It isn’t a generic task list.", "building"],
                ["Works Without Setup", "The first person to accept owns the request, timers start on their own and late requests go to a manager automatically, from day one.", "bolt"],
                ["Fair to the People Doing the Work", "Staff get credit for every job they finish and are judged on scorecards, not on who chased them.", "users"],
              ] as [string, string, IconName][]
            ).map(([t, d, ic], i) => (
              <div key={t} data-reveal style={delay(i)}>
                <Spotlight className="glass-panel card-fx group flex h-full flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-2">
                  <div className="relative z-[2]">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:bg-accent group-hover:text-white">
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
                ["Four channels, one alert", "App, Telegram, WhatsApp and email go off together and keep repeating until the request is picked up.", "bolt", "/notifications/multi-channel-notifications"],
                ["One request, one owner", "The first person to tap Accept owns it, not a vague “someone”.", "target", "/features/first-accept-wins"],
                ["A due time on everything", "Each request has a deadline, and a manager steps in automatically when it slips.", "clock", "/sla-and-escalation"],
                ["Visibility for invisible work", "See response times, on-time delivery and ratings for work that nobody used to measure.", "chart", "/analytics"],
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
          <SectionHeading eyebrow="Who Uses It" title="Built for Every Desk That Asks or Answers" intro="From small studios to multi-floor headquarters, more than 200 offices across 14 cities now handle their requests this way." />
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
            <div className="eq-titles grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
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

      {/* ───────── Cinematic wipe into the dark mobile section ───────── */}
      <CircleWipe eyebrow="Beyond the Desk" title="Wherever Your Team Is, the Request Finds Them." />

      {/* ───────── Mobile ───────── */}
      <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-fuchsia/20" aria-hidden />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-12">
          <div data-reveal className="space-y-5 lg:col-span-7">
            <Eyebrow invert>On the move</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Your Team, Reachable Wherever They Are</h2>
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
            <Button href="/mobile-app/android-app" variant="light">Android App</Button>
          </div>
          <div data-reveal className="anim-float lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/mobile-app-workplace.webp"
                  alt="An employee smiling at a notification on his phone while walking down a glass-walled office corridor"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/75 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Android APK v1.16.0 · Rings on Silent & Lock</span>
                </div>
              </div>
              <div className="mt-3.5 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="phone" className="h-4 w-4 text-accent-2" />
                  <span>Push Notification Priority: <strong className="text-white">High (Overrides DND)</strong></span>
                </div>
                <span className="font-mono text-[11px] text-accent-2 font-bold">61 MB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Enterprise ───────── */}
      <section className="bg-surface py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Enterprise"
            title="Scaling to Groups and Facility Operators"
            intro="Larger organisations can let staff sign in with their company login (SSO and SAML) and run ZapBuzzer under their own brand and domain. They also get a REST API with webhooks, a named customer success manager and the option to host it on their own servers."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["enterprise/security", "enterprise/multi-location", "integrations/sso-and-saml", "developers/api-documentation"] as const).map((path, i) => {
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
            <Button href="/enterprise/enterprise-rollout" variant="secondary">Enterprise Rollout</Button>
          </div>
        </div>
      </section>

      {/* ───────── Customer voices ───────── */}
      <section className="bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="In Their Words" title="What Changed, According to the People Using It" />
          <div className="eq-titles grid grid-cols-1 gap-5 md:grid-cols-3">
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
          <SectionHeading eyebrow="Plans" title="Simple Per-Seat Pricing" intro="You only pay for the seats you use and can stop at any time. There are no setup fees and no consultants, and most offices are live the same afternoon." />
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
                <Link href={p.more} className="tap mt-3 text-center text-sm font-semibold text-accent-text hover:underline">What’s in {p.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <SectionHeading eyebrow="Questions" title="Before You Sign Up" />
          <Accordion items={standaloneFaqs["/"]} numbered />
        </div>
      </section>

      {/* ───────── Closing band ───────── */}
      <ZoomOutro>
        <div className="container-x relative z-10">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div data-reveal className="space-y-5 text-center lg:col-span-7 lg:text-left">
              <Eyebrow tone="onBrand">Ready when you are</Eyebrow>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Give Your Office Requests an Owner and a Clock.</h2>
              <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Try ZapBuzzer free for 14 days. You won’t need a card or an onboarding call. Open a workspace, invite your colleagues and the requests will go to the right people on their own.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href={site.app.signUp} variant="light" className="w-full sm:w-auto">Open a free workspace</Button>
                <Button href="/book-a-demo" variant="ghost-dark" className="w-full sm:w-auto">Book a Demo</Button>
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
      </ZoomOutro>
    </>
  );
}
