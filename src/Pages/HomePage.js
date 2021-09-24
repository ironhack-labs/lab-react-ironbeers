import React from 'react';
import { Link } from 'react-router-dom';
import beerphoto from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src={beerphoto} alt="" className="imagen"></img>
        <h3> All Beers </h3>
      </Link>
      <Link to="/random-beer">
        <img src={newBeer} alt="" className="imagen"></img>
        <h3> Random Beer </h3>
      </Link>
      <Link to="/new-beer">
        <img src={randomBeer} alt="" className="imagen"></img>
        <h3> New Beer </h3>
      </Link>
    </>
  );
}

export default HomePage;
