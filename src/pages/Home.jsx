import React from "react";
import image from "../assets/beers.png";

const Home = () => {
  return (
    <div>
      <h1>All Beer</h1>
      <img src={image} alt="random-beer" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
        porro dolores. Maxime fuga consequatur quisquam nostrum, voluptates
        vitae odio porro!
      </p>
    </div>
  );
};

export default Home;
