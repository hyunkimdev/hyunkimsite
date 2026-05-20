import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { LogoMarquee } from "@/components/logos/LogoMarquee";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { NotSureCTA } from "@/components/banners/NotSureCTA";
import { AISessionsBanner } from "@/components/banners/AISessionsBanner";
import { StatsHero } from "@/components/stats/StatsHero";
import { EnterpriseTrack } from "@/components/tracks/EnterpriseTrack";
import { StartupTrack } from "@/components/tracks/StartupTrack";
import { PlatformTrack } from "@/components/tracks/PlatformTrack";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { DeveloperSection } from "@/components/developer/DeveloperSection";
import { WhatsHappening } from "@/components/content-hub/WhatsHappening";
import { BookOfWeek } from "@/components/content-hub/BookOfWeek";
import { ReadyToStart } from "@/components/cta/ReadyToStart";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <SolutionsGrid />
        <NotSureCTA />
        <AISessionsBanner />
        <StatsHero />
        <EnterpriseTrack />
        <StartupTrack />
        <PlatformTrack />
        <Testimonial />
        <DeveloperSection />
        <WhatsHappening />
        <BookOfWeek />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
}
