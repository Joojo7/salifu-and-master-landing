import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { PageHero } from "@/components/page-hero/page-hero";
import { ContactContent } from "@/components/contact-page/contact-page";
import { Footer } from "@/components/footer/footer";
import { PAGE_HERO_IMAGES } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");

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
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
