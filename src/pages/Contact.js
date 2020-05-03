import React, { Component } from "react";
import SectionHero from "../components/others/SectionHero";
import heroBG from "../images/contacto-hero.jpg";
import Form from "../components/contact/Form";
import Social from "../components/footer/Social";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      completedForm: false,
    };
  }

  formIsCompleted = (changeSent) => {
    this.setState({
      completedForm: changeSent,
    });
  };

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
              <Form isSent={this.formIsCompleted.bind(this)} />
            </div>
            <div className="form-info">
              <Social addedClass="white-icons" />
              <div>
                <p className="form-text">Sede en Burgos, España</p>
                <a
                  className="form-link"
                  href="https://goo.gl/maps/ErCKM4GzG1vmaEZP7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obtener direcciones
                </a>
              </div>
              <div>
                <p className="form-text">Contacto:</p>
                <a className="form-link" href="mailto:brightai@mail.com">
                  brightai@mail.com
                </a>
              </div>
            </div>
          </div>
          {this.state.completedForm ? (
            <div className="form-send">Enviado</div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
