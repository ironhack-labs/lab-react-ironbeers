import React from 'react';
import Navbar from '../Navbar/Navbar';

const NewBeer = () => {

  return (
    <div className="col" style={{ maxHeight: '90vh'}}>
        <Navbar />
        <h1>New beers</h1>
    </div>
  );
};

export default NewBeer;