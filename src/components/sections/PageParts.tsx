import Link from "next/link";
import type { PageContent } from "@/content/types";
import { Visual } from "@/components/visuals/Visual";
import { Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/motion/Accordion";
import { Typewriter } from "@/components/motion/Typewriter";
import { site } from "@/lib/site";

export interface Crumb {
  href: string;
  label: string;
}

export function Breadcrumb({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${onDark ? "text-white/70" : "text-muted"}`}>
        {items.map((c, i) => (
          <li key={c.href} className="flex min-w-0 items-center gap-1.5">
            {i > 0 && <Icon name="chevronDown" className="h-3.5 w-3.5 -rotate-90 opacity-60" />}
            {i === items.length - 1 ? (
              <span aria-current="page" className={`truncate font-semibold ${onDark ? "text-white" : "text-fg"}`}>{c.label}</span>
            ) : (
              <Link href={c.href} className={`flex items-center gap-1 transition-colors ${onDark ? "hover:text-accent-2" : "hover:text-accent-text"}`}>
                {i === 0 && <Icon name="home" className="h-3.5 w-3.5" />}
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Sky9-style dark page hero: breadcrumb, badge, typewriter H1, actions; product visual as the backdrop. */
export function PageHero({ page, crumbs }: { page: PageContent; crumbs: Crumb[] }) {
  return (
    <section className="relative flex min-h-[420px] select-none items-center overflow-hidden bg-[#070912] pb-12 pt-10 text-white sm:min-h-[460px] sm:pb-14 sm:pt-12 md:min-h-[500px] md:pb-16">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="bg-grid absolute inset-0 opacity-[0.08]" />
        <div className="anim-orb absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-accent/35 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-fuchsia/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-transparent via-60% to-[#070912]/30" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        <div className="mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:mb-6">
          <Breadcrumb items={crumbs} onDark />
        </div>
        <div className={`grid grid-cols-1 items-center gap-10 ${page.heroVisual ? "lg:grid-cols-12" : ""}`}>
        <div className={`stagger space-y-4 sm:space-y-6 ${page.heroVisual ? "lg:col-span-7" : "max-w-3xl"}`}>
          <div>
            <Eyebrow tone="onDark">{page.eyebrow}</Eyebrow>
          </div>
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl">
            <Typewriter text={page.h1} cursor />
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-lg md:text-xl">{page.lead}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
            <a
              href={site.app.signUp}
              className="btn-shimmer group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent/40 sm:px-8 sm:py-3.5 sm:text-base"
            >
              <span>Start free — 14-day trial</span>
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:border-accent-2/60 hover:bg-white/15 hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
            >
              Book a demo
            </Link>
          </div>
        </div>
        {page.heroVisual && (
          <div className="anim-rise hidden min-w-0 lg:col-span-5 lg:block" style={{ animationDelay: "0.15s" }}>
            <div className="anim-float">
              <Visual kind={page.heroVisual} />
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ faqs, about, title = "Frequently asked questions" }: { faqs: { q: string; a: string }[]; about?: string; title?: string }) {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeading eyebrow="Page FAQs" title={title} intro={about ? `Answers to common questions about ${about}.` : undefined} />
      <Accordion items={faqs} />
      <p className="mt-8 text-center text-sm text-muted">
        Didn’t find your answer?{" "}
        <Link href="/contact" className="font-semibold text-accent-text hover:underline">Send us a note</Link> and you’ll hear back by the next working day.
      </p>
    </div>
  );
}

export function CTASection({
  title = "Give your office requests an owner and a clock.",
  body = "Try ZapBuzzer free for 14 days. You won’t need a card or an onboarding call: open a workspace, bring your colleagues in and let the requests route themselves.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-4 py-10 sm:py-12 md:py-16">
      <div data-reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#3d3fb8] via-accent to-[#3d3fb8] text-white shadow-2xl shadow-accent/20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-fuchsia/30 blur-2xl" />
        </div>
        <div className="relative z-10 px-5 py-8 text-center sm:py-10 md:px-12 md:py-14">
          <div className="mb-3 sm:mb-4">
            <Eyebrow tone="onBrand">Get started</Eyebrow>
          </div>
          <h2 className="mb-3 font-heading text-2xl font-bold leading-tight tracking-tight sm:mb-6 sm:text-3xl md:text-5xl">{title}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:mb-10 sm:text-base md:text-xl">{body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.app.signUp}
              className="btn-shimmer group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#2e2f8f] shadow-lg shadow-black/20 transition duration-300 hover:scale-105 hover:bg-[#eef0ff] active:scale-95"
            >
              <span>Open a free workspace</span>
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/demo" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-white/20 active:scale-95">
              Book a walkthrough
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Other topics in …" grid. */
export function SiblingGrid({ name, links }: { name: string; links: { href: string; label: string; description?: string }[] }) {
  return (
    <section className="border-t border-line bg-surface-2/60 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h3 data-reveal className="mb-4 font-heading text-xl font-bold sm:mb-6 sm:text-2xl">
          Other topics in {name}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 0.05}s` } as React.CSSProperties}
              className="glass-panel group flex w-full items-center justify-between gap-3 rounded-xl p-5 transition duration-300 hover:border-accent/50 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="min-w-0">
                <h4 className="text-sm font-semibold transition-colors group-hover:text-accent-text">{l.label}</h4>
                {l.description && <p className="mt-1 line-clamp-1 text-xs text-muted">{l.description}</p>}
              </div>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Connected pages panel (Sky9 "internal link engine"). */
export function RelatedPages({ items }: { items: { href: string; label: string; group: string; description?: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-line bg-surface py-8 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:space-y-10">
        <SectionHeading eyebrow="Keep exploring" title="Related pages" intro="Explore connected features, solutions, workflows and guides." />
        <div data-reveal className="glass-panel rounded-2xl p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold">
            <Icon name="layers" className="h-5 w-5 text-accent" />
            Connected pages
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {items.map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 4) * 0.05}s` } as React.CSSProperties}
                className="group flex h-full flex-col justify-between rounded-xl border border-line bg-surface-2/70 p-4 transition hover:border-accent/40 hover:bg-accent-soft"
              >
                <div>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-accent-text">{r.group}</span>
                  <h4 className="line-clamp-2 text-sm font-bold transition-colors group-hover:text-accent-text">{r.label}</h4>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-text transition-transform group-hover:translate-x-1">
                  Explore
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Button };
