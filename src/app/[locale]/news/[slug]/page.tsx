import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { BlogArticle } from "@/components/blog-article/blog-article";
import { Footer } from "@/components/footer/footer";
import { getPublishedPosts, getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const isDev = process.env.NODE_ENV === "development";
  const posts = isDev ? getAllPosts() : getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} — Salifu & Master News`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        <BlogArticle post={post} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
