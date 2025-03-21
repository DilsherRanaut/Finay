import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const faqs = [
    {
      title: (
        <>
          How Do You Know Artists and Fans Will{" "}
          <span className="text-orange">Embrace Web3?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>No learning curve.</strong> Finay works like Twitch and
              Patreon—no wallets, no crypto required.
            </li>
            <li>
              <strong>Familiar first, Web3 later.</strong> Artists monetize
              instantly. Fans buy, sell, and engage—Web3 features unlock
              naturally over time.
            </li>
            <li>
              <strong>
                Why Web3 adoption struggles elsewhere—but won't here.
              </strong>{" "}
              Other platforms overwhelm users with crypto tools. Finay does the
              opposite —{" "}
              <strong>
                Web3 runs in the background until users are ready.
              </strong>
            </li>
            <li>
              <strong>No forced blockchain jump. </strong> Users can engage
              without touching Web3—but when they do, it's seamless and
              rewarding.
            </li>
            <li>
              Artists follow opportunity. Fans follow artists.{" "}
              <strong>Finay's Ambassador Program fuels both</strong> — rewarding
              early adopters for leading the movement.
            </li>
            <li>
              <strong>"Finay Makes Web3 Invisible."</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          Why Doesn't <span className="text-orange">Finay</span> Have a User
          Base Yet?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>
                Because artists have heard the promises before. This time, they
                want proof.
              </strong>
            </li>
            <li>
              Every new platform claims to be “better for artists.” But when the
              payouts come, it's the same story—scraps.{" "}
              <strong>They won't move until they see real earnings.</strong>
            </li>
            <li>
              That's why Finay is launching dierently:
              <ul>
                <li>
                  <strong>
                    The Ambassador Program guarantees early artists make more in
                    weeks than they do from streaming in years.
                  </strong>
                </li>
                <li>
                  <strong>
                    Artists are incentivized to bring their peers—because when
                    others succeed, they prot too.
                  </strong>
                </li>
                <li>
                  <strong>
                    Fans fuel the movement—inviting others increases the value
                    of their own assets.
                  </strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>Why hasn't this been done before?</strong> Because
              existing platforms can't aord to. Their business models would
              collapse.{" "}
              <strong> Finay was built for this from day one. </strong>
            </li>

            <li>
              <strong>
                "Momentum is building. Artists are waiting. Are you ready to
                lead the change?"
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          So Why Wait? Why Not <span className="text-orange"> Launch</span>{" "}
          Small and Grow?{" "}
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Because trust is the most valuable currency.</strong>
            </li>
            <li>
              Artists have seen platforms launch with big promises before—{" "}
              <strong> and they've seen them fail.</strong> A weak start doesn't
              build momentum. It kills it.{" "}
              <strong>
                If we can't pay artists what they deserve from day one, we lose
                them forever.
              </strong>
            </li>

            <li>
              That's why Finay is doing it dierently:
              <ul>
                <li>
                  The Ambassador Program guarantees{" "}
                  <strong> early artists get paid upfront.</strong>
                </li>
                <li>
                  <strong> A rushed launch with no real payouts</strong> would
                  make Finay just <strong> another false promise.</strong>
                </li>
                <li>
                  We aren't testing ideas—{" "}
                  <strong> we're executing a strategy built for scale.</strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>
                {" "}
                Music platforms fail when they ask artists to believe first.
              </strong>{" "}
              Finay is built to let them <strong>see the results.</strong>
            </li>
            <li>
              <strong>
                "The moment artists see real earnings, the oodgates open. This
                is how we start a movement."
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          What If <span className="text-orange">Spotify</span> Adapts?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>
                Big platforms prot from control. Finay prots by giving it back.
              </strong>
            </li>
            <li>
              Spotify's entire business model depends on taking a cut from
              artists and keeping fans locked into subscriptions.{" "}
              <strong>
                To compete with Finay, they'd have to tear it all down and
                rebuild from scratch—at the cost of their own profits.
              </strong>
            </li>
            <li>
              Their infrastructure is{" "}
              <strong>built for streaming, not ownership.</strong>{" "}
            </li>
            <li>
              Cutting middlemen means cutting their{" "}
              <strong>own revenue streams.</strong>
            </li>
            <li>
              Even if they tried, Web3 isn't a feature—{" "}
              <strong>it's a fundamental shift.</strong>
            </li>
            <li>
              <strong>
                The music industry isn't waiting for Spotify to change.{" "}
              </strong>
              Artists and fans are already moving toward ownership.{" "}
              <strong>
                The question isn't if Spotify will adapt—it's whether they'll
                even be relevant when they try.
              </strong>
            </li>
            <li>
              <strong>
                "By the time they react, ownership will be the new standard."
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          What If You Don't Get <span className="text-orange">Funding?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong> We wait</strong> —because launching the{" "}
              <strong>right way </strong> is more important than launching fast.{" "}
            </li>
            <li>
              {" "}
              Finay isn't here to play by the same rules that have failed
              artists for decades.{" "}
              <strong>
                If we can't pay them fairly from day one, we won't launch.
                Period.
              </strong>{" "}
            </li>
            <li>
              {" "}
              That means:
              <ul>
                <li>
                  <strong>
                    We won't exploit artists just to get traction.{" "}
                  </strong>{" "}
                  Exposure isn't payment, and promises aren't pro
                </li>
                <li>
                  <strong>We believe in building something that lasts. </strong>
                  Cutting corners may launch a product, but it won't build a
                  movement.{" "}
                </li>
                <li>
                  <strong> Trust is earned.</strong> We need to show the music
                  community that we're different
                </li>
              </ul>
            </li>
            <li>
              <strong>If needed, we'll take this to the people. </strong> The
              music community has been waiting for a platform like this, and
              crowdfunding is always an option. But we're looking for{" "}
              <strong>strategic partners</strong> —investors who bring more than
              just capital, who see the long-term vision and want to help shape
              it.
            </li>
            <li>
              <strong>
                "The future of music is unwritten. If you share this vision,
                let's write it together."
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          Is This a Niche Play or a{" "}
          <span className="text-orange">Mainstream Shift?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Not a niche, a movement.</strong> The industry isn’t
              evolving <strong>artists and fans are forcing change.</strong>
            </li>
            <li>
              <strong>Streaming is broken.</strong> Artists keep earning cents,
              while fans keep paying more.{" "}
              <strong>
                They aren’t waiting for a solution—they’re searching for one.
              </strong>
            </li>
            <li>
              <strong>Why hasn’t this happened before? </strong> Labels,
              platforms, and middlemen prot from control.
              <strong> There’s no incentive for them to change.</strong>
            </li>
            <li>
              <strong>The shift has already begun.</strong> Artists are moving
              to Patreon, Twitch, and direct monetization.{" "}
              <strong>
                Finay unies these fragmented solutions into one seamless
                platform.
              </strong>
            </li>
            <li>
              <strong>Why Finay? </strong> It’s the only platform where artists
              set prices, fans buy & resell, and the entire community shares in
              success. <strong> No other platform offers this</strong>
            </li>
            <li>
              <strong>
                “This isn’t a niche. It’s an industry-wide correction.”
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          What Stops Artists from Just Using{" "}
          <span className="text-orange">Patreon, YouTube,</span> or{" "}
          <span className="text-orange">Twitch</span> Instead?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Not built for music.</strong> . Patreon, YouTube, and
              Twitch are general platforms—{" "}
              <strong>Finay is purpose-built for artists.</strong>
            </li>
            <li>
              <strong>Artists don’t just monetize—they own.</strong> On Finay,
              artists{" "}
              <strong>
                set prices, earn royalties, and control distribution.
              </strong>{" "}
              No other platform oers this.
            </li>
            <li>
              <strong>One platform, not a patchwork.</strong> Artists juggle
              multiple tools to monetize—{" "}
              <strong>
                Finay unies streaming, direct sales, and fan engagement in one
                ecosystem
              </strong>
            </li>
            <li>
              <strong>Fans benefit, too. </strong> Unlike other platforms, fans
              don’t just consume—they <strong>own, resell, and profit.</strong>{" "}
              This builds a <strong>self-sustaining econom</strong> no other
              platform enables.
            </li>
            <li>
              {" "}
              <strong>Why can’t existing platforms copy this?</strong> They’re
              ad-driven, engagement-based, and controlled by algorithms.{" "}
              <strong>
                Finay is creator-rst, built for ownership—not views
              </strong>
            </li>
            <li>
              <strong>Why does this matter for major artists?</strong> Bigger
              artists have <strong>fought for ownership</strong> for decades—{" "}
              <strong>from Taylor Swift to Prince.</strong> Finay is the rst
              platform that <strong>gives them the control </strong> they’ve
              always <strong>demanded.</strong>
            </li>
            <li>
              <strong>
                Patreon, Twitch, and YouTube monetize engagement—Finay monetizes
                ownership.
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          Why Hasn’t Someone Like <span className="text-orange">Spotify</span>{" "}
          or <span className="text-orange">YouTube</span> Already Done This?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Not built for music.</strong> . Patreon, YouTube, and
              Twitch are general platforms—{" "}
              <strong>Finay is purpose-built for artists.</strong>
            </li>
            <li>
              <strong>Artists don’t just monetize—they own.</strong> On Finay,
              artists{" "}
              <strong>
                set prices, earn royalties, and control distribution.
              </strong>{" "}
              No other platform oers this.
            </li>
            <li>
              <strong>One platform, not a patchwork.</strong> Artists juggle
              multiple tools to monetize—{" "}
              <strong>
                Finay unies streaming, direct sales, and fan engagement in one
                ecosystem
              </strong>
            </li>
            <li>
              <strong>Fans benefit, too. </strong> Unlike other platforms, fans
              don’t just consume—they <strong>own, resell, and profit.</strong>{" "}
              This builds a <strong>self-sustaining econom</strong> no other
              platform enables.
            </li>
            <li>
              {" "}
              <strong>Why can’t existing platforms copy this?</strong> They’re
              ad-driven, engagement-based, and controlled by algorithms.{" "}
              <strong>
                Finay is creator-rst, built for ownership—not views
              </strong>
            </li>
            <li>
              <strong>Why does this matter for major artists?</strong> Bigger
              artists have <strong>fought for ownership</strong> for decades—{" "}
              <strong>from Taylor Swift to Prince.</strong> Finay is the rst
              platform that <strong>gives them the control </strong> they’ve
              always <strong>demanded.</strong>
            </li>
            <li>
              <strong>
                Patreon, Twitch, and YouTube monetize engagement—Finay monetizes
                ownership.
              </strong>
            </li>
          </ul>
        </>
      ),
    },

    {
      title: (
        <>
          How Does Finay Make <span className="text-orange">Money?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Aligned incentives.</strong> Finay doesn’t rely on ads or
              subscriptions—
              <strong>it earns when artists and fans transact. </strong>
            </li>
            <li>
              <strong>
                Multiple sources. Every sale—whether an original purchase or
                resale—generates revenue.{" "}
              </strong>
              This includes songs, albums, Backstage Passes, livestreams, music
              lessons, and more.
            </li>
            <li>
              <strong>A model that scales. </strong> Unlike streaming services
              that rely on massive user growth,{" "}
              <strong>
                Finay grows with its users—more content, more engagement, more
                transactions.{" "}
              </strong>
            </li>
            <li>
              <strong>Marketplaces win big.</strong> The most successful
              platforms—
              <strong>
                {" "}
                Amazon, OpenSea, Ticketmaster—prove that transaction-based
                revenue outscales ad-driven models.{" "}
              </strong>
            </li>
            <li>
              <strong>Built for active engagement.</strong> Unlike passive
              streaming, Finay is designed to drive transactions—
              <strong>
                {" "}
                fans don’t just listen, they buy, sell, and participate.
              </strong>
            </li>
            <li>
              <strong>“Finay wins when its community wins.”</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          What’s the Long-Term <span className="text-orange">Vision</span> for
          Finay?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>From marketplace to movement.</strong> Finay starts as a
              platform, but it’s built to evolve—
              <strong>toward full community ownership.</strong>
            </li>
            <li>
              <strong>A decentralized future.</strong> The Finay platform will
              transition into a{" "}
              <strong>
                DAO, where governance belongs to the people who create, support,
                and invest in music.
              </strong>
            </li>
            <li>
              <strong>
                Investor role in decentralization. Finay Inc. remains the
                holding company, responsible for platform maintenance and
                development.{" "}
              </strong>
              Investors hold equity in Finay Inc., ensuring they continue to
              profit as the ecosystem scales.
            </li>
            <li>
              <strong>Why a DAO?</strong> Music platforms have always been
              controlled from the top down.{" "}
              <strong>
                A DAO ensures transparency, fair revenue distribution, and
                community-driven decision-making—while the holding company
                drives execution.{" "}
              </strong>
            </li>
            <li>
              <strong>The Ambassador Program</strong> isn’t just about
              onboarding—it’s about ownership. The artists and influencers
              growing Finay today are the<strong> leaders of its DAO</strong>{" "}
              tommorow
            </li>
            <li>
              <strong>Beyond music. </strong>The creator economy is shifting—{" "}
              <strong>
                Finay is positioned to lead the ownership revolution, proving
                that industries should be run by the people who power them.{" "}
              </strong>
            </li>
            <li>
              <strong>
                “Music’s past was controlled. Its future will be owned.”{" "}
              </strong>
            </li>
          </ul>
        </>
      ),
    },

    {
      title: (
        <>
          What Are the <span className="text-orange">Investment</span> Terms?
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>Investment options.</strong> Finay offers
              <strong> SAFE and priced equity investment options, </strong>
              ensuring flexibility for different investor preferences.
            </li>
            <li>
              <strong>Equity in Finay Inc.</strong> Investors receive equity in{" "}
              <strong>
                Finay Inc., the holding company driving platform development,
                revenue, and growth.
              </strong>
            </li>
            <li>
              <strong>Scalable growth & exit strategy.</strong> As Finay scales,
              investor value grows through{" "}
              <strong>
                increased valuation, future funding rounds, planned dividends,
                and potential liquidity events like acquisition or IPO.
              </strong>
            </li>
            <li>
              <strong>Early backer advantage.</strong> Investors at this stage
              secure{" "}
              <strong>
                {" "}
                preferred terms, positioning them ahead of later rounds at
                higher valuations.
              </strong>
            </li>
            <li>
              <strong>Investor security.</strong> SAFE investments convert into
              equity, ensuring protection regardless of future pivots or
              expansions.
            </li>
            <li>
              <strong>Liquidity & lock-up period.</strong> Investment lock-up
              terms vary by investor and round.
            </li>
            <li>
              <strong>
                We discuss these terms directly to align with investor
                expectations.
              </strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          How Do You Know Artists and Fans Will{" "}
          <span className="text-orange">Embrace Web3?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>No learning curve.</strong> Finay works like Twitch and
              Patreon—no wallets, no crypto required.
            </li>
            <li>
              <strong>Familiar rst, Web3 later.</strong> Artists monetize
              instantly. Fans buy, sell, and engage—Web3 features unlock
              naturally over time.
            </li>
            <li>
              <strong>
                Why Web3 adoption struggles elsewhere—but won't here.
              </strong>{" "}
              Other platforms overwhelm users with crypto tools. Finay does the
              opposite —{" "}
              <strong>
                Web3 runs in the background until users are ready.
              </strong>
            </li>
            <li>
              <strong>No forced blockchain jump. </strong> Users can engage
              without touching Web3—but when they do, it's seamless and
              rewarding.
            </li>
            <li>
              Artists follow opportunity. Fans follow artists.{" "}
              <strong>Finay's Ambassador Program fuels both</strong> — rewarding
              early adopters for leading the movement.
            </li>
            <li>
              <strong>"Finay Makes Web3 Invisible."</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          How Do You Know Artists and Fans Will{" "}
          <span className="text-orange">Embrace Web3?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>No learning curve.</strong> Finay works like Twitch and
              Patreon—no wallets, no crypto required.
            </li>
            <li>
              <strong>Familiar rst, Web3 later.</strong> Artists monetize
              instantly. Fans buy, sell, and engage—Web3 features unlock
              naturally over time.
            </li>
            <li>
              <strong>
                Why Web3 adoption struggles elsewhere—but won't here.
              </strong>{" "}
              Other platforms overwhelm users with crypto tools. Finay does the
              opposite —{" "}
              <strong>
                Web3 runs in the background until users are ready.
              </strong>
            </li>
            <li>
              <strong>No forced blockchain jump. </strong> Users can engage
              without touching Web3—but when they do, it's seamless and
              rewarding.
            </li>
            <li>
              Artists follow opportunity. Fans follow artists.{" "}
              <strong>Finay's Ambassador Program fuels both</strong> — rewarding
              early adopters for leading the movement.
            </li>
            <li>
              <strong>"Finay Makes Web3 Invisible."</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: (
        <>
          How Do You Know Artists and Fans Will{" "}
          <span className="text-orange">Embrace Web3?</span>
        </>
      ),
      content: (
        <>
          <ul>
            <li>
              <strong>No learning curve.</strong> Finay works like Twitch and
              Patreon—no wallets, no crypto required.
            </li>
            <li>
              <strong>Familiar rst, Web3 later.</strong> Artists monetize
              instantly. Fans buy, sell, and engage—Web3 features unlock
              naturally over time.
            </li>
            <li>
              <strong>
                Why Web3 adoption struggles elsewhere—but won't here.
              </strong>{" "}
              Other platforms overwhelm users with crypto tools. Finay does the
              opposite —{" "}
              <strong>
                Web3 runs in the background until users are ready.
              </strong>
            </li>
            <li>
              <strong>No forced blockchain jump. </strong> Users can engage
              without touching Web3—but when they do, it's seamless and
              rewarding.
            </li>
            <li>
              Artists follow opportunity. Fans follow artists.{" "}
              <strong>Finay's Ambassador Program fuels both</strong> — rewarding
              early adopters for leading the movement.
            </li>
            <li>
              <strong>"Finay Makes Web3 Invisible."</strong>
            </li>
          </ul>
        </>
      ),
    },
  ];

  // Slice the array into two parts
  const leftFaqs = faqs.slice(0, 7); // First 7 items
  const rightFaqs = faqs.slice(7); // Remaining 7 items

  // Function to handle accordion toggling (only one open at a time)
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="FaqSection section">
      <div className="FaqSection-outer outer-section">
        <div className="container">
          <div className="FaqSection-inner inner-section">
            <div className="section-title FaqSection-title align-center">
              <h2>
                We Get It - Investing{" "}
                <span className="text-orange">Requires </span>Answers.
              </h2>
            </div>
            <div className="FaqSection-description align-center">
              <p>
                Big opportunities come with big questions. Let's break it down.
              </p>
            </div>
            <div className="FaqSection-inner-faq-lists">
              <div className="FaqSection-inner-faq-lists-left">
                <div className="FaqSection-accordions">
                  {leftFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      title={faq.title}
                      content={faq.content}
                      isOpen={openIndex === index} // Open check
                      onClick={() => handleToggle(index)} // Toggle index
                    />
                  ))}
                </div>
              </div>
              <div className="FaqSection-inner-faq-lists-right">
                <div className="FaqSection-accordions">
                  {rightFaqs.map((faq, index) => {
                    const globalIndex = index + 7; // Shift index to avoid conflicts
                    return (
                      <AccordionItem
                        key={globalIndex}
                        title={faq.title}
                        content={faq.content}
                        isOpen={openIndex === globalIndex} // Open check
                        onClick={() => handleToggle(globalIndex)} // Toggle index
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
