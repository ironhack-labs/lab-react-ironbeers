import React from "react";
import { Link } from "react-router-dom";
import myBeers from "./../assets/beers.png";
import randomBeer from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div><Link to={`/beers`}>All Beers</Link>
      <img src={myBeers} alt="" /></div>

      <div><Link to={`/beers/random-beer`}>Random Beer</Link>
      <img src={randomBeer} alt="" />
      </div>
      
      <div><Link to={`/beers/new-beer`}>New Beers</Link>
      <img src={newBeer} alt="" />
      </div>
    </div>
  );
};

export default Home;