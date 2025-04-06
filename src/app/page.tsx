"use client"

import PageContainer from "~/components/layouts/PageContainer";
import BenefitSection from "~/components/section/BenefitSection";
import HeroSection from "~/components/section/HeroSection";

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <BenefitSection />
    </PageContainer>
  );
}

export default Home;