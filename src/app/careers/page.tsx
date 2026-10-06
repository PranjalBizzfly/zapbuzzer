import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CompanyHero, Band, InfoCard } from "@/components/company/CompanyHero";
import { EnquiryForm } from "@/components/company/EnquiryForm";
import { FAQSection } from "@/components/sections/PageParts";
import { SectionHeading } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";
import { companyPages } from "@/lib/companyPages";
import { standaloneFaqs } from "@/content/standaloneFaqs";
import { site } from "@/lib/site";

const page = companyPages.careers;

export const metadata: Metadata = {
  title: page.label,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: { title: `${page.label} | ZapBuzzer`, description: page.description, url: page.href },
};

/**
 * Verified open positions. Leave empty unless a role is genuinely open.
 * Each entry renders as a card with an "Apply" link that pre-fills the application form.
 */
const openings: { title: string; team: string; location: string; type: string; summary: string }[] = [];

const values: { icon: IconName; title: string; body: string }[] = [
  { icon: "building", title: "Built for Real Offices", body: "We design for the pantry, the print room, the IT desk, facilities and the courier counter as they actually work, not for an imaginary office in a slide deck." },
  { icon: "bolt", title: "Fast by Default", body: "The first person to accept owns the request, every job has a deadline, and late jobs go to a manager automatically, all from day one. We run our own work the same way: quick turnarounds, clear owners and nothing left waiting." },
  { icon: "users", title: "People-First", body: "Support staff get fair credit and scorecards, not another tool that nags them. The people who make coffee and fix projectors deserve software that respects them." },
];

const areas: { icon: IconName; title: string; body: string }[] = [
  { icon: "grid", title: "Engineering", body: "The web app, the Android app that rings through on silent, multi-channel notifications across app, Telegram, WhatsApp and email, and the timers that keep every request honest." },
  { icon: "sparkles", title: "Product & Design", body: "Making a request take one tap, and making the staff screen clear enough to accept a job in seconds. Most of the job is watching how offices really work." },
  { icon: "compass", title: "Customer Success", body: "Helping offices set up catalogues, roles and escalation in an afternoon, and helping Enterprise customers roll out across floors and cities." },
  { icon: "chart", title: "Sales & Partnerships", body: "Talking to office managers, admin heads and facility companies about the chase calls and lost requests they want to get rid of." },
  { icon: "book", title: "Marketing & Content", body: "Explaining a simple product plainly: guides, comparisons and stories about real office problems, written without hype." },
  { icon: "shield", title: "Operations", body: "Keeping the company itself running smoothly, from finance and hiring to the internal tools we use every day." },
];

const process = [
  { title: "Apply or Introduce Yourself", body: "Apply to a listed role, or send a general application if nothing is listed. Tell us what you want to work on and share links to your work." },
  { title: "We Read Every Application", body: "A person reads it. If there is a possible fit, we reply to set up a first conversation. We aim to reply within one business day to every message." },
  { title: "First Conversation", body: "A short call about you, the work you enjoy and the problem we are solving. Bring your questions too." },
  { title: "A Practical Step", body: "Depending on the role, a conversation about past work or a small, relevant exercise. We keep this proportionate and tell you up front what it involves." },
  { title: "Decision", body: "We tell you clearly either way." },
];


export default function CareersPage() {
  return (
    <>
      <CompanyHero
        crumbs={[{ href: "/", label: "Home" }, { href: page.href, label: page.label }]}
        eyebrow={page.label}
        title="Help Us Build the Quiet Office"
        lead="ZapBuzzer turns “three calls for one coffee” into one tap with an owner, a timer and a rating. We are building it for every office that hates phone tag, and for the staff who keep those offices running."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#openings" className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover">
            See open positions <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <a href="#apply" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/15">
            Send a general application
          </a>
        </div>
      </CompanyHero>

      <Band>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal>
            <SectionHeading center={false} eyebrow="Mission" title="Why We Exist" typewriter={false} />
            <div className="space-y-4 text-[17px] leading-relaxed text-muted">
              <p>ZapBuzzer was founded in a Pune office tired of phone tag: three calls for one coffee, print jobs lost in a WhatsApp group, IT tickets dying in someone’s DMs.</p>
              <p>The fix is simple to describe and hard to build well. Tap what you need, the right team gets pinged on every channel until someone accepts, and the first person to accept owns it. Every request is timed, and the requester rates it when it is done.</p>
              <p>Working here means caring about small moments that happen thousands of times a day: a coffee that arrives hot, a print job that lands before the client sits down, an AC fixed before the meeting starts.</p>
            </div>
            <Link href="/about-us" className="tap mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-text hover:underline">
              Read our story <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift">
            <Image src="/images/careers-team-culture.webp" alt="A product team gathered around a large monitor showing a UX flow, discussing designs at a shared desk in a bright, plant-filled office" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
          </div>
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Culture" title="How We Work" intro="The same three values that shape the product shape how we work together." />
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} data-reveal className="glass-panel rounded-2xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-text"><Icon name={v.icon} className="h-5 w-5" /></span>
              <h3 className="mt-4 font-heading text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Career Areas" title="Where You Could Contribute" intro="These are the kinds of work it takes to build and run ZapBuzzer. They describe areas, not open roles." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} data-reveal className="glass-panel flex gap-4 rounded-2xl p-5">
              <Icon name={a.icon} className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band alt id="openings">
        <SectionHeading eyebrow="Open Positions" title={openings.length ? `${openings.length} open position${openings.length > 1 ? "s" : ""}` : "No Open Positions Right Now"} typewriter={false} />
        {openings.length ? (
          <div className="grid gap-4">
            {openings.map((o) => (
              <div key={o.title} data-reveal className="glass-panel flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted">{o.team} · {o.location} · {o.type}</p>
                  <p className="mt-2 text-[15px] text-muted">{o.summary}</p>
                </div>
                <a href="#apply" className="shrink-0 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">Apply</a>
              </div>
            ))}
          </div>
        ) : (
          <div data-reveal className="glass-panel mx-auto max-w-3xl rounded-2xl p-8 text-center">
            <Icon name="calendar" className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-4 text-[17px] leading-relaxed">
              We are not advertising any roles at the moment. When a position opens, it will be listed here with the team, location and what the job involves.
            </p>
            <p className="mt-3 text-muted">If you would like to work on ZapBuzzer in one of the areas above, send a general application below. We read every one.</p>
          </div>
        )}
      </Band>

      <Band>
        <SectionHeading eyebrow="Hiring Process" title="What Applying Looks Like" />
        <ol className="mx-auto grid max-w-5xl items-start gap-4 md:grid-cols-5">
          {process.map((s, i) => (
            <li key={s.title} data-reveal className="glass-panel rounded-2xl p-5">
              <span className="font-heading text-3xl font-extrabold text-accent/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band alt id="apply">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading center={false} eyebrow="Apply" title="Introduce Yourself" typewriter={false} />
            <div className="space-y-4">
              <InfoCard title="How to Apply">
                Fill in the form. It opens your email app with your application addressed to {site.email}, where you can attach your CV before sending.
              </InfoCard>
              <InfoCard title="Prefer Plain Email?">
                Write to <a href={`mailto:${site.email}?subject=${encodeURIComponent("Careers: general application")}`} className="font-semibold text-accent-text hover:underline">{site.email}</a> with “Careers” in the subject line.
              </InfoCard>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm
              subject="Careers: application"
              submitLabel="Prepare Application Email"
              fields={[
                { name: "name", label: "Full Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "phone", label: "Phone Number", type: "phone", required: true },
                { name: "area", label: "Area of Interest", type: "select", required: true, options: [...openings.map((o) => o.title), ...areas.map((a) => a.title), "Not sure yet"] },
                { name: "location", label: "Current City", autoComplete: "address-level2" },
                { name: "profile", label: "CV, LinkedIn or Portfolio Link", type: "url", required: true, placeholder: "https://", full: true },
                { name: "message", label: "Why ZapBuzzer?", type: "textarea", required: true, minLength: 50, placeholder: "What you want to work on, and what you have done that is relevant." },
              ]}
            />
          </div>
        </div>
      </Band>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs.careers} about="careers at ZapBuzzer" /></div>
      </section>
    </>
  );
}
