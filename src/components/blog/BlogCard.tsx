import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { categoryName, formatDate } from "@/lib/blog";
import { Icon, type IconName } from "@/components/ui/Icon";

const categoryIcon: Record<string, IconName> = {
  "office-operations": "building",
  playbooks: "book",
  product: "bolt",
  people: "users",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const icon = categoryIcon[post.category] ?? "book";

  return (
    <article className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-text">
          <Icon name={icon} className="h-3.5 w-3.5" />
          {categoryName(post.category)}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted">
          <Icon name="clock" className="h-3 w-3" />
          {post.readingMinutes} min read
        </span>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-accent-text">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent-text group-hover:underline">
          <span>Read article</span>
          <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  );
}

