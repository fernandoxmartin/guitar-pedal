import React from "react";
import "../Styles/Modals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Modal = (props) => {
  return (
    <div
      className={
        props.isOpen ? "modal-container open" : "modal-container close"
      }
      onClick={props.click}
    >
      <div className="modal-center">
        <FontAwesomeIcon
          className="modal-icon"
          icon={["fas", "check-circle"]}
        />
        <h1>{props.msg}</h1>
      </div>
    </div>
  );
};

export default Modal;
