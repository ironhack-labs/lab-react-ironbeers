import React from 'react';
import Header from '../components/Header';
import FormBeer from '../components/FormBeer';

const NewBeerPage = (props) => {
  console.log('props in admin forms page', props);
  return (
    <div>
      <Header />
      <FormBeer />
    </div>
  );
};

export default NewBeerPage;
