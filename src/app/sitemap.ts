import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPublishedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const STATIC_PATHS = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/news", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/characters", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/cities", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/how-to-play", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const { path, priority, changeFrequency } of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency,
        priority,
      });
    }

    for (const post of getPublishedPosts()) {
      entries.push({
        url: `${SITE_URL}/${locale}/news/${post.slug}`,
        lastModified: post.publishDate ? new Date(post.publishDate) : lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
