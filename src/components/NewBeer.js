import React from "react";
import newBeerImage from "../assets/new-beer.png";
export const NewBeer = () => {
  return (
    <div class="card">
      <img class="card-img-top" src={newBeerImage} alt="beerimage" />
      <div class="card-body">
        <h1 class="card-title display-4 ">NewBeer</h1>
        <p class="card-text" style={{ color: "#9A9A9A", fontSize:'24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};
