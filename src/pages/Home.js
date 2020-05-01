import React from "react";
import HeroContainer from "../components/HeroContainer";
import Title from "../components/Title";
import CardContainer from "../components/CardContaner";
import TimeLine from "../components/TimeLine";
import howitworks from "../images/howitworks.png";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <section id="introduccion">
        <Title title="deja que nuestra tecnología hable por nosotros" />
        <CardContainer />
      </section>
      <div className="separator" />
      <section id="funcionamiento">
        <Title title="cómo funciona" />
        <div className="timeline-container">
          <div className="timeline">
            <TimeLine />
          </div>
          <div className="timeline-image">
            <img src={howitworks} alt="bright-ai-howitworks" />
          </div>
        </div>
      </section>
    </>
  );
}
