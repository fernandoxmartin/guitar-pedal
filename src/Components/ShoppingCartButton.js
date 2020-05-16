import React from "react";
import "../Styles/ShoppingCartButton.scss";
import cart from "../Images/cart2.png";

const ShoppingCartButton = (props) => {
  return (
    <>
      <button className="cart-button" onClick={props.click}>
        <img src={cart} alt="cart" />
      </button>
    </>
  );
};

export default ShoppingCartButton;
