import React from "react";
import ImageWithText from "../components/ImageWithText";
import colorfulMusic from "../assets/images/colorful-music.png";

export default function FinalStepSection() {
  return (
    <section className="FinalStepSection section">
      <div className="FinalStepSection-outer outer-section">
        <div className="container">
          <div className="FinalStepSection-inner inner-section">
            <ImageWithText img={colorfulMusic} title={<>The Final Step — <span className="text-orange">Secure</span> Your Access</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}  btnName="dIVE iN" btnUrl="#"/>
          </div>
        </div>
      </div>
    </section>
  );
}
