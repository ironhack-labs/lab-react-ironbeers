import React from "react";
import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import NewBeerImg from "../assets/new-beer.png";
import RandomBeerImg from "../assets/random-beer.png";

function Homepage() {
  return (
    <div>
      <Link to="/beers">
        <img src={BeersImg} alt="" />
        <h3>All Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa</p>
      </Link>
      <Link to="/new-beer">
        <img src={NewBeerImg} alt="" />
        <h3>New Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa</p>
      </Link>
      <Link to="/random-beer">
        <img src={RandomBeerImg} alt="" />
        <h3>Random Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa</p>
      </Link>
    </div>
  );
}

export default Homepage;