import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { GameConcept } from "@/components/game-concept/game-concept";
import { GameplayShowcase } from "@/components/gameplay-showcase/gameplay-showcase";
import { Characters } from "@/components/characters/characters";
import { RoutesSection } from "@/components/routes-section/routes-section";
import { Features } from "@/components/features/features";
import { HowToPlay } from "@/components/how-to-play/how-to-play";
import { CtaBanner } from "@/components/cta-banner/cta-banner";
import { Waitlist } from "@/components/waitlist/waitlist";
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
        <ScrollReveal>
          <GameConcept />
        </ScrollReveal>
        <ScrollReveal>
          <GameplayShowcase />
        </ScrollReveal>
        <ScrollReveal>
          <Characters />
        </ScrollReveal>
        <ScrollReveal>
          <RoutesSection />
        </ScrollReveal>
        <ScrollReveal>
          <Features />
        </ScrollReveal>
        <ScrollReveal>
          <HowToPlay />
        </ScrollReveal>
        <CtaBanner />
        <ScrollReveal>
          <Waitlist />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
