import React from 'react';
import Header from './Header';

function NewBeer(props) {
  return (
    <div>
      {Header()}
      <h1>NEW BEER IS WORKING</h1>
    </div>
  );
}

export default NewBeer;
