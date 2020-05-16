import React, { Component } from "react";
import "../Styles/Support.scss";
import support from "../Images/support.png";

class Support extends Component {
  render() {
    return (
      <div className="support-container">
        <div className="support-banner">
          <img src={support} alt="support" />
          <h3>Here for you</h3>
        </div>
        <div className="faq">
          <h2>FAQ</h2>
        </div>
      </div>
    );
  }
}

export default Support;
