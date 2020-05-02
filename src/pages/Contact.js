import React, { Component } from "react";
import SectionHero from "../components/SectionHero";
import heroBG from "../images/contacto-hero.jpg";
import Form from "../components/Form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <SectionHero
          image={heroBG}
          alt="hero-contacto"
          title="Contáctanos"
          subtitle="Juntos construiremos algo grande"
        />
        <div className="form-holder">
          <div className="form-container">
            <div className="form">
              <Form />
            </div>
            <div className="form-info"></div>
          </div>
        </div>
      </div>
    );
  }
}
