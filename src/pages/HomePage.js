import React from "react";
import { Link } from "react-router-dom";
import beerImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="homepage">
      <img src={beerImage} alt="Beers" width="1300" />
      <h2>All Beers</h2>
      <Link to="/beers">CLick here to see beers!</Link>
      <hr></hr>
      <img src={randomBeerImage} alt="Random beer" width="1300" />
      <h2>Random Beer</h2>
      <Link to="/random-beer">CLick here to see a random beer!</Link>
      <hr></hr>
      <img src={newBeerImage} alt="New beer" width="1300" />
      <h2>Create a new beer</h2>
      <Link to="/new-beer">
        CLick here to add a new beer to the collection!
      </Link>
    </div>
  );
}

export default HomePage;
