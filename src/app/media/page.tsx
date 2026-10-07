import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHero, Band, InfoCard } from "@/components/company/CompanyHero";
import { EnquiryForm } from "@/components/company/EnquiryForm";
import { FAQSection } from "@/components/sections/PageParts";
import { SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { companyPages } from "@/lib/companyPages";
import { standaloneFaqs } from "@/content/standaloneFaqs";
import { site } from "@/lib/site";

const page = companyPages.media;

export const metadata: Metadata = {
  title: page.label,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: { title: `${page.label} | ZapBuzzer`, description: page.description, url: page.href },
};

const facts: [string, string][] = [
  ["Company", "ZapBuzzer"],
  ["What it is", "An internal-request CRM for offices"],
  ["Based in", site.location],
  ["Origin", "Founded in a Pune office tired of phone tag"],
  ["Product", "Web app and Android app"],
  ["Plans", "Free, Pro (₹99 per seat per month) and Enterprise (custom pricing)"],
  ["Trial", "14 days free, no credit card"],
  ["Website", "zapbuzzer.com"],
  ["Contact", site.email],
];

const figures = [
  { value: "200+", label: "Offices Onboarded" },
  { value: "1.2M", label: "Requests Routed" },
  { value: "14", label: "Cities" },
  { value: "99.9%", label: "Uptime" },
];

const pilot = [
  { value: "32s", label: "Average Accept Time" },
  { value: "96%", label: "On-Time Delivery" },
  { value: "−87%", label: "Phone Calls" },
  { value: "4.8★", label: "Average Staff Rating" },
];

/** Verified announcements only. Add an entry when something is officially released. */
const announcements = [
  {
    title: "ZapBuzzer Android App Available",
    body: "The ZapBuzzer Android app is available as a direct APK download, version 1.16.0 (build 48). It rings through even when the phone is on silent or locked, and lets staff accept and track requests on the move.",
    href: "/mobile-app/android-app",
    cta: "Android App Details",
  },
];

const topics = [
  { title: "The Cost of Office Phone Tag", body: "Why a request for two coffees can take 25 minutes and three phone calls, and what changes when it takes one tap." },
  { title: "Internal Requests as a CRM Problem", body: "Why pantry, print, IT, facilities and courier requests need an owner, a timer and a rating like any customer ticket." },
  { title: "Fair Credit for Support Staff", body: "How crediting each job to a named person, plus scorecards, changes the way office staff are seen and treated." },
  { title: "First-Accept-Wins", body: "Why sending a request to the whole team and letting the first free person own it beats assigning by rota." },
];


export default function MediaPage() {
  return (
    <>
      <CompanyHero
        crumbs={[{ href: "/", label: "Home" }, { href: page.href, label: page.label }]}
        eyebrow={page.label}
        title="ZapBuzzer for Journalists"
        lead="Company information, verified figures, announcements and the right contact for media enquiries. Looking for logos and brand files? Those live in the Press Kit."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#media-enquiry" className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover">
            Media enquiry <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <Link href="/press-kit" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/15">
            Press Kit
          </Link>
        </div>
      </CompanyHero>

      <Band>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <SectionHeading center={false} eyebrow="Company Overview" title="About ZapBuzzer" typewriter={false} />
            <div data-reveal className="space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                ZapBuzzer is an internal-request CRM for offices: software that tracks the requests people make inside an office, from start to finish. It replaces the shouting, phone calls and WhatsApp groups that offices use to ask for coffee, prints, IT help, facilities fixes and courier pickups.
              </p>
              <p>
                The company was founded in a Pune office that was tired of phone tag: three calls for one coffee, print jobs lost in a WhatsApp group, IT tickets dying in someone’s DMs. Its stated mission is “building the quiet office.”
              </p>
              <p>
                The product works in three steps. An employee taps what they need and picks a destination such as the boss cabin. The right team is pinged on the app, Telegram, WhatsApp and email, repeatedly, until someone accepts. The first person to accept owns the request, and the requester sees their name, photo and ETA, then rates the work when it is delivered.
              </p>
              <p>
                Every request is timed. Overdue requests are passed up (escalated) to a manager, and analytics and scorecards show response times and ratings. ZapBuzzer is sold per seat, with a free plan for one location and up to 10 staff, a Pro plan at ₹99 per seat per month, and custom-priced Enterprise plans for groups and facility companies.
              </p>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-5">
        <div data-reveal className="glass-panel mt-6 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold">Fact Sheet</h3>
              <dl className="mt-4 divide-y divide-line text-sm">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-2.5 sm:grid-cols-[110px_minmax(0,1fr)]">
                    <dt className="font-medium text-muted">{k}</dt>
                    <dd className="min-w-0 [overflow-wrap:anywhere]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Verified Figures" title="Numbers You Can Quote" intro="These are the figures ZapBuzzer publishes on zapbuzzer.com. Please keep the context with each set." />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { title: "Company", note: "As published on zapbuzzer.com.", items: figures },
            { title: "Pilot Offices, First Month", note: "Results from pilot offices during their first month on ZapBuzzer.", items: pilot },
          ].map((g) => (
            <div key={g.title} data-reveal className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold">{g.title}</h3>
              <p className="mt-1 text-sm text-muted">{g.note}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {g.items.map((f) => (
                  <div key={f.label} className="rounded-xl bg-surface-2 p-4 text-center">
                    <div className="font-heading text-2xl font-extrabold text-accent-text">{f.value}</div>
                    <div className="mt-1 text-xs text-muted">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <SectionHeading center={false} eyebrow="Announcements" title="Latest From ZapBuzzer" typewriter={false} />
            <div className="flex flex-1 flex-col gap-4 [&>*]:flex-1">
              {announcements.map((a) => (
                <div key={a.title} data-reveal className="glass-panel rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.body}</p>
                  <Link href={a.href} className="tap mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline">
                    {a.cta} <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SectionHeading center={false} eyebrow="Press Coverage" title="In the News" typewriter={false} />
            <div data-reveal className="glass-panel flex-1 rounded-2xl p-6 text-[15px] leading-relaxed text-muted">
              <p>We do not list any press coverage yet. When ZapBuzzer is covered by a publication, the article will be linked here.</p>
              <p className="mt-3">Writing about ZapBuzzer? Send us the link once it is published and we will add it.</p>
            </div>
          </div>
        </div>
        <div data-reveal className="glass-panel mt-6 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold">Story Angles We Can Speak To</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
                {topics.map((t) => (
                  <li key={t.title} className="text-sm">
                    <span className="font-semibold">{t.title}.</span> <span className="text-muted">{t.body}</span>
                  </li>
                ))}
              </ul>
            </div>
      </Band>

      <Band alt id="media-enquiry">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading center={false} eyebrow="Media Contact" title="Talk to Us" typewriter={false} />
            <div className="space-y-4">
              <InfoCard title="Email">
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Media enquiry")}`} className="tap font-semibold text-accent-text hover:underline">{site.email}</a>
                <br />Put “Media” in the subject line. We reply within one business day.
              </InfoCard>
              <InfoCard title="Location">{site.location}</InfoCard>
              <InfoCard title="Brand Assets">
                Logos, colours and approved descriptions are in the <Link href="/press-kit" className="font-semibold text-accent-text hover:underline">Press Kit</Link>.
              </InfoCard>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm
              subject="Media enquiry"
              submitLabel="Send Media Enquiry"
              fields={[
                { name: "name", label: "Your Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "phone", label: "Phone Number", type: "phone", required: true },
                { name: "company", label: "Publication or Outlet", required: true, autoComplete: "organization" },
                { name: "type", label: "Request Type", type: "select", required: true, options: ["Interview request", "Comment or quote", "Product walkthrough", "Fact check", "Other"] },
                { name: "deadline", label: "Deadline", placeholder: "e.g. Friday 5 pm IST" },
                { name: "link", label: "Link to Your Previous Work", type: "url", placeholder: "https://" },
                { name: "message", label: "What Is Your Story About?", type: "textarea", required: true, minLength: 30 },
              ]}
            />
          </div>
        </div>
      </Band>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs.media} about="media enquiries" /></div>
      </section>
    </>
  );
}
