import React from 'react';
import Navbar from '../components/Navbar';
import BeerForm from '../components/BeerForm';

function NewBeer() {
  return (
    <div>
      <Navbar />
      <h2>New beer</h2>
      <BeerForm />
    </div>
  );
}

export default NewBeer;
