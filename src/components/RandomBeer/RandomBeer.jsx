import React from 'react';
import Navbar from '../Navbar/Navbar';

const RandomBeer = () => {

  return (
    <div className="col" style={{ maxHeight: '90vh'}}>
        <Navbar />
        <h1>Random beers</h1>
    </div>
  );
};

export default RandomBeer;