import React from "react";
import "../Styles/Nav.scss";
import NavButton from "./Nav_Button";
import NavLinks from "./NavLinks";
import ShoppingCartButton from "./ShoppingCartButton";
import logo from "../Images/small-logo.png";
import { Link } from "react-router-dom";

const Nav = (props) => (
  <header>
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <NavLinks />
        <h5>Guitar & Pedal</h5>
        <div className="nav-right">
          <ShoppingCartButton
            cartShow={props.cartShow}
            click={props.cartClickHandler}
          />
        </div>
      </div>
    </nav>
    <NavButton navOpen={props.navShow} click={props.navClickHandler} />
  </header>
);

export default Nav;
