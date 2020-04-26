import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <AllBeers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
}

const AllBeers = () => {
  return (
    <div className='home-tile'>
      <Link to='/beers'>
        <img alt='all beers' src='/images/beers.png' />
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.</p>
      </Link>
    </div>
  );
}

const RandomBeer = () => {
  return (
    <div className='home-tile'>
      <Link to='/random-beer'>
        <img alt='random beer' src='/images/random-beer.png' />
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.</p>
      </Link>
    </div>
  );
}

const NewBeer = () => {
  return (
    <div className='home-tile'>
      <Link to='/new-beer'>
        <img alt='new beer' src='/images/new-beer.png' />
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.</p>
      </Link>
    </div>
  );
}

export default Home;
