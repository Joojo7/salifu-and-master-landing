import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { BlogPost, BlogPostMeta } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "docs", "blog");
const WORDS_PER_MINUTE = 200;

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function parseMeta(fileName: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  if (!data.title || !data.slug) return null;

  return {
    title: data.title,
    slug: data.slug,
    category: data.category ?? "uncategorised",
    status: data.status ?? "draft",
    publishDate: data.publishDate ?? null,
    banner: data.banner ?? null,
    tags: data.tags ?? [],
    summary: data.summary ?? "",
  };
}

export function getAllPosts(): BlogPostMeta[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md" && f !== "STYLE-GUIDE.md");

  const posts = files
    .map(parseMeta)
    .filter((p): p is BlogPostMeta => p !== null);

  const statusOrder: Record<string, number> = {
    published: 0,
    ready: 1,
    review: 2,
    draft: 3,
  };

  return posts.sort((a, b) => {
    const sa = statusOrder[a.status] ?? 4;
    const sb = statusOrder[b.status] ?? 4;
    if (sa !== sb) return sa - sb;
    if (a.publishDate && b.publishDate) return b.publishDate.localeCompare(a.publishDate);
    if (a.publishDate) return -1;
    if (b.publishDate) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getPublishedPosts(): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.status === "published" || p.status === "ready");
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.category))].sort();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const fileName of files) {
    const filePath = path.join(BLOG_DIR, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (data.slug !== slug) continue;

    const processed = await remark().use(html).process(content);

    return {
      title: data.title,
      slug: data.slug,
      category: data.category ?? "uncategorised",
      status: data.status ?? "draft",
      publishDate: data.publishDate ?? null,
      banner: data.banner ?? null,
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      contentHtml: processed.toString(),
      readingTime: estimateReadingTime(content),
    };
  }

  return null;
}
