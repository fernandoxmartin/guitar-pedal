import React, { Component } from "react";
import "../Styles/Home.scss";
import BestSellers from "../Components/BestSellers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo-gp-white.png";
library.add(fas);

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="banner">
          <img src={logo} alt="logo" />
          <h1>explore your creativity</h1>
        </div>

        <div className="promo-container">
          <div className="promo promo-left">
            <div className="promo-text">
              <h1>New</h1>
              <h1>Arrivals</h1>
            </div>
            <div className="promo-img"></div>
          </div>
          <div className="promo promo-right">
            <div className="promo-img"></div>
            <div className="promo-text">
              <h1>Weekly</h1>
              <h1>Deals</h1>
            </div>
          </div>
        </div>
        <div className="home-service-container">
          <div className="home-services">
            <div className="service-card">
              <FontAwesomeIcon
                className="service-icon"
                icon={["fas", "shipping-fast"]}
              />
              FREE SHIPPING
              <span>all orders</span>
            </div>
            <div className="service-card">
              <FontAwesomeIcon
                className="service-icon"
                icon={["fas", "tags"]}
              />
              LOWEST PRICES
              <span>price match guarenteed</span>
            </div>
            <div className="service-card">
              <FontAwesomeIcon
                className="service-icon"
                icon={["fas", "undo"]}
              />
              30-DAY RETURNS
              <span>hassle free</span>
            </div>
            <div className="service-card">
              <FontAwesomeIcon
                className="service-icon"
                icon={["fas", "credit-card"]}
              />
              FINANCE
              <span>easy payments</span>
            </div>
          </div>
        </div>
        <BestSellers />
        {/* <div className="top-products">
          <div className="top-products-container">
            <h2>Top Guitars</h2>
            <div className="products">
              <img src={guit1} alt="guitar" />
              <img src={guit2} alt="guitar" />
              <img src={guit3} alt="guitar" />
              <img src={guit4} alt="guitar" />
              <img src={guit5} alt="guitar" />
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
        </div> */}
      </div>
    );
  }
}

export default Home;
