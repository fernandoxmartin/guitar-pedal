import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subTotal, removeItem, removeAll } from "./Actions/index";
import Modal from "./Modals";
import "../Styles/ShoppingCart.scss";

const ShoppingCart = (props) => {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const cartItems = useSelector((state) => state.cartReducer.prod);
  const cartSubTotal = useSelector((state) => state.totalReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    setItems(cartItems);
    const subTotalPrice = () => {
      let items = cartItems.map((item) => item.price);
      dispatch(subTotal(items));
    };
    subTotalPrice();
  }, [cartItems, dispatch]);

  const orderTax = parseFloat(cartSubTotal * 0.08).toFixed(2);
  const orderTotal = (Number(cartSubTotal) + Number(orderTax)).toFixed(2);

  const placeOrder = () => {
    setModal(!modal);
    dispatch(removeAll());
    localStorage.clear();
  };

  return (
    <>
      <Modal click={placeOrder} isOpen={modal} msg="Order Placed, Thank you!" />
      <div
        className="shopping-cart-container"
        style={items.length < 1 ? { height: "100vh" } : { height: "100%" }}
      >
        <div className="summary">
          <h3>Shopping Cart</h3>
          <div className="cart-subtotal">
            <h5>
              <span>Sub Total - </span>${cartSubTotal}
            </h5>
          </div>
        </div>

        <div className="cart-container">
          <div className="cart-items-container">
            {items.map((item) => {
              let imgDir = item.id < 200 ? "guitars" : "pedals";
              return (
                <div className="item" key={item.id}>
                  <h5>{item.name}</h5>
                  <div className="item-details">
                    <div className="item-img">
                      <img
                        src={require("../Images/" + imgDir + item.img)}
                        alt={item.name}
                      />
                    </div>

                    <div className="item-price">
                      <p>${item.price}</p>
                      <form>
                        <label>Qty</label>
                        <input type="number" placeholder="1" />
                      </form>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-summary">
            <div className="order-total">
              <div className="desc">
                Sub Total <span>${cartSubTotal}</span>
              </div>
              <div className="desc free">
                Shipping <span>FREE</span>
              </div>
              <div className="desc">
                Sales Tax <span>${orderTax}</span>
              </div>
              <div className="desc total">
                Total <span>${orderTotal}</span>
              </div>
            </div>
            <button className="order-button" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
