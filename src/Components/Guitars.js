import React, { useState, useEffect } from "react";
import "../Styles/Guitars.scss";
import guitarBanner from "../Images/guitars.png";
//import { addToCart } from "./actions";
import { useDispatch } from "react-redux";
import { add } from "./Actions/index";

const Guitars = (props) => {
  const [guitars, setGuitars] = useState([]);
  useEffect(() => {
    fetch("./Items/guitars.json")
      .then((res) => res.json())
      .then((data) => {
        setGuitars(data.data);
      });
  }, []);

  const filterGuitars = (e) => {
    fetch("./Items/guitars.json")
      .then((res) => res.json())
      .then((data) => {
        data = data.data.filter((guitar) => {
          return guitar.type.includes(`${e}`);
        });
        setGuitars(data);
      });
  };

  const showAll = () => {
    fetch("./Items/guitars.json")
      .then((res) => res.json())
      .then((data) => {
        setGuitars(data.data);
      });
  };

  const dispatch = useDispatch();

  return (
    <div className="guitar-container">
      <div className="banner">
        <img src={guitarBanner} alt="guitar banner" />
      </div>
      <div className="guitar-option-container">
        <div className="guitar-options">
          <button
            className="option"
            value={"Acoustic"}
            onClick={(e) => filterGuitars(e.target.value)}
          >
            Acoustic
          </button>
          <button
            className="option"
            value={"Electric"}
            onClick={(e) => filterGuitars(e.target.value)}
          >
            Electric
          </button>
          <button className="option" onClick={() => showAll()}>
            View All
          </button>
        </div>
      </div>
      <div className="guitar-list-container">
        {guitars.map((item) => (
          //const cents = item.price.toString().slice(-2);
          <div className="item" key={item.id}>
            <img
              src={require("../Images/guitars" + item.img)}
              alt={item.name}
            />
            <h4>{item.name}</h4>
            <h3>
              ${item.price.toString().slice(0, -3)}
              <sup>.</sup>
            </h3>
            <div className="add-item-container">
              <button className="add-item" onClick={() => dispatch(add(item))}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guitars;
