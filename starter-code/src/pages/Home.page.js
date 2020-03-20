import React, { useState } from "react";
import imgBeers from "../../public/images/beers.png";
import newBeer from "../../public/images/new-beer.png";
import randomBeer from "../../public/images/random-beer.png";

export const Home = () => {
  return (
    <div id="container">
      <a href="/beers">
        <div className="home-containers">
          <img src={imgBeers}></img>
          <div>
            <h2>All Beers</h2>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </a>
      <a href="/random-beer">
        <div className="home-containers">
          <img src={newBeer}></img>
          <div>
            <h2>Random Beers</h2>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </a>
      <a href="/new-beer">
        <div className="home-containers">
          <img src={randomBeer}></img>
          <div>
            <h2>New Beer</h2>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </a>
    </div>
  );
};
