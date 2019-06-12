import React from 'react';
import AllBeers from '../../img/beers.png'
import RandomBeers from '../../img/random-beer.png'
import NewBeers from '../../img/new-beer.png'
import CardBeerHome from './CardBeerHome';


function Home() {
  return (
    <div className="Home card-deck">
      <CardBeerHome urlImg={AllBeers} urlLink='/beers' name="All Beers"/>
      <CardBeerHome urlImg={RandomBeers} urlLink='/random-beer' name="Random Beer"/>
      <CardBeerHome urlImg={NewBeers} urlLink='/new' name="New Beer"/>
    </div>
  );
}

export default Home;

/* 
 */