import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <Link to="/beers" className="homeList">
        <img src="/images/beers.png" alt="beers" />
        <h1>All Beers</h1>
        <p>Lorem ipsum</p>
      </Link>
      <Link to="/random-beer" className="homeList">
        <img src="/images/random-beer.png" alt="single beers" />
        <h1>Random Beer</h1>
        <p>Lorem ipsum</p>
      </Link>
      <Link to="/new-beer" className="homeList">
        <img src="/images/new-beer.png" alt="random beer" />
        <h1>New beer</h1>
        <p>Lorem ipsum</p>
      </Link>
    </div>
  );
}
