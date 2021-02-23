import React from 'react';

function BeerList({ beer }) {
  return (
    <div className="card-beer">
      <img className='col-4' src={beer.image_url} alt={beer.name}></img>
      <div className='col'>
        <p className='title'>{beer.name}</p>
        <p className='tagline'>{beer.tagline}</p>
        <p className='created'>Created by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}
export default BeerList;
