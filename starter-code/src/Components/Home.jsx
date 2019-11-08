import React from 'react';
import BeerLink from './BeerLink';
import { LoremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';
const lorem =  new LoremIpsum({});

const Home = () => {
  return (
  <div className="link">
    <Link to="/beers">
      <BeerLink image="images/beers.png" title="All Beers" text={lorem.generateWords(40)} />
    </Link>
    <Link to="/random-beer">
      <BeerLink image="images/random-beer.png" title="Random Beer" text={lorem.generateWords(40)} />
    </Link>
    <Link to="/new-beer">
      <BeerLink image="images/new-beer.png" title="New Beer" text={lorem.generateWords(40)} />
    </Link>
  </div>
    
  )
}

export default Home;