import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <div>
          <img src={beers} />
          <h1>All Beers</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={newbeer} />
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
          <img src={randombeer} />
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
