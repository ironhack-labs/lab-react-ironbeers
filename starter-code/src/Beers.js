import React from "react";
import beersImg from "../public/images/beers.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Beers = function() {
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img src={beersImg} className="card-img-top" alt="BeersPicture" />
      <div className="card-body">
        <h3 className="card-title" style={{ color: "black" }}>
          All Beers
        </h3>
        <p className="card-text" style={{ color: "grey" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
          veritatis consectetur quidem qui. Eius facilis odit assumenda dolore
        </p>
      </div>
    </div>
  );
};

export default Beers;
