import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { ShareButtons } from "./share-buttons";
import styles from "./blog-article.module.scss";

export function BlogArticle({ post, locale }: { post: BlogPost; locale: string }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <article className={styles.article}>
          <div className={styles.header}>
            <Link href={`/${locale}/news`} className={styles.backLink}>
              &larr; All News
            </Link>
            {post.banner && (
              <div className={styles.bannerWrap}>
                <Image
                  src={post.banner}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                  className={styles.bannerImage}
                />
              </div>
            )}
            <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
              <span className={styles.category}>
                {post.category.replace("-", " ")}
              </span>
              {post.publishDate && (
                <span className={styles.date}>{post.publishDate}</span>
              )}
              <span className={styles.readTime}>
                {post.readingTime} min read
              </span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.summary}>{post.summary}</p>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="d-flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
              <ShareButtons
                slug={post.slug}
                title={post.title}
                summary={post.summary}
                tags={post.tags}
                locale={locale}
              />
            </div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </section>
  );
}
