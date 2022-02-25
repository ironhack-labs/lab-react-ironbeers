import React from "react";
import { Link } from "react-router-dom";

import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Homepage(props) {
  return (
    <div className="homepage">
      <Link to="/beers" className="homepage-box">
        <img src={beer} alt="beersImage" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur luctus felis eu blandit. Donec in
          convallis nulla, eu facilisis quam.
        </p>
      </Link>
      <Link to="/random-beer" className="homepage-box">
        <img src={randomBeer} alt="randomBeerImage" />
        <h2>Random Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur luctus felis eu blandit. Donec in
          convallis nulla, eu facilisis quam.
        </p>
      </Link>
      <Link to="/new-beer" className="homepage-box">
        <img src={newBeer} alt="singleBeerImage" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur luctus felis eu blandit. Donec in
          convallis nulla, eu facilisis quam.
        </p>
      </Link>
    </div>
  );
}

export default Homepage;
