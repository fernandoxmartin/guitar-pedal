import React, { useState, useEffect } from "react";
import "../Styles/Pedals.scss";
import pedalBanner from "../Images/pedals.png";
import { useDispatch } from "react-redux";
import { add } from "./Actions/index";

const Pedals = (props) => {
  const [pedals, setPedals] = useState([]);
  useEffect(() => {
    fetch("./Items/pedals.json")
      .then((res) => res.json())
      .then((data) => {
        setPedals(data.data);
      });
  }, []);

  const filterPedals = (e) => {
    fetch("./Items/pedals.json")
      .then((res) => res.json())
      .then((data) => {
        data = data.data.filter((pedal) => {
          let pedals = e.split(",");
          return pedals.some((x) => pedal.type.includes(x));
        });
        setPedals(data);
      });
  };

  const dispatch = useDispatch();

  return (
    <div className="pedal-container">
      <div className="banner">
        <img src={pedalBanner} alt="pedal banner" />
      </div>
      <div className="pedal-option-container">
        <div className="pedal-options">
          <button
            className="option"
            value={["Distortion", "Overdrive"]}
            onClick={(e) => filterPedals(e.target.value)}
          >
            Distortion / OverDrive
          </button>
          <button
            className="option"
            value={["Reverb", "Delay"]}
            onClick={(e) => filterPedals(e.target.value)}
          >
            Reverb / Delay
          </button>
          <button
            className="option"
            value={["Chorus", "Vibrato"]}
            onClick={(e) => filterPedals(e.target.value)}
          >
            Chorus / Vibrato
          </button>
          <button
            className="option"
            value={["Phaser", "Looper"]}
            onClick={(e) => filterPedals(e.target.value)}
          >
            Phaser / Looper
          </button>
          <button
            className="option"
            value={["Compressor", "EQ"]}
            onClick={(e) => filterPedals(e.target.value)}
          >
            Compressor / EQ
          </button>
        </div>
      </div>
      <div className="pedal-list-container">
        {pedals.map(function (item) {
          const cents = item.price.toString().slice(-2);
          return (
            <div className="item" key={item.id}>
              <img
                src={require("../Images/pedals" + item.img)}
                alt={item.name}
              />
              <h4>{item.name}</h4>
              <h3>
                ${item.price.toString().slice(0, -3)}
                <sup>.{cents}</sup>
              </h3>
              <div className="add-item-container">
                <button
                  className="add-item"
                  onClick={() => dispatch(add(item))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pedals;
