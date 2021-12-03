import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

export const Home = () => {
  return (
    <>
      <div>
        <Link to="/beers">
          <img src={beers} alt="beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            officiis architecto quia consequatur voluptatum reiciendis excepturi
            nesciunt non laborum magni ipsa, deleniti quaerat, itaque saepe
            libero consectetur reprehenderit rem expedita.
          </p>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src={newBeer} alt="beers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            officiis architecto quia consequatur voluptatum reiciendis excepturi
            nesciunt non laborum magni ipsa, deleniti quaerat, itaque saepe
            libero consectetur reprehenderit rem expedita.
          </p>
        </Link>
      </div>
      <div>
        <Link to="new-beer">
          <img src={randomBeer} alt="beers" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            officiis architecto quia consequatur voluptatum reiciendis excepturi
            nesciunt non laborum magni ipsa, deleniti quaerat, itaque saepe
            libero consectetur reprehenderit rem expedita.
          </p>
        </Link>
      </div>
    </>
  );
};
