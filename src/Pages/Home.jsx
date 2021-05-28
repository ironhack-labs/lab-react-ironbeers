import React from "react";
import { Link } from "react-router-dom";
import beersPic from './../assets/beers.png';
import newBeerPic from './../assets/new-beer.png';
import randomBeerPic from './../assets/random-beer.png';


const Home = () => {
  return (
    <div>
      <div>
        <img src={beersPic} />
        <Link to="/beers">All Beers</Link>
        <p>Lorem ipsum text</p>
      </div>
      <div>
        <img src={newBeerPic} />
        <Link to="/random-beer">Random Beer</Link>
        <p>Lorem ipsum text</p>
      </div>
      <div>
        <img src={randomBeerPic}  />
        <Link to="/new-beer">New Beer</Link>
        <p>Lorem ipsum text</p>
      </div>
    </div>
  );
};

export default Home;

