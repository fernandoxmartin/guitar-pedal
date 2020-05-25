import React, { Component } from "react";
import "../Styles/Home.scss";
import guit1 from "../Images/guitars/00.webp";
import guit2 from "../Images/guitars/07.webp";
import guit3 from "../Images/guitars/08.webp";
import guit4 from "../Images/guitars/09.webp";
import ped1 from "../Images/pedals/01.webp";
import ped2 from "../Images/pedals/02.webp";
import ped3 from "../Images/pedals/05.webp";
import ped4 from "../Images/pedals/03.webp";
import gp from "../Images/logo-white.png";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="banner">
          <img src={gp} alt="banner" />
          <h2>Explore your creativity</h2>
        </div>
        <div className="promo">
          <div className="promo-container">
            <div className="promo-card-container">
              <div className="promo-card">
                <div className="promo-info">
                  <h4>
                    Bundle Any Guitar | Pedal Combo and <span>Save 30%</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-products">
          <div className="top-products-container">
            <h2>Top Guitars</h2>
            <div className="products">
              <img src={guit1} alt="guitar" />
              <img src={guit2} alt="guitar" />
              <img src={guit3} alt="guitar" />
              <img src={guit4} alt="guitar" />
            </div>
          </div>
        </div>
        <div className="top-products">
          <div className="top-products-container">
            <h2>Top Pedals</h2>
            <div className="products">
              <img src={ped1} alt="pedal" />
              <img src={ped2} alt="pedal" />
              <img src={ped3} alt="pedal" />
              <img src={ped4} alt="pedal" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
