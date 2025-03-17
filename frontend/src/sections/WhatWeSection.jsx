import React from "react";
import VerticalCard from "../components/VerticalCard";
import moneyCoin from "../assets/images/money-coin.png"
import musicCoin from "../assets/images/music-coin.png"
import headphoneCoin from "../assets/images/headphone-coin.png"

export default function WhatWeSection() {
  return (
    <section className="WhatWeSection section">
      <div className="WhatWeSection-outer outer-section">
        <div className="container">
          <div className="WhatWeSection-inner inner-section">
          <div className="section-title WhatWeSection-title align-center">
                <h2>The Industry is Broken—We're <span className="text-orange">Fixing </span>it </h2>
            </div>
            <div className="WhatWeSection-desciption align-center">
                <p>Finay is redefining what it means to own, experience, and invest in music. No middlemen. No limitations. Just a thriving ecosystem where creativity, commerce, and community fuel an industry built for the people who power it.</p>
            </div>
            <div className="WhatWeSection-varticle-card">
                <VerticalCard img={moneyCoin} title="Ownership Pays. Growth Rewards. Everyone Wins." description="With Finay, music is an asset. Artists sell directly to fans, earn resale royalties, and fuel a system where value flows back to the people. Through Finay's Ambassador Program, artists, influencers, and fans earn rewards for growing the movement—turning adoption into opportunity for all."/>
                <VerticalCard img={musicCoin} title="An Economy Built for the People." description="For decades, middlemen dictated how music was bought and sold. Finay flips the model—creating a space where artists, fans, and investors connect, collaborate, and share in the industry's success. From livestreams to social engagement to direct sales, Finay is the digital home for the music community."/>
                <VerticalCard img={headphoneCoin} title="A Marketplace Today—A DAO Tomorrow." description="Finay starts as a marketplace but grows into a fully decentralized music ecosystem—where artists and fans shape the platform, investors drive its expansion, and governance belongs to the community. Early backers fuel more than a platform—they ignite a movement."/>

            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}
