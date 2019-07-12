import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const allBeerImg = "./img/beers.png";
  const randomBeerImg = "./img/random-beer.png";
  const newBeerImg = "./img/new-beer.png";
  const lorem =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti sit, recusandae magni, sequi sapiente repudiandae minus iste atque illo dignissimos. Aspernatur beatae voluptate dolor commodi doloribus provident veniam accusantium.";
  return (
    <div className="home-wrapper">
      <div className="all-beers-container flexbeer">
        <img src={allBeerImg} alt="beers" />
        <NavLink activeClassName="is-active" to="/beers">
          <h2>All Beers</h2>
        </NavLink>
        <p>{lorem}</p>
      </div>
      <div className="random-beer-container flexbeer">
        <img src={randomBeerImg} alt="random-beer" />
        <NavLink activeClassName="is-active" to="/random-beer">
          <h2> Random beer</h2>
        </NavLink>
        <p>{lorem}</p>
      </div>
      <div className="new-beer-container flexbeer">
        <img src={newBeerImg} alt="new-beer" />
        <NavLink activeClassName="is-active" to="/new-beer">
          <h2>New beer</h2>
        </NavLink>
        <p>{lorem}</p>
      </div>
    </div>
  );
}
