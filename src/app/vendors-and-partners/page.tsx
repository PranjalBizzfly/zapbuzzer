import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHero, Band, InfoCard } from "@/components/company/CompanyHero";
import { EnquiryForm } from "@/components/company/EnquiryForm";
import { FAQSection } from "@/components/sections/PageParts";
import { SectionHeading } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/Icon";
import { companyPages } from "@/lib/companyPages";
import { standaloneFaqs } from "@/content/standaloneFaqs";

const page = companyPages.vendors;

export const metadata: Metadata = {
  title: page.label,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: { title: `${page.label} | ZapBuzzer`, description: page.description, url: page.href },
};

const relationships: { icon: IconName; title: string; body: string; examples: string[] }[] = [
  {
    icon: "building",
    title: "Facility Management Companies",
    body: "ZapBuzzer’s Enterprise plan is built for groups and facility companies that run services across many sites. If your teams run pantries, front desks or maintenance for client offices, ZapBuzzer can give each client its own way to send requests, while your people answer them all from one queue.",
    examples: ["Multi-location workspaces for client sites", "Your own branding and domain (white-label) on Enterprise", "SLA timers and escalation your clients can see"],
  },
  {
    icon: "layers",
    title: "Office Service Providers",
    body: "Pantry suppliers, print and reprographics vendors, courier desks and IT field-support firms already do the work behind most office requests. Requests in ZapBuzzer arrive with a destination, a note and a timer, which makes for a clearer hand-off than a phone call.",
    examples: ["Pantry and catering operators", "Print room and reprographics teams", "Courier, mailroom and reception services"],
  },
  {
    icon: "workflow",
    title: "Implementation and Rollout Help",
    body: "Some organisations want a local hand to set up catalogues, roles and escalation rules across floors and cities. If you advise offices on workplace operations, we would like to hear how you would roll ZapBuzzer out for your clients.",
    examples: ["Catalogue and category setup", "Roles, permissions and escalation design", "Staff onboarding on the mobile app"],
  },
  {
    icon: "grid",
    title: "Technology and Integration",
    body: "REST API and webhooks are available on Enterprise. If you build workplace software and see a fit, tell us what you want to connect and why. We will be honest about what is and is not possible today.",
    examples: ["Enterprise REST API and webhooks", "SSO and SAML for larger rollouts", "Option to host on your own servers (on-premise)"],
  },
];

const steps = [
  { title: "Send an Enquiry", body: "Use the form on this page. Tell us who you are, what you do for offices and which kind of relationship you have in mind." },
  { title: "We Reply Within One Business Day", body: "Someone from the team answers from hello@zapbuzzer.com, either with questions or to set up a call." },
  { title: "Discovery Call", body: "We talk through your clients, the services you run, the cities you cover and where requests get lost today." },
  { title: "Try It on a Real Floor", body: "Every partner conversation starts with the product itself. Open a free workspace (up to 10 staff, one location) or a 14-day Pro trial and run real requests." },
  { title: "Agree the Shape of the Work", body: "If there is a fit, we agree in writing what each side does, how clients are supported and how commercial terms work." },
];

const expectations: { ours: string; yours: string }[] = [
  { ours: "Straight answers on what the product does today, and what it does not", yours: "A clear description of your services, team and the offices you work with" },
  { ours: "Access to a trial workspace so you can test with your own staff", yours: "Willingness to run a real pilot before anything is announced" },
  { ours: "A named contact for the conversation and replies within one business day", yours: "One point of contact on your side who can make decisions" },
  { ours: "Respect for your clients’ data and confidentiality", yours: "The same respect for the offices and staff who use ZapBuzzer" },
];

const requirements = [
  "You provide services to offices, or software and advice for workplace operations.",
  "You can describe the offices or sites you serve (size, cities, services) without sharing confidential client details.",
  "You are willing to try ZapBuzzer hands-on before proposing anything to clients.",
  "You will not present yourself as an official ZapBuzzer partner unless that has been agreed with us in writing.",
  "You agree to follow our brand guidelines on the Press Kit page if you mention ZapBuzzer publicly.",
];


export default function VendorsPage() {
  return (
    <>
      <CompanyHero
        crumbs={[{ href: "/", label: "Home" }, { href: page.href, label: page.label }]}
        eyebrow={page.label}
        title="Work With Us on Quieter Offices"
        lead="ZapBuzzer helps offices route pantry, print, IT, facilities and courier requests to the people who handle them. If you are one of those people, or you serve offices for a living, we would like to talk."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#enquiry" className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover">
            Send a vendor enquiry <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <Link href="/enterprise" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/15">
            Enterprise
          </Link>
        </div>
      </CompanyHero>

      <Band>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading center={false} eyebrow="Where We Stand" title="No Programme Yet. Real Conversations." typewriter={false} />
          </div>
          <div data-reveal className="space-y-4 text-[17px] leading-relaxed text-muted lg:col-span-7">
            <p>
              ZapBuzzer started in a Pune office that was tired of phone tag, and we are building the internal-request CRM that office wished it had. We do not have a published partner programme, a reseller price list or a certification track, and we will not pretend we do.
            </p>
            <p>
              What we do have is a product that already sits between offices and the people who serve them. Every request in ZapBuzzer has a requester, a destination, a team that gets pinged, an owner who accepts it, a timer and a rating. Facility companies and service vendors are often the ones on the receiving end of those requests.
            </p>
            <p>
              This page explains the kinds of relationships we are open to, what we expect from each other and how to start. If something here fits what you do, the form at the bottom goes straight to our inbox.
            </p>
          </div>
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Collaboration" title="Relationships We Are Open To" intro="Four kinds of organisations tend to find a fit. If you do not see yours, write to us anyway." />
        <div className="grid gap-5 md:grid-cols-2">
          {relationships.map((r) => (
            <div key={r.title} data-reveal className="glass-panel flex flex-col rounded-2xl p-6 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-text">
                <Icon name={r.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.body}</p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                {r.examples.map((e) => (
                  <li key={e} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Enterprise capabilities mentioned above are described on the <Link href="/enterprise" className="font-semibold text-accent-text hover:underline">Enterprise</Link> page and in <Link href="/pricing" className="font-semibold text-accent-text hover:underline">pricing</Link>.
        </p>
      </Band>

      <Band>
        <SectionHeading eyebrow="Onboarding" title="How a Vendor Conversation Works" intro="Five steps, starting with a short enquiry and a real trial rather than a slide deck." />
        <ol className="grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="glass-panel relative rounded-2xl p-5">
              <span className="font-heading text-3xl font-extrabold text-accent/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Expectations" title="What Each Side Brings" typewriter={false} />
            <div data-reveal className="overflow-hidden rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-2 text-xs uppercase tracking-wider text-muted">
                  <tr><th scope="col" className="p-4">From ZapBuzzer</th><th scope="col" className="p-4">From You</th></tr>
                </thead>
                <tbody>
                  {expectations.map((e) => (
                    <tr key={e.ours} className="border-t border-line bg-surface align-top">
                      <td className="p-4">{e.ours}</td>
                      <td className="p-4">{e.yours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Requirements" title="Before You Get in Touch" typewriter={false} />
            <ul data-reveal className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="glass-panel flex gap-3 rounded-xl p-4 text-[15px]">
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Band id="enquiry">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading center={false} eyebrow="Vendor Enquiry" title="Tell Us About Your Work" typewriter={false} />
            <div className="space-y-4">
              <InfoCard title="What Happens Next">We reply from hello@zapbuzzer.com within one business day, usually with a few questions or a suggested call time.</InfoCard>
              <InfoCard title="Want to See the Product First?">
                Open a <a href="https://zapbuzzer.com/sign-in?demo=1" className="font-semibold text-accent-text hover:underline">read-only demo</a> or read <Link href="/how-it-works" className="font-semibold text-accent-text hover:underline">how it works</Link>.
              </InfoCard>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm
              subject="Vendor / partner enquiry"
              submitLabel="Send Vendor Enquiry"
              fields={[
                { name: "name", label: "Your Name", required: true, autoComplete: "name" },
                { name: "email", label: "Work Email", type: "email", required: true, autoComplete: "email" },
                { name: "phone", label: "Phone Number", type: "phone", required: true },
                { name: "company", label: "Company", required: true, autoComplete: "organization" },
                { name: "website", label: "Company Website", type: "url", placeholder: "https://", autoComplete: "url" },
                { name: "type", label: "Relationship Type", type: "select", required: true, options: ["Facility management company", "Office service provider (pantry, print, courier, IT)", "Implementation / workplace consultant", "Technology / integration", "Other"] },
                { name: "cities", label: "Cities or Regions You Serve", placeholder: "e.g. Pune, Mumbai" },
                { name: "message", label: "What Do You Have in Mind?", type: "textarea", required: true, minLength: 30, placeholder: "Who you serve, what services you run and how you see ZapBuzzer fitting in." },
              ]}
            />
          </div>
        </div>
      </Band>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs.vendors} about="working with ZapBuzzer as a vendor or partner" /></div>
      </section>
    </>
  );
}
