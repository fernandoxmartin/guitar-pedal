import React, { useState, useEffect } from "react";
import "../Styles/Layout.scss";
import "../Styles/Pedals.scss";
import pedalBanner from "../Images/pedals.png";
import { useDispatch } from "react-redux";
import { add } from "./Actions/index";
import Modal from "./Modals";

const Pedals = (props) => {
  const [pedals, setPedals] = useState([]);
  const [modal, setModal] = useState(false);

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

  const addItem = (item) => {
    setModal(!modal);
    if (!modal) {
      dispatch(add(item));
    }
  };

  return (
    <>
      <Modal click={addItem} isOpen={modal} msg="Item Added To Cart!" />
      <div className="pedal-container container">
        <div className="banner">
          <img src={pedalBanner} alt="pedal banner" />
        </div>
        <div className="pedal-option-container option-container">
          <div className="pedal-options options">
            <button
              className="pedal-option option"
              value={["Distortion", "Overdrive"]}
              onClick={(e) => filterPedals(e.target.value)}
            >
              Distortion <br /> OverDrive
            </button>
            <button
              className="pedal-option option"
              value={["Reverb", "Delay"]}
              onClick={(e) => filterPedals(e.target.value)}
            >
              Reverb <br /> Delay
            </button>
            <button
              className="pedal-option option"
              value={["Chorus", "Vibrato"]}
              onClick={(e) => filterPedals(e.target.value)}
            >
              Chorus <br /> Vibrato
            </button>
            <button
              className="pedal-option option"
              value={["Phaser", "Looper"]}
              onClick={(e) => filterPedals(e.target.value)}
            >
              Phaser <br /> Looper
            </button>
            <button
              className="pedal-option option"
              value={["Compressor", "EQ"]}
              onClick={(e) => filterPedals(e.target.value)}
            >
              Compressor <br /> EQ
            </button>
          </div>
        </div>
        <div className="pedal-list-container list-container">
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
                  <button className="add-item" onClick={() => addItem(item)}>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pedals;
