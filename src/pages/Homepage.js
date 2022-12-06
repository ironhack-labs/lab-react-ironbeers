import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../assets/beers.png";
import img2 from "../assets/new-beer.png";

import img3 from "../assets/random-beer.png";

const Homepage = () => {
  return (
    <div className="row p-5">
      <div className="col-sm-4">
        <NavLink to="/beers">
          <div className="card" style={{ width: "20rem" }}>
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">BEERS</h5>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="col-sm-4">
        <NavLink to="/random">
          <div className="card" style={{ width: "20rem" }}>
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">RANDOM BEER</h5>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="col-sm-4">
        <NavLink to="/new ">
          <div className="card" style={{ width: "20rem" }}>
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">NEW</h5>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;