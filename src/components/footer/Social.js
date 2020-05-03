import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Social(props) {
  return (
    <div className={`${props.addedClass} footer-icons-container`}>
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
  );
}
