import React from "react";
import "../Styles/Nav_Button.scss";
import plus from "../Images/plus.png";

const navButton = (props) => {
  return (
    <>
      <button className="toggleNav-button" onClick={props.click}>
        <img
          src={plus}
          alt="nav button"
          style={props.navOpen ? { transform: "rotate(45deg)" } : {}}
        />
      </button>
    </>
  );
};

export default navButton;
