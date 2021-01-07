import React from 'react';
import BeerForm from '../components/BeerForm';

const NewBeer = (props) => {
  console.log('props in admin forms page', props);
  return (
    <div>
      <BeerForm />
    </div>
  );
};

export default NewBeer;
