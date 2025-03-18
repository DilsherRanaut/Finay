import React from "react";
import CallToAction from "../components/CallToAction";
import conversationBg from "../assets/images/conversation-bg.png"

export default function ConversationSection() {
  return (
    <section className="ConversationSection section">
      <div className="ConversationSection-outer outer-section" style={{background: `url(${conversationBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "20px"}}>
        <div className="container">
          <div className="ConversationSection-inner inner-section">
            <CallToAction  title={<>Let’s Jam—No Pressure, Just a Conversation</> } description={<>We’re Here to Answer Questions, Swap Ideas, or Just Talk Music.</>}  btnOneName="Drop Us a Line" btnOneUrl="#" btnTwoName="Let’s Chat" btnTwoUrl="#"/>
          </div>
        </div>
      </div>
    </section>
  );
}
