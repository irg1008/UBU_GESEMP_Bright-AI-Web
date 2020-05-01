import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { HamburgerSqueeze as Hamburger } from "react-animated-burgers";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-main">
            <Link to="/">
              <img className="navbar-logo" src={logo} alt="" />
            </Link>
          <div className="navbar-button">
            <Hamburger
              className="navbar-button-burguer"
              isActive={this.state.isOpen}
              toggleButton={this.handleToggler}
            />
          </div>
        </div>
        <ul
          className={
            this.state.isOpen
              ? "navbar-links navbar-links-show"
              : "navbar-links"
          }
        >
          <li>
            <Link onClick={this.handleToggler} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link onClick={this.handleToggler} to="/contacto">
              Contacto
            </Link>
          </li>
          <li>
            <Link onClick={this.handleToggler} to="/pruebalo">
              Pruébalo
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
