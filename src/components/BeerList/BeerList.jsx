import React from 'react';
import BeerCard from '../BeerCard/BeerCard';

const BeerList = ({ beerList }) => {
  return beerList.map((beerItem) => <BeerCard key={beerItem._id} {...beerItem}/>);  
}

export default BeerList;
