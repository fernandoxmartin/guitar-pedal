import React, { useEffect, useState } from "react";
import "../Styles/BestSellers.scss";

const BestSellers = (props) => {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    Promise.all([fetch("./Items/guitars.json"), fetch("./Items/pedals.json")])
      .then((res) => {
        return Promise.all(
          res.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        let totalData = data.concat(data[0].data, data[1].data);
        totalData = totalData.filter((guitar) => {
          return guitar.sold >= 10;
        });
        totalData.sort((a, b) => (a.sold < b.sold ? 1 : -1));
        setBestSellers(totalData);
      });
  });
  return (
    <div className="best-sellers-container">
      <h2>Best Sellers</h2>
      <div className="best-sellers">
        {bestSellers.slice(0, 4).map((item) => (
          <div className="seller" key={item.id}>
            {item.id < 200 ? (
              <img
                src={require("../Images/guitars" + item.img)}
                alt={item.name}
              />
            ) : (
              <img
                src={require("../Images/pedals" + item.img)}
                alt={item.name}
              />
            )}
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSellers;
