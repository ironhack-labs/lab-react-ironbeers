import React from 'react';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

const home = () => {
  return (
    <div>
        <h3>Home</h3>
        <Beers/>
        <RandomBeer/>
        <NewBeer/>

    </div>
  )
}

export default home;