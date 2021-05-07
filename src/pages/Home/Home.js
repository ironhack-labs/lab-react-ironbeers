import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../../assets/beers.png'
import randombeer from '../../assets/random-beer.png';
import newbeer from '../../assets/new-beer.png';

export default function Home() {
  return (
    <div>
      <Link to="/beers">
        <img src={beers} alt="beers" />
        <h2>Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src={randombeer} alt="random beer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src={newbeer} alt="new beer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}
