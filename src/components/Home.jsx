import React from 'react';
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';

 
const Home = () => {
  return (
    <div>
      <div>
      <div style={{width: '30%', float:"left"}}>
        <Beers/>
      </div>
      <div style={{width: '30%', float:"right"}}>
        <NewBeer />
      </div>
      <div style={{width: '30%', float:"right"}}>
        <RandomBeer />
      </div>
    </div>
    </div>
  )
}
 
export default Home;