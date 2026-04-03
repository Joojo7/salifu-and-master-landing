export interface BlogPostMeta {
  title: string;
  slug: string;
  category: string;
  status: "draft" | "review" | "ready" | "published";
  publishDate: string | null;
  banner: string | null;
  tags: string[];
  summary: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
  readingTime: number;
}
