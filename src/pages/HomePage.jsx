import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeersImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <img src={beersImg} alt="beers" />
        <Link to={`/beers`}>Beers</Link>
        <p>Some text</p>
      </div>
      <div className="container">
        <img src={randomBeersImg} alt="random beer" />
        <Link to={`/random-beer`}>Random Beer</Link>
        <p>Some text</p>
      </div>
      <div className="container">
        <img src={newBeerImg} alt="new beer" />
        <Link to={`/new-beer`}>New Beer</Link>
        <p>Some text</p>
      </div>
    </div>
  );
}

export default HomePage;
