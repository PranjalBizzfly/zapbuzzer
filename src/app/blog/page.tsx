import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHero, Band } from "@/components/company/CompanyHero";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { CTASection, FAQSection } from "@/components/sections/PageParts";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/primitives";
import { allPosts, blogCategories, categoryName, formatDate } from "@/lib/blog";
import { companyPages } from "@/lib/companyPages";
import { standaloneFaqs } from "@/content/standaloneFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { absUrl } from "@/lib/site";

const page = companyPages.blog;

export const metadata: Metadata = {
  title: page.label,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: { title: `${page.label} | ZapBuzzer`, description: page.description, url: page.href },
};

export default function BlogPage() {
  const [featured, ...rest] = allPosts;
  const picks = rest.slice(0, 2);
  const categories = blogCategories.map((c) => ({ id: c.id, name: c.name }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ZapBuzzer Blog",
          url: absUrl("blog"),
          blogPost: allPosts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absUrl(`blog/${p.slug}`), datePublished: p.date })),
        }}
      />
      <CompanyHero
        crumbs={[{ href: "/", label: "Home" }, { href: page.href, label: page.label }]}
        eyebrow={page.label}
        title="Notes From the Quiet Office"
        lead="Practical writing on office requests: how pantry, print, IT, facilities and front-desk teams work, how to set up SLAs and escalation, and how ZapBuzzer handles each step."
      />

      {featured && (
        <Band>
          <SectionHeading eyebrow="Featured" title="Start Here" typewriter={false} />
          <div className="grid gap-6 lg:grid-cols-3">
            <article data-reveal className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-text">
                    <Icon name="sparkles" className="h-3.5 w-3.5" />
                    {categoryName(featured.category)}
                  </span>
                  <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-muted">Featured Guide</span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 group-hover:text-accent-text">{featured.title}</Link>
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-lg">{featured.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span>·</span>
                  <span>{featured.readingMinutes} min read</span>
                </span>
                <span className="flex items-center gap-1 font-semibold text-accent-text group-hover:underline">
                  Read article <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </div>
            </article>
            <div className="grid gap-6">
              {picks.map((p) => (
                <article key={p.slug} data-reveal className="glass-panel group relative flex flex-col justify-between rounded-3xl p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">{categoryName(p.category)}</p>
                    <h3 className="mt-2 font-heading text-xl font-bold leading-snug">
                      <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-accent-text">{p.title}</Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
                  </div>
                  <p className="mt-4 text-xs text-muted">{p.readingMinutes} min read</p>
                </article>
              ))}
            </div>
          </div>
        </Band>
      )}

      <Band alt>
        <SectionHeading eyebrow="Categories" title="Browse by Topic" typewriter={false} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogCategories.map((c) => (
            <a key={c.id} href={`/blog?category=${c.id}#articles`} data-reveal className="glass-panel rounded-2xl p-5 transition hover:border-accent/40">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.blurb}</p>
              <p className="mt-3 text-xs font-semibold text-accent-text">{allPosts.filter((p) => p.category === c.id).length} articles →</p>
            </a>
          ))}
        </div>
      </Band>

      <Band id="articles">
        <SectionHeading eyebrow="All Articles" title="Search the Blog" typewriter={false} />
        <BlogExplorer posts={allPosts} categories={categories} />
      </Band>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs["blog"]} about="the ZapBuzzer blog" /></div>
      </section>

      <CTASection title="Put These Ideas to Work in Your Office." body="Open a free workspace for one floor and up to 10 staff, or try Pro free for 14 days. No credit card, no setup call." />
    </>
  );
}
