import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, CTASection } from "@/components/sections/PageParts";
import { BlogCard } from "@/components/blog/BlogCard";
import { Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { allPosts, categoryName, formatDate, getPost, relatedPosts, type BlogBlock } from "@/lib/blog";
import { absUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, type: "article", publishedTime: post.date, images: [{ url: post.image, alt: post.imageAlt }] },
  };
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "p":
      return <p>{b.text}</p>;
    case "h2":
      return <h2 id={slugify(b.text)} className="scroll-mt-24 pt-4 font-heading text-2xl font-bold text-fg sm:text-3xl">{b.text}</h2>;
    case "h3":
      return <h3 className="pt-2 font-heading text-xl font-bold text-fg">{b.text}</h3>;
    case "ul":
      return <ul className="list-disc space-y-2 pl-6 marker:text-accent">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case "ol":
      return <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-accent">{b.items.map((i) => <li key={i}>{i}</li>)}</ol>;
    case "callout":
      return (
        <aside className="rounded-2xl border border-accent/30 bg-accent-soft p-5">
          <p className="flex items-center gap-2 font-semibold text-fg"><Icon name="bolt" className="h-4 w-4 text-accent" />{b.title}</p>
          <p className="mt-1.5 text-[16px]">{b.text}</p>
        </aside>
      );
    case "quote":
      return (
        <figure className="border-l-4 border-accent pl-5">
          <blockquote className="font-heading text-xl font-semibold leading-snug text-fg">“{b.text}”</blockquote>
          <figcaption className="mt-2 text-sm">— {b.cite}</figcaption>
        </figure>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = allPosts[idx + 1];
  const next = allPosts[idx - 1];
  const related = relatedPosts(post);
  const toc = post.body.filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2");
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: `/blog/${post.slug}`, label: post.title },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              image: absUrl(post.image),
              url: absUrl(`blog/${post.slug}`),
              author: { "@type": "Organization", name: site.name, url: site.url },
              publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absUrl("logo.png") } },
            },
            { "@type": "BreadcrumbList", itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: absUrl(c.href) })) },
          ],
        }}
      />

      <section className="relative overflow-hidden bg-[#0d0b24] pb-14 pt-10 text-white sm:pt-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="bg-grid absolute inset-0 opacity-[0.07]" />
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4">
          <Breadcrumb items={crumbs} onDark />
          <div className="stagger mt-8 space-y-5">
            <div><Eyebrow tone="onDark">{categoryName(post.category)}</Eyebrow></div>
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="text-lg text-white/80">{post.description}</p>
            <p className="text-sm text-white/65">
              By the ZapBuzzer team · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <div className="relative -mt-2 aspect-[16/7] overflow-hidden rounded-3xl border border-line shadow-lift">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1200px) 100vw, 1150px" className="object-cover" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_260px]">
        <article className="min-w-0 space-y-5 text-[17px] leading-[1.75] text-fg/85">
          {post.body.map((b, i) => <Block key={i} b={b} />)}

          <div className="mt-10 rounded-2xl border border-line bg-surface-2/60 p-5">
            <p className="text-sm font-semibold text-fg">Tags</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <li key={t}>
                  <a href={`/blog?q=${encodeURIComponent(t)}#articles`} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium transition hover:border-accent/50">{t}</a>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {toc.length > 1 && (
            <nav aria-label="On this page" className="glass-panel rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((h) => <li key={h.text}><a href={`#${slugify(h.text)}`} className="tap hover:text-accent-text">{h.text}</a></li>)}
              </ul>
            </nav>
          )}
          {post.links.length > 0 && (
            <div className="glass-panel rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Related on ZapBuzzer</p>
              <ul className="mt-3 space-y-2 text-sm">
                {post.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="tap inline-flex items-center gap-1 font-medium text-accent-text hover:underline">{l.label} <Icon name="arrowRight" className="h-3.5 w-3.5" /></Link></li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <nav aria-label="More articles" className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 sm:grid-cols-2">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="glass-panel rounded-2xl p-5 transition hover:border-accent/40">
            <span className="text-xs text-muted">← Previous Article</span>
            <span className="mt-1 block font-semibold">{prev.title}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/blog/${next.slug}`} className="glass-panel rounded-2xl p-5 text-right transition hover:border-accent/40">
            <span className="text-xs text-muted">Next Article →</span>
            <span className="mt-1 block font-semibold">{next.title}</span>
          </Link>
        )}
      </nav>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface-2/60 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-6 font-heading text-2xl font-bold">Related Articles</h2>
            <div className="eq-titles [--eq-lines:3] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
            <p className="mt-8 text-center"><Link href="/blog" className="font-semibold text-accent-text hover:underline">Blog →</Link></p>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
