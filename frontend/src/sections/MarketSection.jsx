import React from "react";
import CounterCounterCard from "../components/CounterCard";

export default function MarketSection() {
  const CounterCards = [
    {
      percentage: 65,
      counterValue: "65%",
      title: (
        <>
          Streaming platforms take
          <br /> 65% of global music
          <br /> revenue—artists see less
          <br /> than 12%
        </>
      ),
      contentList: {
        contentListItem1:
          "Spotify raised prices again in 2023. Fans pay more than ever. Artists? Still earning $0.004 per stream. Where does the money go?",
      },
    },
    {
      percentage: 15,
      counterValue: "$1.2B",
      title: "Indie artists—the fastest-growing segment— made $1.2B in 2022",
      contentList: {
        contentListItem1: "Platforms still take up to 85% of their earnings.",
        contentListItem2: "1K concert tickets = $30K. 1M streams = $5K..",
        contentListItem3:
          "If talent and hard work were enough, wouldn’t indie artists be thriving?",
      },
    },
    {
      percentage: 30,
      counterValue: "$20B",
      title:
        "Music NFTs are set to grow from $2.85B to $20.81B by 2032 (28.23% CAGR)",
      contentList: {
        contentListItem1:
          "Kings of Leon made $2M in a week—more than a lifetime of streaming for some.",
        contentListItem2:
          "If fans are paying for ownership, why are artists still renting their careers to platforms?",
      },
    },
    {
      percentage: 65,
      counterValue: "70%",
      title:
        "70% of fans want to support artists directly, but streaming & ticketing keep them locked out",
      contentList: {
        contentListItem1:
          "Fans spend billions—yet they own nothing. No resale rights. No stake in success.",
        contentListItem2:
          "If fans are willing to invest, why are they treated like passive consumers?",
      },
    },
    {
      percentage: 90,
      counterValue: "$247B",
      title:
        "livestreaming will hit $247B by 2027—artists are already cashing in",
      contentList: {
        contentListItem1:
          "Dua Lipa made $8M from a single virtual concert—more than most artists make in years of touring.",
        contentListItem2:
          "If artists can thrive without middlemen, why is the industry ghting to keep them dependent?",
      },
    },
    {
      percentage: 40,
      counterValue: "$25.1B",
      title:
        "DAOs manage over $25.1B in treasuries - community-led platforms are the future",
      contentList: {
        contentListItem1:
          "Web3 has already disrupted nance, gaming, and art—music is next.",
        contentListItem2:
          "If the system will never serve artists and fans, isn’t it time they build their own?",
      },
    },
  ];

  return (
    <section className="MarketSection section">
      <div className="MarketSection-outer outer-section">
        <div className="container">
          <div className="MarketSection-inner inner-section">
            <div className="section-title MarketSection-title align-center">
              <h2>
                The Market <span className="text-orange">Speaks. </span>Finay
                Listens.
              </h2>
            </div>
            <div className="MarketSection-description align-center">
              <p>Artists make pennies. Fans fund billions. What’s broken?</p>
            </div>
            <div className="MarketSection-cards">
              {CounterCards.map((CounterCard, index) => (
                <CounterCounterCard
                  key={index}
                  percentage={CounterCard.percentage}
                  counterValue={CounterCard.counterValue}
                  title={CounterCard.title}
                  contentList={CounterCard.contentList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
