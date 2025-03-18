import React from "react";
import HeroSection from "../sections/HeroSection";
import WhatWeSection from "../sections/WhatWeSection";
import BackStagePassSection from "../sections/BackStagePassSection";
import FinalStepSection from "../sections/FinalStepSection";
import ConversationSection from "../sections/ConversationSection";
import MarketSection from "../sections/MarketSection";
import FutureSection from "../sections/FutureSection";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page page">
      <HeroSection />
      <WhatWeSection />
      <BackStagePassSection />
      <FinalStepSection />
      <ConversationSection />
      <MarketSection />
      <FutureSection />
      <Footer />
    </div>
  );
}
