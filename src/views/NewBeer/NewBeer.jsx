import React from 'react';
import Header from '../../components/Header/Header';
import NewBeerForm from '../../components/NewBeerForm/NewBeerForm';

const NewBeer = () => {
  return (
    <div className='NewBeer'>
      <Header />
      <NewBeerForm />
    </div>
  );
};

export default NewBeer;