import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/bhavik-rajpal-868427212/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          
          <a href="https://github.com/bhavikrajpal49"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 Bhavik Rajpal</p>
    </div>
  );
}

export default Footer;