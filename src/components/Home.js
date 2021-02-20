import React from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Home() {
  return (
    <div className="homePage">
      <h1>React IronBeers</h1>
      <div className="beerSection">
        <Link to="/beers">
          <img src={allBeers} alt="all-beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
      <div className="beerSection">
        <Link to="/random-beer">
          <img src={randomBeer} alt="random-beer" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
      <div className="beerSelection">
        <Link to="/new-beer">
          <img src={newBeer} alt="new-beer" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
