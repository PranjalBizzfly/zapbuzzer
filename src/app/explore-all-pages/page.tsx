import type { Metadata } from "next";
import { groups } from "@/content/manifest";
import { buildPageIndex } from "@/lib/pageIndex";
import { PageExplorer } from "@/components/explore/PageExplorer";
import { Breadcrumb, FAQSection } from "@/components/sections/PageParts";
import { StatsBar } from "@/components/sections/SectionRenderer";
import { standaloneFaqs } from "@/content/standaloneFaqs";

export const metadata: Metadata = {
  title: "Explore All Pages",
  description: "Browse every page on the ZapBuzzer website in one place: features, solutions, workflows, use cases, guides and more. Filter by section or search by name.",
  alternates: { canonical: "/explore-all-pages" },
};

export default function ExplorePage() {
  const pages = buildPageIndex();
  const sectionList = [...groups.map((g) => ({ id: g.id, name: g.name })), { id: "company", name: "Company" }, { id: "blog", name: "Blog" }];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0d0b24] pb-36 pt-10 text-white sm:pt-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="bg-grid absolute inset-0 opacity-[0.07]" />
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/explore-all-pages", label: "Explore All Pages" }]} onDark />
          <h1 className="mt-8 font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            Every Page,
            <br />
            in One Place
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {pages.length} pages across {groups.length} sections. Filter by section, or type to find a page by name.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-24 max-w-7xl px-4">
        <div className="rounded-2xl bg-surface shadow-2xl sm:rounded-3xl">
        <StatsBar
          items={[
            { value: String(pages.length), label: "Pages to Explore" },
            { value: String(groups.length), label: "Sections" },
            { value: "5", label: "Team Solutions" },
            { value: "14-day", label: "Free Trial, No Card" },
          ]}
        />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12">
        <PageExplorer pages={pages} groups={sectionList} />
      </section>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs["explore"]} about="finding pages on the ZapBuzzer website" /></div>
      </section>
    </>
  );
}
