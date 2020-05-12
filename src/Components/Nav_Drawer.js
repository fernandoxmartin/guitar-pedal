import React from "react";
import "../Styles/Nav_Drawer.scss";
import { Link } from "react-router-dom";

const navDrawer = (props) => {
  let navDrawerClass = "side-nav";
  if (props.show) {
    navDrawerClass = "side-nav open";
  }
  return (
    <div className={navDrawerClass}>
      <div className="side-nav-container">
        <ul>
          <Link to="/guitars" onClick={props.navClickHandler}>
            <li>Guitars</li>
          </Link>
          <Link to="/pedals" onClick={props.navClickHandler}>
            <li>Pedals</li>
          </Link>
          <Link to="/services" onClick={props.navClickHandler}>
            <li>Services</li>
          </Link>
          <Link to="/support" onClick={props.navClickHandler}>
            <li>Support</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default navDrawer;
