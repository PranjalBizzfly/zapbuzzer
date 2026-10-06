import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

type Col = { title: string; links: [string, string][] };

const products: Col = {
  title: "Products",
  links: [
    ["/overview", "Overview"],
    ["/why-zapbuzzer", "Why ZapBuzzer"],
    ["/how-it-works", "How It Works"],
    ["/features", "Features"],
    ["/features/first-accept-wins", "First-Accept-Wins"],
    ["/notifications", "Notifications"],
    ["/sla-and-escalation", "SLA & Escalation"],
    ["/analytics", "Analytics"],
    ["/administration", "Administration"],
    ["/workflows", "Workflows"],
    ["/mobile-app", "Mobile App"],
    ["/enterprise", "Enterprise"],
  ],
};

const solutions: Col = {
  title: "Solutions",
  links: [
    ["/solutions/pantry", "Pantry"],
    ["/solutions/print-room", "Print Room"],
    ["/solutions/it-support", "IT Support"],
    ["/solutions/facilities", "Facilities"],
    ["/solutions/courier-and-reception", "Courier & Reception"],
    ["/customer-stories", "Customer Stories"],
    ["/clients", "Clients"],
  ],
};

const quick: Col = {
  title: "Quick Links",
  links: [
    ["/pricing", "Pricing"],
    ["/integrations", "Integrations"],
    ["/developers/api-documentation", "API Documentation"],
    ["/blog", "Blog"],
    ["/resource-hub", "Resource Hub"],
    ["/resource-hub/faq", "FAQ"],
    ["/resource-hub/glossary", "Glossary"],
    ["/explore-all-pages", "Explore All Pages"],
    ["/book-a-demo", "Book a Demo"],
    ["/sitemap", "Sitemap"],
  ],
};

const legal: Col = {
  title: "Legal",
  links: [
    [site.legal.privacy, "Privacy Policy"],
    [site.legal.terms, "Terms of Service"],
    ["/enterprise/security", "Security"],
  ],
};

const about: Col = {
  title: "About",
  links: [
    ["/about-us", "About Us"],
    ["/contact-us", "Contact Us"],
    ["/careers", "Careers"],
    ["/vendors-and-partners", "Vendors & Partners"],
    ["/media", "Media"],
    ["/press-kit", "Press Kit"],
  ],
};

const useCases: Col = {
  title: "Use Cases",
  links: [
    ["/use-cases/office-manager", "Office Manager"],
    ["/use-cases/founder", "Founder"],
    ["/use-cases/it-manager", "IT Manager"],
    ["/use-cases/facilities-manager", "Facilities Manager"],
    ["/use-cases/hr-team", "HR Team"],
    ["/use-cases/reception-team", "Reception Team"],
    ["/use-cases/stop-chase-calls", "Stop Chase Calls"],
    ["/use-cases/reduce-whatsapp-requests", "Reduce WhatsApp Requests"],
  ],
};

const developers: Col = {
  title: "Developers",
  links: [
    ["/developers/rest-api", "REST API"],
    ["/developers/webhooks", "Webhooks"],
    ["/developers/api-authentication", "API Authentication"],
    ["/integrations/sso-and-saml", "SSO & SAML"],
    ["/integrations/white-label", "White Label"],
    ["/integrations/custom-domain", "Custom Domain"],
  ],
};


const guides: Col = {
  title: "Guides",
  links: [
    ["/resource-hub/product-tour", "Product Tour"],
    ["/resource-hub/office-efficiency-guide", "Office Efficiency Guide"],
    ["/resource-hub/internal-request-management-guide", "Internal Request Management Guide"],
    ["/resource-hub/workplace-operations-guide", "Workplace Operations Guide"],
    ["/resource-hub/sla-management-guide", "SLA Management Guide"],
    ["/resource-hub/office-automation-guide", "Office Automation Guide"],
  ],
};

const compare: Col = {
  title: "Compare",
  links: [
    ["/feature-comparison", "Feature Comparison"],
    ["/feature-comparison/vs-whatsapp", "Vs WhatsApp"],
    ["/feature-comparison/vs-phone-calls", "Vs Phone Calls"],
    ["/feature-comparison/vs-helpdesk", "Vs Helpdesk"],
    ["/feature-comparison/vs-manual-requests", "Vs Manual Requests"],
  ],
};


function FLink({ href, children }: { href: string; children: ReactNode }) {
  const cls =
    "relative inline-block rounded-sm text-sm leading-snug text-white/70 transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b9bbff] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70";
  return href.startsWith("http") ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

/** One heading + its links. Every group is its own column, so the footer stays a single row. */
function Column({ col, children }: { col: Col; children?: ReactNode }) {
  return (
    <div className="min-w-0">
      <h2 className="font-heading text-[15px] font-bold text-[#b9bbff] xl:text-base">{col.title}</h2>
      <span className="mt-2 block h-0.5 w-7 rounded-full bg-gradient-to-r from-accent to-fuchsia" aria-hidden />
      <ul className="mt-4 space-y-2.5">
        {col.links.map(([href, label]) => (
          <li key={href}><FLink href={href}>{label}</FLink></li>
        ))}
      </ul>
      {children}
    </div>
  );
}

const socials: { label: string; href: string; hover: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    hover: "hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:shadow-[0_8px_20px_-6px_#0a66c2]",
    icon: <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58.98-3.02 1.67V8.5h-3.38c.05.95 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.69.12-.93.27-.69.89-1.4 1.93-1.4 1.36 0 1.9 1.04 1.9 2.56V20h3.38l-.44-6.6Z" />,
  },
  {
    label: "X",
    href: site.social.x,
    hover: "hover:border-white hover:bg-white hover:!text-black hover:shadow-[0_8px_20px_-6px_#ffffff80]",
    icon: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.57L16.67 19.2Z" />,
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    hover: "hover:border-transparent hover:bg-[linear-gradient(45deg,#f9a825,#e1306c_45%,#833ab4)] hover:shadow-[0_8px_20px_-6px_#e1306c]",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    hover: "hover:border-[#1877f2] hover:bg-[#1877f2] hover:shadow-[0_8px_20px_-6px_#1877f2]",
    icon: <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63A20.9 20.9 0 0 0 14.25 4.5c-2.25 0-3.79 1.37-3.79 3.9v2.16H7.92v2.94h2.54V21h3.04Z" />,
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    hover: "hover:border-[#ff0000] hover:bg-[#ff0000] hover:shadow-[0_8px_20px_-6px_#ff0000]",
    icon: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8ZM10 15.02V8.98L15.2 12 10 15.02Z" />,
  },
];

function StoreBadge({ href, top, bottom, icon }: { href: string; top: string; bottom: string; icon: ReactNode }) {
  return (
    <Link href={href} className="flex w-[190px] items-center gap-3 whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70">
      {icon}
      <span className="leading-tight">
        <span className="block text-[11px] uppercase tracking-wide">{top}</span>
        <span className="block text-lg font-semibold">{bottom}</span>
      </span>
    </Link>
  );
}

const payments: { label: string; node: ReactNode; bg: string }[] = [
  { label: "Mastercard", bg: "bg-[#1a5aa8]", node: <span className="relative flex"><span className="h-4 w-4 rounded-full bg-[#eb001b]" /><span className="-ml-1.5 h-4 w-4 rounded-full bg-[#f79e1b]/90" /></span> },
  { label: "Visa", bg: "bg-white", node: <span className="text-sm font-black italic text-[#1a1f71]">VISA</span> },
  { label: "RuPay", bg: "bg-white", node: <span className="text-[11px] font-black italic text-[#0a3a7a]">Ru<span className="text-[#f47b20]">Pay</span></span> },
  { label: "UPI", bg: "bg-white", node: <span className="text-xs font-black italic text-[#3d3d3d]">UPI<span className="text-[#f47b20]">›</span></span> },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#080a14] text-white/65">
      <div className="orb -left-40 top-20 h-96 w-96 bg-accent/15" aria-hidden />
      <div className="orb -right-40 bottom-0 h-96 w-96 bg-fuchsia/10" aria-hidden />

      {/* Tagline ribbon hanging from the top edge */}
      <div className="relative flex justify-center">
        <p className="rounded-b-[3rem] border-x border-b border-white/15 bg-gradient-to-r from-accent via-violet to-fuchsia shadow-[0_12px_30px_-12px_oklch(56%_0.2_277/0.8)] px-10 py-3 text-center font-heading text-2xl font-bold italic tracking-tight text-white sm:px-40 sm:text-3xl">
          Press a button. Staff knows...
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-12 px-4 pb-10 pt-16 sm:px-8 2xl:flex-row 2xl:gap-12">
        {/* Brand column */}
        <div className="flex shrink-0 flex-col items-start gap-8 sm:flex-row sm:flex-wrap sm:gap-x-14 2xl:max-w-[230px] 2xl:flex-col 2xl:flex-nowrap">
          <div className="flex flex-col items-start gap-4">
            <Logo invert />
            <p className="max-w-[230px] text-sm leading-relaxed text-white/60">The internal-request CRM for offices. One tap, and the right team knows.</p>
            <div className="space-y-2 text-sm text-white/70">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-[#b9bbff]" />
                {site.email}
              </a>
              <p className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-[#b9bbff]" />
                {site.location}
              </p>
            </div>
            <ul className="flex gap-2.5" aria-label="ZapBuzzer on social media">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ZapBuzzer on ${s.label}`}
                    title={s.label}
                    className={`grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-white/80 transition duration-300 hover:-translate-y-1 hover:text-white ${s.hover} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a14]`}
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>{s.icon}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <StoreBadge
              href="/mobile-app/android-app"
              top="Get It on"
              bottom="Google Play"
              icon={<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden><path fill="#00d7fe" d="M3.6 2.3 13.4 12l-9.8 9.7c-.3-.2-.6-.6-.6-1.1V3.4c0-.5.3-.9.6-1.1Z" /><path fill="#ffce00" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.9-2.2c.8-.5.8-1.9 0-2.4l-3.9-2.2Z" /><path fill="#ff3a44" d="M13.4 12 3.6 21.7c.4.2.9.2 1.4-.1l11.8-6.2-3.4-3.4Z" /><path fill="#00f076" d="M3.6 2.3c.4-.2.9-.2 1.4.1l11.8 6.2-3.4 3.4-9.8-9.7Z" /></svg>}
            />
            <StoreBadge
              href="/mobile-app"
              top="Download on the"
              bottom="App Store"
              icon={<svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1ZM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5Z" /></svg>}
            />
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-white/60">We accept</p>
            <div className="flex gap-2.5">
            {payments.map((p) => (
              <span key={p.label} title={p.label} className={`grid h-10 w-14 place-items-center overflow-hidden rounded-md ${p.bg}`}>{p.node}</span>
            ))}
            </div>
          </div>
        </div>

        {/* Link columns: every group in its own column, one row on desktop */}
        <nav aria-label="Footer" className="grid min-w-0 flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 xl:gap-x-5">
          <Column col={products} />
          <Column col={solutions} />
          <Column col={useCases} />
          <Column col={quick} />
          <Column col={guides} />
          <Column col={developers} />
          <Column col={legal} />
          <Column col={about} />
          <Column col={compare}>
            <div className="mt-8 flex flex-col items-stretch gap-3">
              <Link href="/book-a-demo" className="inline-flex w-full max-w-[190px] items-center justify-between gap-2 whitespace-nowrap rounded-full border border-[#a5a8ff]/25 bg-accent/20 py-2.5 pl-4 pr-2.5 text-sm font-semibold text-white transition hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70">
                Book a Demo
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-accent"><Icon name="arrowRight" className="h-3 w-3" /></span>
              </Link>
              <a href={site.app.signUp} className="w-full max-w-[190px] whitespace-nowrap rounded-full bg-gradient-to-r from-accent via-violet to-fuchsia px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_-12px_oklch(56%_0.2_277/0.8)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9bbff]/70">
                Get Free Access
              </a>
            </div>
          </Column>
        </nav>
      </div>

      <p className="relative mx-auto max-w-[1800px] border-t border-white/10 px-4 py-7 text-center text-sm text-white/60">
        Copyright © {new Date().getFullYear()} ZapBuzzer · Built in Pune for busy offices.
      </p>
    </footer>
  );
}
