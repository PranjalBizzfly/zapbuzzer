import Link from "next/link";
import { site } from "@/lib/site";
import { groups } from "@/content/manifest";
import { Button } from "@/components/ui/primitives";
import { Icon, IconChip } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";

export const plans = [
  {
    name: "Free",
    tagline: "Pilot it on a single floor at no cost",
    price: "₹0",
    unit: "no expiry",
    href: site.app.signUp,
    cta: "Create a Free Workspace",
    features: ["A team of up to 10 people", "One office location", "Web app and Android app", "Alerts by email", "30 days of request history"],
    more: "/pricing/free-plan",
  },
  {
    name: "Pro",
    tagline: "Every team and every floor, fully covered",
    price: "₹99",
    unit: "per seat, monthly",
    href: site.app.signUpPro,
    cta: "Try Pro for 14 Days",
    popular: true,
    features: ["No cap on team size", "Several offices in one account", "Alerts on Telegram and WhatsApp too", "Deadlines with a manager escalation chain", "Complete analytics and staff scorecards", "Audit trail and reporting"],
    more: "/pricing/pro-plan",
  },
  {
    name: "Enterprise",
    tagline: "Built for business groups and facility operators",
    price: "Quoted",
    unit: "to fit your rollout",
    href: "/contact-us",
    cta: "Talk to Our Team",
    features: ["Company sign-in via SSO and SAML", "Your brand on your own domain", "REST API and webhooks", "A named customer success manager", "Option to host on your own servers"],
    more: "/pricing/enterprise-plan",
  },
];

export function PricingCards() {
  return (
    <div>
      <div className="grid gap-6 pt-3 lg:grid-cols-3 lg:items-stretch">
        {plans.map((p, i) => (
          <div
            key={p.name}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 0.08}s` } as React.CSSProperties}
            className={`group relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1.5 sm:p-8 ${
              p.popular
                ? "border-accent/60 bg-surface shadow-[0_30px_60px_-30px_oklch(50%_0.2_277/0.55)] ring-1 ring-accent/30 lg:-my-3 lg:py-11"
                : "glass-panel hover:border-accent/40 hover:shadow-lift"
            }`}
          >
            {p.popular && (
              <span className="btn-shimmer absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-accent via-violet to-fuchsia px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-card">
                Teams’ favourite
              </span>
            )}
            <h3 className="font-heading text-xl font-extrabold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
            <p className="mt-6 flex items-end gap-1.5 border-b border-line pb-6">
              <span className={`font-heading text-[2.75rem] font-extrabold leading-none tracking-tight ${p.popular ? "text-gradient" : ""}`}>{p.price}</span>
              <span className="pb-1 text-sm text-muted">{p.unit}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-[15px]">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent" aria-hidden>
                    <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button href={p.href} variant={p.popular ? "primary" : "secondary"} className="mt-8 w-full">
              {p.cta}
            </Button>
            <Link href={p.more} className="tap mt-3 text-center text-sm font-medium text-muted transition-colors hover:text-accent-text">
              {p.name} plan details →
            </Link>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
        You pay only for the seats you use and can stop whenever you like. There’s nothing to pay for setup and no consultant to hire. Prices are in INR; USD, EUR and GBP billing is available too.
      </p>
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div data-reveal className="space-y-5 lg:col-span-5">
        <div className="glass-panel space-y-5 rounded-2xl p-6">
          <div className="group flex items-start gap-4">
            <IconChip name="mail" className="h-11 w-11" iconClass="h-5 w-5" />
            <div className="min-w-0">
              <p className="text-sm text-muted">Email</p>
              <a href={`mailto:${site.email}`} className="tap break-all text-lg font-semibold text-accent-text hover:underline">{site.email}</a>
            </div>
          </div>
          <div className="group flex items-start gap-4 border-t border-line pt-5">
            <IconChip name="pin" className="h-11 w-11" iconClass="h-5 w-5" />
            <div>
              <p className="text-sm text-muted">Office</p>
              <p className="font-semibold">{site.location}</p>
            </div>
          </div>
          <p className="flex items-center gap-2 border-t border-line pt-5 text-sm text-muted">
            <Icon name="clock" className="h-4 w-4 text-accent" />
            Expect an answer by the next working day.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white">
          <div className="orb -right-12 -top-12 h-40 w-40 bg-accent/50" aria-hidden />
          <p className="relative font-heading font-semibold">Prefer to explore on your own?</p>
          <p className="relative mt-1 text-sm text-white/70">A sample workspace is open to browse in view-only mode, no account required.</p>
          <a href={site.app.demo} className="tap group relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#b9bbff]">
            Open the sample workspace
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div data-reveal className="lg:col-span-7">
        <ContactForm />
      </div>
    </div>
  );
}

export function AuthPanel({ mode }: { mode: "signin" | "signup" }) {
  const signin = mode === "signin";
  return (
    <div className="halo mx-auto max-w-md">
      <div className="rounded-3xl border border-line bg-surface/95 p-8 text-center shadow-lift backdrop-blur-xl sm:p-10">
        <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent via-violet to-fuchsia text-white shadow-card" aria-hidden>
          <Icon name="bolt" className="h-7 w-7" />
        </span>
        <h2 className="font-heading text-2xl font-extrabold">{signin ? "Welcome Back" : "Start Your 14-day Free Trial"}</h2>
        <p className="mt-2 text-muted">
          {signin
            ? "Sign in to your ZapBuzzer workspace on the web. Staff can also sign in from the Android app."
            : "Skip the card details and the onboarding call. Set up a workspace, add your colleagues and send the first request today."}
        </p>
        <div className="mt-7 grid gap-3">
          <Button href={signin ? site.app.signIn : site.app.signUp} className="w-full">
            {signin ? "Continue to sign in" : "Create my workspace"}
          </Button>
          <Button href={site.app.demo} variant="secondary" className="w-full">Try the read-only demo</Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          {signin ? (
            <>New to ZapBuzzer? <Link href="/sign-up" className="font-semibold text-accent-text hover:underline">Sign Up</Link></>
          ) : (
            <>Already have a workspace? <Link href="/sign-in" className="font-semibold text-accent-text hover:underline">Sign In</Link></>
          )}
        </p>
      </div>
    </div>
  );
}

export function SitemapList() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {groups.map((g) => (
        <section key={g.id} className="glass-panel mb-5 break-inside-avoid rounded-2xl p-5 transition-colors hover:border-accent/30">
          <h2 className="flex items-center justify-between gap-3 border-b border-line pb-3 font-heading text-sm font-bold text-fg">
            {g.name}
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-text">{g.pages.length}</span>
          </h2>
          <ul className="mt-3 space-y-2">
            {g.pages.map(([p, l]) => (
              <li key={p}>
                <Link href={`/${p}`} className="tap group inline-flex items-center gap-1 text-[15px] text-fg/80 transition-colors hover:text-accent-text">
                  {l}
                  <Icon name="arrowRight" className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
