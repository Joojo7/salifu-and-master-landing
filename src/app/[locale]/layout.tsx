import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Familjen_Grotesk, Fraunces, Bowlby_One_SC, Caveat } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import "../globals.scss";

const fontBody = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const fontPoster = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poster",
});

const fontHand = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hand",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: "/assets/short-logo.png",
    },
    other: {
      "google-adsense-account": "ca-pub-2882403014606841",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const fontClasses = `${fontBody.variable} ${fontDisplay.variable} ${fontPoster.variable} ${fontHand.variable}`;

  return (
    <html lang={locale} className={fontClasses}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
