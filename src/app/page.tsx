"use client"

import FloatingCS from "~/components/FloatingCS/FloatingCS";
import HeroBanner from "~/components/HeroBanner/HeroBanner";
import PageContainer from "~/components/layouts/PageContainer";
import BenefitSection from "~/components/section/BenefitSection";
import HeroSection from "~/components/section/HeroSection";
import PortofolioSection from "~/components/section/PortofolioSection";
import PricingSection from "~/components/section/PricingSection";

const Home = () => {
  return (
    <PageContainer>
      <FloatingCS />
      <HeroSection />
      <BenefitSection />
      <PortofolioSection />
      <PricingSection />
      <HeroBanner />
    </PageContainer>
  );
}

export default Home;