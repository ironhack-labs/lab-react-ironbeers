import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import allBeersPicture from './../assets/beers.png';
import randomBeerPicture from './../assets/random-beer.png';
import newBeerPicture from './../assets/new-beer.png';

function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="beer-section">
        <img src={allBeersPicture} alt="Beers picture" />
        <Link to="/beers">All beers</Link>
      </section>
      <section className="beer-section">
        <img src={randomBeerPicture} alt="Another beer picture" />
        <Link to="/beers/random">Random beers</Link>
      </section>
      <section className="beer-section">
        <img src={newBeerPicture} alt="Create a new beer picture" />
        <Link to="/beers/new">New beer</Link>
      </section>
    </main>
  );
}

export default HomePage;
