import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/beers">
        <img src="../../assets/beers.png" alt="beers" />
        <h2>Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src="../../assets/random-beer.png" alt="random beer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src="../../assets/new-beer.png" alt="new beer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}
