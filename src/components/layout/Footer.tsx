import Link from "next/link";
import { site } from "@/lib/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: "Product",
    links: [
      ["/product", "Overview"],
      ["/how-it-works", "How it works"],
      ["/features", "Features"],
      ["/mobile-app", "Mobile app"],
      ["/enterprise", "Enterprise"],
      ["/integrations", "Integrations"],
      ["/pricing", "Pricing"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["/solutions/pantry", "Pantry"],
      ["/solutions/print-room", "Print room"],
      ["/solutions/it-support", "IT support"],
      ["/solutions/facilities", "Facilities"],
      ["/solutions/courier", "Courier & reception"],
      ["/workflows", "Workflows"],
    ],
  },
  {
    title: "Platform",
    links: [
      ["/features/first-accept-wins", "First-accept-wins"],
      ["/notifications", "Notifications"],
      ["/sla", "SLA & escalation"],
      ["/analytics", "Analytics"],
      ["/admin", "Administration"],
      ["/developers/api", "API"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["/resources", "Resource hub"],
      ["/explore", "Explore all pages"],
      ["/customers", "Customer stories"],
      ["/compare", "Compare"],
      ["/resources/faq", "FAQ"],
      ["/resources/glossary", "Glossary"],
      ["/sitemap", "Sitemap"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/clients", "Clients"],
      ["/contact", "Contact"],
      ["/demo", "Book a demo"],
      ["/sign-in", "Sign in"],
      ["/sign-up", "Sign up"],
    ],
  },
];

const quickActions: { href: string; title: string; sub: string; icon: IconName }[] = [
  { href: site.app.demo, title: "Try the read-only demo", sub: "No sign-up needed", icon: "play" },
  { href: "/demo", title: "Book a demo", sub: "We answer by the next working day", icon: "calendar" },
  { href: "/mobile-app", title: "Mobile app", sub: "Rings through even on silent", icon: "phone" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#080a14] text-white/65">
      <div className="orb -left-40 top-20 h-96 w-96 bg-accent/15" aria-hidden />
      <div className="orb -right-40 bottom-0 h-96 w-96 bg-fuchsia/10" aria-hidden />

      {/* Tagline ribbon hanging from the top edge */}
      <div className="relative flex justify-center">
        <p className="flex items-center gap-2 rounded-b-3xl border-x border-b border-white/15 bg-gradient-to-r from-accent via-violet to-fuchsia px-6 py-2.5 text-center text-xs font-semibold tracking-wide text-white shadow-[0_12px_30px_-12px_oklch(56%_0.2_277/0.8)] sm:px-12 sm:text-sm">
          <Icon name="bolt" className="h-4 w-4 shrink-0" />
          Fewer calls. Clear owners. Faster offices.
        </p>
      </div>

      <div className="container-x relative grid gap-12 pb-14 pt-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:border-r lg:border-white/10 lg:pr-10">
          <Logo invert />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{site.strapline} Pantry, print room, IT, facilities and front desk, run from one request platform.</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
            {quickActions.map((q) => {
              const cls =
                "group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#a5a8ff]/50 hover:bg-white/[0.07]";
              const inner = (
                <>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#a5a8ff]/25 bg-accent/20 text-[#b9bbff] transition-transform duration-300 group-hover:scale-105">
                    <Icon name={q.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold text-white">{q.title}</span>
                    <span className="block truncate text-[11.5px] text-white/50">{q.sub}</span>
                  </span>
                  <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-white/30 transition duration-200 group-hover:translate-x-0.5 group-hover:text-[#b9bbff]" />
                </>
              );
              return (
                <li key={q.title}>
                  {q.href.startsWith("http") ? (
                    <a href={q.href} className={cls}>{inner}</a>
                  ) : (
                    <Link href={q.href} className={cls}>{inner}</Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 font-medium text-white transition-colors hover:text-[#b9bbff]">
              <Icon name="mail" className="h-4 w-4 text-[#a5a8ff]" />
              {site.email}
            </a>
            <p className="flex items-center gap-2.5">
              <Icon name="pin" className="h-4 w-4 text-[#a5a8ff]" />
              {site.location}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="border-b border-[#a5a8ff]/20 pb-2 font-heading text-xs font-bold uppercase tracking-wider text-[#b9bbff]">{c.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="group inline-flex items-center gap-1 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-[#a5a8ff] transition-all duration-300 group-hover:w-2.5" aria-hidden />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ZapBuzzer · Built in Pune for busy offices.</p>
          <div className="flex gap-5">
            <a href={site.legal.privacy} className="transition-colors hover:text-white">Privacy</a>
            <a href={site.legal.terms} className="transition-colors hover:text-white">Terms</a>
            <a href={site.legal.deleteAccount} className="transition-colors hover:text-white">Delete account</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
