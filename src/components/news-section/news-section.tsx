import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getPublishedPosts, getAllPosts } from "@/lib/blog";
import { DESKTOP_SCREENSHOT_SRC } from "@/lib/constants";
import styles from "./news-section.module.scss";

type Props = {
  locale: string;
};

const FALLBACK_BANNER = DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving;
const HOMEPAGE_LIMIT = 3;
const isDev = process.env.NODE_ENV === "development";

function formatCategory(category: string): string {
  return `★ ${category.replace(/-/g, " ").toUpperCase()}`;
}

export async function NewsSection({ locale }: Props) {
  const t = await getTranslations("NewsSection");
  const posts = (isDev ? getAllPosts() : getPublishedPosts()).slice(0, HOMEPAGE_LIMIT);

  if (posts.length === 0) return null;

  return (
    <section className={styles.news} id="news">
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>{t("title")}</h2>
          </div>
          <div className="head-r">
            <Link href={`/${locale}/news`} className={styles.seeAll}>
              {t("seeAll")} →
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/news/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.img}>
                <Image
                  src={post.banner ?? FALLBACK_BANNER}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{formatCategory(post.category)}</span>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                {post.publishDate && (
                  <div className={styles.meta}>
                    <span>{post.publishDate}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
