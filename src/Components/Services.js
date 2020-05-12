import React, { Component } from "react";
import "../Styles/Services.scss";
import inspect from "../Images/inspect.png";
import repair from "../Images/repair.png";
import build from "../Images/build.png";
import services from "../Images/services.png";

class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <div className="services-summary">
          <img src={services} alt="services" />
          <p>
            Our staff of experience, certified technicians will keep your guitar
            and other equipment in peak playing condition and help you get the
            most out of your investment.{" "}
          </p>
        </div>
        <div className="service-card-container">
          <div className="service">
            <img src={inspect} alt="inspect" />
            <h2>Inspect | Quote</h2>
            <p>
              We will conduct a thorough inspection on any guitar or pedal for
              any damages, warps, wiring, scratches, imperfections, etc.
            </p>
          </div>
          <div className="service">
            <img src={repair} alt="repair" />
            <h2>Repair | Restore</h2>
            <p>
              Fully repair and restore any guitar or pedal, from cracks to warps
              to wiring <br /> ( All repairs includes re-string, clean & polish
              )
            </p>
          </div>
          <div className="service">
            <img src={build} alt="build" />
            <h2>Build</h2>
            <p>
              Partner with us to fully customize and create your dream guitar +
              pedalboard
            </p>
          </div>
        </div>
        <div className="service-questions">
          <h4>For questions on our services please contact (000) 000 - 0000</h4>
        </div>
      </div>
    );
  }
}

export default Services;
