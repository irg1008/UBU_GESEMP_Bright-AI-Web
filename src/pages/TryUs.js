import React, { Component } from "react";
import SectionHero from "../components/others/SectionHero";
import heroBG from "../images/try-hero.jpg";
import DropzoneContainer from "../components/try/DropFilesZone"

export default class TryUs extends Component {
  render() {
    return (
      <div className="try-container">
        <SectionHero
          image={heroBG}
          alt="hero-try"
          title="Pruébalo tu mismo"
          subtitle="Espera respuestas divertidas"
        />
        <div className="form-holder">
            <div className="form-container">
                <DropzoneContainer />
            </div>
        </div>
      </div>
    );
  }
}
