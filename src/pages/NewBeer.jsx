import React from "react";
import image from "../assets/new-beer.png";

const NewBeer = () => {
  return (
    <div>
      <h1>New Beer</h1>
      <img src={image} alt="random-beer" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
        porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
        vitae odio porro!
      </p>
    </div>
  );
};

export default NewBeer;
