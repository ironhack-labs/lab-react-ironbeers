import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Peich</h1>
      <div>
        <Link to={"./beers"}>
          <div>
            <img src={beers} alt="All Beeeeers"></img>
          </div>
          <div>
            <h3>All Beers</h3>
            <p>Lorem ipsum tu vieja</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={"./random-beer"}>
          <div>
            <img src={randomBeer} alt="Random Beeeeers"></img>
          </div>
          <div>
            <h3>Random Beers</h3>
            <p>Lorem ipsum tu vieja</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={"./new-beer"}>
          <div>
            <img src={newBeer} alt="New Beeeeer"></img>
          </div>
          <div>
            <h3>New Beer</h3>
            <p>Lorem ipsum tu vieja</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
