import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getPublishedPosts, getAllPosts } from "@/lib/blog";
import type { BlogPostMeta } from "@/types/blog";
import styles from "./news-section.module.scss";

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

function FeaturedCard({ post, locale }: { post: BlogPostMeta; locale: string }) {
  const color = CATEGORY_COLORS[post.category] ?? "#f59e0b";

  return (
    <Link href={`/${locale}/news/${post.slug}`} className={styles.featured}>
      {post.banner && (
        <Image
          src={post.banner}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.featuredBanner}
        />
      )}
      <div className={styles.featuredOverlay} />
      <div className={`d-flex flex-column justify-content-end ${styles.featuredContent}`}>
        <span className={styles.featuredCategory} style={{ color }}>
          {post.category.replace("-", " ")}
        </span>
        <h3 className={styles.featuredTitle}>{post.title}</h3>
        <p className={styles.featuredSummary}>{post.summary}</p>
      </div>
    </Link>
  );
}

function SmallCard({ post, locale }: { post: BlogPostMeta; locale: string }) {
  const color = CATEGORY_COLORS[post.category] ?? "#f59e0b";

  return (
    <Link href={`/${locale}/news/${post.slug}`} className={styles.small}>
      <div className={`d-flex flex-column gap-1 ${styles.smallContent}`}>
        <span className={styles.smallCategory} style={{ color }}>
          {post.category.replace("-", " ")}
        </span>
        <h4 className={styles.smallTitle}>{post.title}</h4>
        <p className={styles.smallSummary}>{post.summary}</p>
      </div>
    </Link>
  );
}

export async function NewsSection({ locale }: { locale: string }) {
  const t = await getTranslations("NewsSection");
  const isDev = process.env.NODE_ENV === "development";
  const posts = isDev ? getAllPosts().slice(0, 4) : getPublishedPosts().slice(0, 4);

  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`d-flex align-items-center justify-content-between ${styles.header}`}>
          <h2 className={styles.heading}>{t("title")}</h2>
          <Link href={`/${locale}/news`} className={styles.seeAll}>
            {t("seeAll")}
          </Link>
        </div>

        <div className={styles.grid}>
          <FeaturedCard post={featured} locale={locale} />
          <div className={styles.sidebar}>
            {rest.map((post) => (
              <SmallCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
