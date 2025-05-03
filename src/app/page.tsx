"use client"

import FloatingCS from "~/components/ui/Customer Service/FloatingCS";
import HeroBanner from "~/components/ui/HeroBanner";
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