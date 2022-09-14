import React from "react";
import beersImage from "../assets/beers.png";

export const Beers = () => {
  return (
    <div>
      <div>
        <img src={beersImage} alt="beerimage" />
      </div>
      <div>
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  );
};
