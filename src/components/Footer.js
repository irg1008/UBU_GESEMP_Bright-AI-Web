import React from "react";
import logoFooter from "../images/logo-footer.png";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";
import Social from "../components/Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper-container">
        <img src={logoFooter} alt="bright-ai-logo" className="footer-logo" />
        <div className="footer-separator"></div>
        <Social addedClass="black-icons" />
      </div>
      <div className="footer-final">
        <p>Bright AI</p>
        <div className="footer-final-icon">
          <ClosedCaptionIcon />
        </div>
        <p>Open Source Project</p>
      </div>
    </footer>
  );
}
