import React from "react";

export default function SectionHero(props) {
  return (
    <div className="section-hero-container">
      <div className="section-hero-image">
        <img src={props.image} alt={props.alter} />
      </div>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
    </div>
  );
}
