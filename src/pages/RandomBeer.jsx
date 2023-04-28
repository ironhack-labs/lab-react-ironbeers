import React from "react";
import image from "../assets/random-beer.png";

const RandomBeer = () => {
  return (
    <div>
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
