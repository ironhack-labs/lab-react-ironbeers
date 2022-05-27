import React from "react";
import { Link } from "react-router-dom";
import beerlistImage from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'

function HomePage() {
  return (
    <div>
      <main>
        <img src={beerlistImage} alt="Beers" width="1400" />
        <Link to="/beers">All Beers</Link>
      </main>
      <section>
        <img src={randomBeerImg} alt="Random Beers" width="1400" />
        <Link to="/random-beer">
          Random Beer
        </Link>
      </section>
      <section>
        <img src={newBeerImg} alt="Create new Beers" width="1200" />
        <Link to="/new-beer">
          Create New Beer
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
