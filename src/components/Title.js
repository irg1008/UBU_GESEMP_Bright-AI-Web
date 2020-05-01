import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="section-title">
        <h3>{this.props.title}</h3>
        <div />
      </div>
    );
  }
}
