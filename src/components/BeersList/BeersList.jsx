import React, { useState } from 'react';
import Beer from './Beer/Beer';

function BeersList({ beersData }) {
  return (
    <div>{beersData.map(beer => <Beer beer={beer} key={beer.name}/>)}</div>
  )
}

export default BeersList