import React from 'react';
import { Link } from 'react-router-dom';

import ironBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div
      className="home-container"
      style={{ width: 700, height: 440, marginLeft: '26.5%' }}
    >
      <div className="text-area">
        <Link to="/beers">
          <img src={`${ironBeers}`} alt="beers" />
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
      <div className="text-area">
        <Link to="/random-beer">
          <img src={`${randomBeer}`} alt="random beer" />
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
      <div className="text-area">
        <Link to="/new-beer">
          <img src={`${newBeer}`} alt="new beer" />
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
