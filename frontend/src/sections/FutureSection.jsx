import React from "react";
import Promotional_CTA from "../components/Promotional_CTA";
import musicConcert from "../assets/images/music-concert.png"
import futureBg from "../assets/images/future-bg.png"

export default function FutureSection() {
  

  return (
    <section className="FutureSection section">
      <div className="FutureSection-outer outer-section" style={{background: `url(${futureBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "20px"}}>
        <div className="container">
          <div className="FutureSection-inner inner-section">
            <Promotional_CTA img={musicConcert} title={<>Lead the Change. Own the Future.</> } description={<>The industry is shifting. Be the force behind it.</>}  btnOneName="Open the vault" btnOneUrl="https://0zyb441m0a6.typeform.com/to/EY8iDvgG" btnTwoName="Let’s Chat" btnTwoUrl="https://0zyb441m0a6.typeform.com/to/RY1v4fK7"/>
          </div>
        </div>
      </div>
    </section>
  );
}
