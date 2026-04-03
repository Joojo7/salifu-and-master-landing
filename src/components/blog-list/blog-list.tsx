import type { BlogPostMeta } from "@/types/blog";
import { BlogCard } from "@/components/blog-card/blog-card";
import styles from "./blog-list.module.scss";

interface BlogListProps {
  posts: BlogPostMeta[];
  categories: string[];
  locale: string;
}

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
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
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
