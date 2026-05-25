import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { LaunchThankYou } from "@/components/launch-thank-you/launch-thank-you";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Thank you — Launch Week — Salifu & Master",
  description:
    "214 drivers. 312 runs. GHC 148K earned. Thank you for showing up to launch week.",
  openGraph: {
    title: "Thank you — Launch Week",
    description: "214 drivers showed up to drive trotros across Ghana in week one.",
  },
};

export default async function LaunchThankYouPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <LaunchThankYou />
      </main>
      <Footer />
    </>
  );
}
