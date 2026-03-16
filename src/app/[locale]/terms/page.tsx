import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { PageHero } from "@/components/page-hero/page-hero";
import { TermsContent } from "@/components/terms-page/terms-page";
import { Footer } from "@/components/footer/footer";
import { PAGE_HERO_IMAGES } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("TermsPage");

  return (
    <>
      <Nav />
      <main>
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          imageSrc={PAGE_HERO_IMAGES.terms}
          imageAlt={t("title")}
        />
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
