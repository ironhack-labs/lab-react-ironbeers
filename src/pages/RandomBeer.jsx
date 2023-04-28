import React from "react";
import image from "../assets/random-beer.png";
import Header from "../components/Header";

const RandomBeer = () => {
  return (
    <div>
      <Header />
      <h1>RandomBeer</h1>
      <img src={image} alt="random-beer" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
        porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
        vitae odio porro!
      </p>
    </div>
  );
};

export default RandomBeer;
