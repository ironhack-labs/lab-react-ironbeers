import React from 'react';

function BeerCard({ beer }) {
  return (
    <div className="single-card">
      <div className="align-center">
        <img src={beer.image_url} alt={beer.name}></img>
      </div>
      <div className='container'>
        <div className="beer-line">
          <p className='title'>{beer.name}</p>
          <p className='attenuation'>{beer.attenuation_level}</p>
        </div>
        <div className="beer-line">
          <p className='tagline'>{beer.tagline}</p>
          <p className='brewed'>{beer.first_brewed}</p>
        </div>{' '}
        <p className='description'>{beer.description}</p>
        <p className='contributed'>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;
