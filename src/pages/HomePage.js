import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <Link to="/beers">
        <div>
          <img src={beersImg} alt="A lot of beers" />
          <h2>All Beers</h2>
          <p>Have a look at all our beers</p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={randomImg} alt="A lot of beers" />
          <h2>Random Beer</h2>
          <p>Have no idea? Get a Random Beer! </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src={newBeerImg} alt="A lot of beers" />
          <h2>New Beer</h2>
          <p>Have a chance to add a beer to our exclusive selection</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
