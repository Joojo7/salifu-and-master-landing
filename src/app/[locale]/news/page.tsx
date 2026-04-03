import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { PageHero } from "@/components/page-hero/page-hero";
import { BlogList } from "@/components/blog-list/blog-list";
import { Footer } from "@/components/footer/footer";
import { getPublishedPosts, getAllPosts, getAllCategories } from "@/lib/blog";
import { PAGE_HERO_IMAGES } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NewsPage" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("NewsPage");
  const isDev = process.env.NODE_ENV === "development";
  const posts = isDev ? getAllPosts() : getPublishedPosts();
  const categories = getAllCategories();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          imageSrc={PAGE_HERO_IMAGES.about}
          imageAlt={t("title")}
        />
        <BlogList posts={posts} categories={categories} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
