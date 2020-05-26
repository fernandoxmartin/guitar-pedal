import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavLinks.scss";

const NavLinks = () => {
  return (
    <div className="links-container">
      <ul>
        <Link to="/guitars">
          <li>Guitars</li>
        </Link>
        <Link to="/pedals">
          <li>Pedals</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/support">
          <li>Support</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
