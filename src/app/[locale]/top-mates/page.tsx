import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { TopMatesList } from "@/components/top-mates/top-mates-list";
import { getAllTopMatesCycles } from "@/lib/top-mates-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TopMatesIndex" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function TopMatesIndex({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const cycles = getAllTopMatesCycles();

  return (
    <>
      <Nav />
      <main>
        <TopMatesList cycles={cycles} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
