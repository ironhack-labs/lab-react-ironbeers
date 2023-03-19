import React from 'react';

const Beer = ({ beer }) => {
  return (
    <div className='Beer w-75 m-5'>
      <img alt='beer' src={beer.image_url} style={{height: '150px'}} className='mb-4'/>
        <div className='d-flex justify-content-between'>
          <h3>{beer.name}</h3>
          <h5 style={{color: 'grey'}}>{beer.attenuation_level}</h5>
        </div>
        <div className='d-flex justify-content-between'>
          <p>{beer.tagline}</p>
          <p><b>{beer.first_brewed}</b></p>
        </div>
        <p>{beer.description}</p>
        <p className='text-secondary'><b>{beer.contributed_by}</b></p>
    </div>
  );
};

export default Beer;