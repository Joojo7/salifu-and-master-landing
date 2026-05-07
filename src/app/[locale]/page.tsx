import { setRequestLocale } from "next-intl/server";
import { TopTicker } from "@/components/top-ticker/top-ticker";
import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { FeaturesCarousel } from "@/components/features-carousel/features-carousel";
import { RoutesSection } from "@/components/routes-section/routes-section";
import { CitiesShowcase } from "@/components/cities-showcase/cities-showcase";
import { Characters } from "@/components/characters/characters";
import { PowerUps } from "@/components/power-ups/power-ups";
import { GameplayShowcase } from "@/components/gameplay-showcase/gameplay-showcase";
import { ScreenshotGallery } from "@/components/screenshot-gallery/screenshot-gallery";
import { NewsSection } from "@/components/news-section/news-section";
import { CtaBanner } from "@/components/cta-banner/cta-banner";
import { Footer } from "@/components/footer/footer";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TopTicker />
      <Nav />
      <main>
        <Hero />
        <ScrollReveal><FeaturesCarousel /></ScrollReveal>
        <ScrollReveal><RoutesSection /></ScrollReveal>
        <ScrollReveal><CitiesShowcase /></ScrollReveal>
        <ScrollReveal><Characters /></ScrollReveal>
        <ScrollReveal><PowerUps /></ScrollReveal>
        <ScrollReveal><GameplayShowcase /></ScrollReveal>
        <ScrollReveal><ScreenshotGallery /></ScrollReveal>
        <ScrollReveal><NewsSection locale={locale} /></ScrollReveal>
        <ScrollReveal><CtaBanner /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
