import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { TopMatesPodium } from "@/components/top-mates/top-mates-podium";
import {
  getAllTopMateDates,
  getTopMatesCycle,
} from "@/lib/top-mates-data";

type Props = {
  params: Promise<{ locale: string; date: string }>;
};

export async function generateStaticParams() {
  return getAllTopMateDates().map((date) => ({ date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const cycle = getTopMatesCycle(date);
  if (!cycle) return { title: "Not Found" };
  return {
    title: `Top 5 mates — ${cycle.seasonName} — Salifu & Master`,
    description: `Top 5 trotro mates for ${cycle.seasonName} (${cycle.weekStart} to ${cycle.weekEnd}).`,
    openGraph: {
      title: `Top 5 mates — ${cycle.seasonName}`,
      description: `The week's top earners on the streets of Accra, Cape Coast, and Kumasi.`,
    },
  };
}

export default async function TopMatesPage({ params }: Props) {
  const { locale, date } = await params;
  setRequestLocale(locale);

  const cycle = getTopMatesCycle(date);
  if (!cycle) notFound();

  return (
    <>
      <Nav />
      <main>
        <TopMatesPodium cycle={cycle} />
      </main>
      <Footer />
    </>
  );
}
