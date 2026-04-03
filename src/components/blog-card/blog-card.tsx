import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/types/blog";
import styles from "./blog-card.module.scss";

const CATEGORY_COLORS: Record<string, string> = {
  "core-gameplay": "#f59e0b",
  characters: "#a78bfa",
  routes: "#22c55e",
  vehicles: "#3b82f6",
  competition: "#ef4444",
  progression: "#06b6d4",
  events: "#f97316",
  modes: "#8b5cf6",
  tech: "#64748b",
  "coming-soon": "#71717a",
};

function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] ?? "#f59e0b";
}

const STATUS_BADGE_COLORS: Record<string, string> = {
  draft: "#71717a",
  review: "#eab308",
  ready: "#22c55e",
  published: "#3b82f6",
};

const isDev = process.env.NODE_ENV === "development";

export function BlogCard({ post, locale }: { post: BlogPostMeta; locale: string }) {
  const color = getCategoryColor(post.category);

  return (
    <Link href={`/${locale}/news/${post.slug}`} className={styles.card}>
      {post.banner ? (
        <div className={styles.bannerWrap}>
          <Image
            src={post.banner}
            alt={post.title}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            className={styles.bannerImage}
          />
        </div>
      ) : (
        <div className={styles.colorBar} style={{ backgroundColor: color }} />
      )}
      <div className={`d-flex flex-column gap-2 ${styles.body}`}>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className={styles.category} style={{ color }}>
            {post.category.replace("-", " ")}
          </span>
          {isDev && (
            <span
              className={styles.statusBadge}
              style={{ backgroundColor: STATUS_BADGE_COLORS[post.status] ?? "#71717a" }}
            >
              {post.status}
            </span>
          )}
          {post.publishDate && (
            <span className={styles.date}>{post.publishDate}</span>
          )}
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.summary}>{post.summary}</p>
        <div className="d-flex gap-2 flex-wrap mt-auto">
          {post.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
