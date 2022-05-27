import React from "react";
import { Link, useParams } from "react-router-dom";
import beershome from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";

function Homepage() {
  return (
    <div>
      <img src={beershome} alt="" width="100%" />
      <Link to="/beers">
        <button>Beers</button>
      </Link>
      <hr />
      <img src={randombeer} alt="" width="100%" />
      <Link to="/random-beer">
        <button>Random Beers</button>
      </Link>
      <hr />
      <img src={newbeer} alt="" width="100%" />

      <Link to="/new-beer">
        <button>New Beer</button>
      </Link>
    </div>
  );
}

export default Homepage;
