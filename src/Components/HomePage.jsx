import React from 'react';
import imageBeers from "./../assets/beers.png";
import imageRandomBeer from "./../assets/random-beer.png";
import imageNewBeer from "./../assets/new-beer.png";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
       <Link to="/beers">
        <img src={imageBeers} alt="beers" />
        <h2>All beers</h2>
        <p>Check out all our delicious beers!</p>
        </Link>
        <Link to="/random-beer">
        <img src={imageRandomBeer} alt="random beer" />
        <h2>Random beer</h2>
        <p>Check out a delicious random beer!</p>
        </Link>
        <Link to="/new-beer">
        <img src={imageNewBeer} alt="new beer" />
        <h2>New beer</h2>
        <p>Contribute to our delicious collection!</p>
        </Link>
    </div>
  );
}

export default HomePage;
