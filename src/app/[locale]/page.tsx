import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { FeaturesCarousel } from "@/components/features-carousel/features-carousel";
import { ScreenshotGallery } from "@/components/screenshot-gallery/screenshot-gallery";
import { MobileShowcase } from "@/components/screenshot-gallery/phone-mockup";
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
      <Nav />
      <main>
        <Hero />
        <FeaturesCarousel />
        <ScrollReveal>
          <ScreenshotGallery />
        </ScrollReveal>
        <ScrollReveal>
          <MobileShowcase />
        </ScrollReveal>
        <ScrollReveal>
          <CtaBanner />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
