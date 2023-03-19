import React from 'react';
import BeersList from '../../components/BeersList';
import Header from '../../components/Header/Header';

const AllBeers = () => {
  return (
    <div className='AllBeers'>
      <Header />
      <BeersList />
    </div>
  );
};

export default AllBeers;