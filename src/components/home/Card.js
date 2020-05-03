import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.addedClass}`}>
        <img className="card-image" src={this.props.src} alt={this.props.alt} />
        <div className="card-text-container">
          <h3 className="card-title">{this.props.title}</h3>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
