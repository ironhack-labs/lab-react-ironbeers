import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

import beersPhoto from "../assets/beers.png";
import randomBeerPhoto from "../assets/random-beer.png";
import newBeerPhoto from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div className="home-page font-link">
      <Link to="/beers">
        <img src={beersPhoto} alt="yolo" />
        <h2>All Beers</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
      </Link>

      <Link to="/random-beer">
        <picture>
          <img src={randomBeerPhoto} alt="" />
        </picture>
        <h2>Random Beer</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
      </Link>

      <Link to="/new-beer">
        <picture>
          <img src={newBeerPhoto} alt="" />
        </picture>
        <h2>New Beer</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
