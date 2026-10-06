import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentPaths, crumbsFor, getPage, relatedFor, siblingsFor } from "@/content/registry";
import { SectionRenderer, StatsBar } from "@/components/sections/SectionRenderer";
import { CTASection, FAQSection, PageHero, RelatedPages, SiblingGrid } from "@/components/sections/PageParts";
import { AuthPanel, ContactBlock, PricingCards, SitemapList } from "@/components/templates/Templates";
import type { VisualKind } from "@/content/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { absUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return contentPaths.map((p) => ({ slug: p.split("/") }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  const url = `/${page.path}`;
  const noindex = page.template === "auth-signin" || page.template === "auth-signup";
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: `${page.title} | ${site.name}`, description: page.description, url, type: "website" },
    twitter: { title: page.title, description: page.description },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();

  const crumbs = crumbsFor(page.path);
  const related = relatedFor(page);
  const siblings = siblingsFor(page.path);
  const t = page.template ?? "standard";
  // Intro split uses a mockup not already shown elsewhere on this page.
  const used = new Set<VisualKind>([...(page.heroVisual ? [page.heroVisual] : []), ...page.sections.flatMap((x) => (x.type === "visual" ? [x.visual] : []))]);
  const introVisual = (["request-timeline", "request-dashboard", "notification-flow", "delivery", "analytics", "scorecard", "sla-timer", "staff-queue"] as VisualKind[]).find((v) => !used.has(v));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebPage", name: page.h1, description: page.description, url: absUrl(page.path) },
            {
              "@type": "BreadcrumbList",
              itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: absUrl(c.href) })),
            },
            ...(page.faqs?.length
              ? [
                  {
                    "@type": "FAQPage",
                    mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                  },
                ]
              : []),
          ],
        }}
      />
      <PageHero page={page} crumbs={crumbs} />

      {t !== "standard" && (
        <section className="bg-bg py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4">
            {t === "pricing" && <PricingCards />}
            {t === "contact" && <ContactBlock />}
            {t === "auth-signin" && <AuthPanel mode="signin" />}
            {t === "auth-signup" && <AuthPanel mode="signup" />}
            {t === "sitemap" && <SitemapList />}
          </div>
        </section>
      )}

      {/* Sky9 stats bar directly under the hero */}
      <section className="relative z-20 bg-surface-2/60 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4">
          <StatsBar
            items={[
              { value: "32s", label: "Average Time Until Someone Accepts" },
              { value: "96%", label: "Requests Delivered on Time" },
              { value: "−87%", label: "Fewer Phone Calls" },
              { value: "4.8★", label: "Average Staff Rating" },
            ]}
          />
        </div>
      </section>

      {/* Content sections: full-width bands with strictly unique, non-repeating images */}
      {(() => {
        const usedImagesOnPage = new Set<string>();
        return page.sections.map((s, i) => (
          <section key={i} className={`py-10 sm:py-12 md:py-16 ${i % 2 ? "border-y border-line/60 bg-surface-2/60" : "bg-bg"}`}>
            <div className="mx-auto max-w-7xl px-4" data-scroll3d={(["enter-up", "depth", "enter-left", "enter-right"] as const)[i % 4]}>
              <SectionRenderer section={s} index={i} introVisual={introVisual} pagePath={page.path} usedImages={usedImagesOnPage} />
            </div>
          </section>
        ));
      })()}

      {siblings && <SiblingGrid name={siblings.name} links={siblings.links} />}

      <RelatedPages items={related} />

      {page.faqs && page.faqs.length > 0 && (
        <section className="border-t border-line bg-surface-2/60 py-8 sm:py-10 md:py-14">
          <div className="px-4">
            <FAQSection faqs={page.faqs} about={page.title} />
          </div>
        </section>
      )}

      <CTASection title={page.cta?.title} body={page.cta?.body} />
    </>
  );
}
