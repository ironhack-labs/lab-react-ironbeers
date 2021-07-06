import React from 'react';
import { Link, } from 'react-router-dom';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

function Home() {
  return (
    <div>
      <Link to="/beers">
        <div>
          <img src={beers} alt="beer"/>
          <h1>All Beers</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
      </Link>

      <Link to="/beers/random">
        <div>
          <img src={newbeer} alt="beer"/>
          <h1>Random Beer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src={randombeer} alt="beer"/>
          <h1>New Beer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
