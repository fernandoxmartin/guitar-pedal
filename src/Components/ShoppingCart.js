import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subTotal, removeItem } from "./Actions/index";
import "../Styles/ShoppingCart.scss";

const ShoppingCart = (props) => {
  const [items, setItems] = useState([]);
  const cartItems = useSelector((state) => state.cartReducer.prod);
  const cartSubTotal = useSelector((state) => state.totalReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    setItems(cartItems);
    subTotalPrice();
  }, [cartItems]);

  const subTotalPrice = () => {
    let items = cartItems.map((item) => item.price);
    dispatch(subTotal(items));
  };

  return (
    <div
      className={
        props.show ? "shopping-cart-container open" : "shopping-cart-container"
      }
    >
      <div className="summary">
        <h3>Shopping Cart</h3>
        <div className="cart-total">
          <h5>
            <span>Sub Total - </span>${cartSubTotal}
          </h5>
        </div>
      </div>

      <div className="cart-items-container">
        {items.map((item) => {
          let imgDir = item.id < 200 ? "guitars" : "pedals";
          return (
            <div className="item" key={item.id}>
              <img
                src={require("../Images/" + imgDir + item.img)}
                alt={item.name}
              />
              <div className="item-details">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item))}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
