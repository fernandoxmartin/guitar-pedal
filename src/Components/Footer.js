import React, { Component } from "react";
import "../Styles/Footer.scss";
import logo from "../Images/logo-gp-black.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-block">
            <img src={logo} alt="logo" />
            <p>Explore your creativity</p>
          </div>
          <div className="footer-block">
            <h3>Location</h3>
            <p>
              909 Main Street <br /> Redlands, CA 92374
            </p>
          </div>
          <div className="footer-block">
            <h3>Hours</h3>
            <p>
              Mon - Fri (10AM - 8PM) <br /> Sat - Sun (9AM - 8PM)
            </p>
          </div>
          <div className="footer-block">
            <h3>Contact</h3>
            <div className="social">
              <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
              <FontAwesomeIcon className="icon" icon={["fab", "instagram"]} />
              <FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
