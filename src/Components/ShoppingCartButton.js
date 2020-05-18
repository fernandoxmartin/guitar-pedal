import React from "react";
import "../Styles/ShoppingCartButton.scss";
import cart from "../Images/cart2.png";
import { useSelector } from "react-redux";

const ShoppingCartButton = (props) => {
  const cartQty = useSelector((state) => state.cartReducer.qty);
  return (
    <>
      <button className="cart-button" data-qty={cartQty} onClick={props.click}>
        <img src={cart} alt="cart" />
      </button>
    </>
  );
};

export default ShoppingCartButton;
