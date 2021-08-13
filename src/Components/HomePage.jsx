import React from 'react';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={beers} alt="beers" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          perferendis fugit placeat veniam, nesciunt facilis iure ad illo quasi
          in, enim iusto consectetur cumque nulla. Maxime deleniti aut ex
          distinctio.
        </p>
      </div>
      <div>
        <img src={randombeer} alt="random-beer" />
        <h1>
          <Link to="/random">Random Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          adipisci alias laudantium, minus asperiores eaque deserunt enim eos
          assumenda temporibus quos maiores modi vero et odit illum quia ab.
          Molestias.
        </p>
      </div>
      <div>
        <img src={newbeer} alt="new-beer" />
        <h1>
          <Link to="/create">New Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero,
          beatae earum impedit voluptas reprehenderit cumque aut illum
          veritatis, doloremque excepturi? Ullam corporis similique libero
          accusantium sed cupiditate eligendi voluptas?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
