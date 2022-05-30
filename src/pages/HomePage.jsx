import React from "react";
import { Link } from "react-router-dom";
import ImageBeers from "../assets/beers.png";
import ImageNewBeer from "../assets/new-beer.png";
import ImageRandomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={ImageBeers} alt="beers" />
        <h1>All beers</h1>
      </Link>
      <p>
        Here you can found all the good for FRIDAY BABE! Check just clicking.
        Have a good day
      </p>
      <Link to="/random-beer">
        <img src={ImageRandomBeer} alt="random-beer" />
        <h1>Random Beer</h1>
      </Link>
      <p>
        You dont know what to drink? BUT we know! Get here a delicious random
        beer! Hope you Enjoy!
      </p>
      <Link to="/new-beer">
        <img src={ImageNewBeer} alt="new-beer" />
        <h1>New Beer</h1>
      </Link>
      <p>
        In case there is beers that you dont like, feel free to add a new one
        HERE
      </p>
    </div>
  );
}

export default HomePage;
