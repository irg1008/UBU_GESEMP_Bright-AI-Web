import React from "react";
import logoFooter from "../images/logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper-container">
        <div className="footer-logo">
          <img src={logoFooter} alt="bright-ai-logo" />
        </div>
        <div className="footer-separator"></div>
        <div className="footer-redes-container">
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
        </div>
      </div>
      <div className="footer-final"></div>
    </footer>
  );
}