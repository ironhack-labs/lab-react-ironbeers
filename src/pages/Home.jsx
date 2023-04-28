import React from "react";
import { Link } from "react-router-dom";
import Imgbeers from "../assets/beers.png";
import ImgRandomBeer from "../assets/random-beer.png";
import ImgNewbeer from "../assets/new-beer.png";

const Home = () => {
  return (
    <div>
      <Link to="/beers">
        <h1>All Beer</h1>
        <img src={Imgbeers} alt="beers" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
          vitae odio porro!
        </p>
      </Link>
      <Link to="/random-beer">
        <h1>New Beer</h1>
        <img src={ImgRandomBeer} alt="random-beer" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
          vitae odio porro!
        </p>
      </Link>
      <Link to="/new-beer">
        <h1>RandomBeer</h1>
        <img src={ImgNewbeer} alt="new-beer" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
          vitae odio porro!
        </p>
      </Link>
    </div>
  );
};

export default Home;
