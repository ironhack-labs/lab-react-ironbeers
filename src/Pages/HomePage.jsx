
import React from "react";

import image1 from "../assets/beers.png";
import image2 from "../assets/random-beer.png";
import image3 from "../assets/new-beer.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="appBody">
      <Link to={"/beers"} className="cardLink">
        <div className="card">
          <img src={image1} alt="beers" />
          <h1 className="textMargin">All Beers</h1>
          <p className="textMargin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore.
          </p>
        </div>
      </Link>

      <Link to={"/random-beer"} className="cardLink">
        <div className="card">
          <img src={image2} alt="randomBeer" />
          <h1 className="textMargin">Random Beer</h1>
          <p className="textMargin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore.
          </p>
        </div>
      </Link>

      <Link to={"/new-beer"} className="cardLink">
        <div className="card">
          <img src={image3} alt="newBeer" />
          <h1 className="textMargin">New Beer</h1>
          <p className="textMargin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;