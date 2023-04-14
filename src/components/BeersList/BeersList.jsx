import React from 'react';
import Beer from './Beer/Beer';
import { Link } from 'react-router-dom';

function BeersList({ beersData }) {
  return (
    <div>{beersData.map(beer => (
      <Link to={`/beers/${beer._id}`}>
        <Beer beer={beer} key={beer._id} /></Link>))}</div>
  );
}

export default BeersList;