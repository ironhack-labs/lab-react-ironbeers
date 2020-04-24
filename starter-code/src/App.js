import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <AllBeers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
}

const AllBeers = () => {
  return (
    <div className='home-tile'>
      <img alt='all beers' src='/images/beers.png' />
      <h1>All Beers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.
      </p>
    </div>
  );
}

const RandomBeer = () => {
  return (
    <div className='home-tile'>
      <img alt='random beer' src='/images/random-beer.png' />
      <h1>Random Beer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.
      </p>
    </div>
  );
}

const NewBeer = () => {
  return (
    <div className='home-tile'>
      <img alt='new beer' src='/images/new-beer.png' />
      <h1>New Beer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.
      </p>
    </div>
  );
}

export default App;
