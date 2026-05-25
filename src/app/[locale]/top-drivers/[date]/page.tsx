import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { TopDriversPodium } from "@/components/top-drivers/top-drivers-podium";
import { getAllTopDriverDates, getTopDriversCycle } from "@/lib/top-drivers-data";

type Props = {
  params: Promise<{ locale: string; date: string }>;
};

export async function generateStaticParams() {
  return getAllTopDriverDates().map((date) => ({ date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const cycle = getTopDriversCycle(date);
  if (!cycle) return { title: "Not Found" };
  return {
    title: `Top 5 drivers — ${cycle.seasonName} — Salifu & Master`,
    description: `Top 5 trotro drivers for ${cycle.seasonName} (${cycle.weekStart} to ${cycle.weekEnd}).`,
    openGraph: {
      title: `Top 5 drivers — ${cycle.seasonName}`,
      description: `The week's top earners on the streets of Accra, Cape Coast, and Kumasi.`,
    },
  };
}

export default async function TopDriversPage({ params }: Props) {
  const { locale, date } = await params;
  setRequestLocale(locale);

  const cycle = getTopDriversCycle(date);
  if (!cycle) notFound();

  return (
    <>
      <Nav />
      <main>
        <TopDriversPodium cycle={cycle} />
      </main>
      <Footer />
    </>
  );
}
