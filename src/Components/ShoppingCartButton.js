import React from "react";
import "../Styles/ShoppingCartButton.scss";
import cart from "../Images/cart.png";

const ShoppingCartButton = (props) => {
  return (
    <>
      <button onClick={props.click}>
        <img src={cart} alt="cart" />
      </button>
    </>
  );
};

export default ShoppingCartButton;
