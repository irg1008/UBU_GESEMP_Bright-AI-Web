import React from "react";
import logoFooter from "../images/logo-footer.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper-container">
        <img src={logoFooter} alt="bright-ai-logo" className="footer-logo" />
        <div className="footer-separator"></div>
        <div className="footer-icons-container">
          <a href="#github">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="#twitter">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="#face">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="#insta">
            <InstagramIcon fontSize="large" />
          </a>
        </div>
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
