import type { ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/sections/PageParts";
import { Eyebrow } from "@/components/ui/primitives";

/** Dark hero for company pages, matching the Explore page treatment. */
export function CompanyHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0d0b24] pb-16 pt-10 text-white sm:pb-20 sm:pt-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="bg-grid absolute inset-0 opacity-[0.07]" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <Breadcrumb items={crumbs} onDark />
        <div className="stagger mt-8 max-w-3xl space-y-5">
          <div><Eyebrow tone="onDark">{eyebrow}</Eyebrow></div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
          <p className="text-lg text-white/80 sm:text-xl">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Consistent band wrapper for company page sections. */
export function Band({ children, alt = false, id }: { children: ReactNode; alt?: boolean; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 sm:py-16 ${alt ? "border-y border-line/60 bg-surface-2/60" : "bg-bg"}`}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}

export function InfoCard({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div data-reveal className={`glass-panel rounded-2xl p-6 ${className}`}>
      <h3 className="font-heading text-lg font-bold">{title}</h3>
      <div className="mt-2 text-[15px] leading-relaxed text-muted">{children}</div>
    </div>
  );
}
