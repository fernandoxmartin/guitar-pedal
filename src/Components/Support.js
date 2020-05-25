import React, { Component } from "react";
import "../Styles/Support.scss";
import support from "../Images/support.png";
import { FAQ } from "./FAQ";

class Support extends Component {
  reveal = (e) => {
    e.parentElement.nextSibling.classList.toggle("answer-open");
  };

  render() {
    const questions = FAQ.map((question) => {
      return (
        <>
          <div className="question">
            <h4>{question.question}</h4>
            <button className="arrow" onClick={(e) => this.reveal(e.target)} />
          </div>
          <div className="answer">
            <p>{question.answer}</p>
          </div>
        </>
      );
    });
    return (
      <div className="support-container">
        <div className="support-banner">
          <img src={support} alt="support" />
          <h3>Here for you</h3>
        </div>
        <div className="faq">
          <h2>FAQ</h2>
          {questions}
        </div>
      </div>
    );
  }
}

export default Support;
