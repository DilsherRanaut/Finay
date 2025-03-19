import React from "react";
import HeroSection from "../sections/HeroSection";
import WhatWeSection from "../sections/WhatWeSection";
import BackStagePassSection from "../sections/BackStagePassSection";
import FinalStepSection from "../sections/FinalStepSection";
import ConversationSection from "../sections/ConversationSection";
import MarketSection from "../sections/MarketSection";
import FutureSection from "../sections/FutureSection";
import Footer from "../sections/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function LandingPage() {
  return (
    <div className="landing-page page">
      <SmoothScroll>
      <HeroSection />
      <WhatWeSection />
      <BackStagePassSection />
      <FinalStepSection />
      <ConversationSection />
      <MarketSection />
      <FutureSection />
      <Footer />
      </SmoothScroll>
    </div>
  );
}
