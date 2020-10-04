// imports packages
import React from 'react';

// imports components
import Header from './Header';
import BeerCard from './BeerCard';


const Beers = (props) => {
  // retrieves information
  const { beers } = props;

  // renders page
  return (
    <div>
      <Header />
      {beers.map((beer, i) => (
        <BeerCard key={i} info={beer} />
      ))}
    </div>
  )
}

export default Beers;