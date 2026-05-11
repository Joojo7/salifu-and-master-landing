import { Fragment } from "react";
import type { BlogPostMeta } from "@/types/blog";
import { BlogCard } from "@/components/blog-card/blog-card";
import { AdSlot } from "@/components/ad-slot/ad-slot";
import { AD_SLOTS } from "@/lib/constants";
import styles from "./blog-list.module.scss";

interface BlogListProps {
  posts: BlogPostMeta[];
  categories: string[];
  locale: string;
}

const AD_INTERVAL = 6;

export function BlogList({ posts, categories, locale }: BlogListProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`d-flex gap-2 flex-wrap mb-4 ${styles.filters}`}>
          {categories.map((cat) => (
            <span key={cat} className={styles.filterPill}>
              {cat.replace("-", " ")}
            </span>
          ))}
        </div>
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Fragment key={post.slug}>
              <BlogCard post={post} locale={locale} />
              {(i + 1) % AD_INTERVAL === 0 && i < posts.length - 1 && (
                <div className={styles.adRow}>
                  <AdSlot slot={AD_SLOTS.newsListInline} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
        {posts.length === 0 && (
          <p className={`text-center ${styles.empty}`}>
            No articles yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
