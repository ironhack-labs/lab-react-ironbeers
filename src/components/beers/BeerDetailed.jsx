import React from 'react';

const BeerDetailed = ({beer}) => {
    return (
       
        <div className='Beer w-75 m-3 card d-flex flex-column'>
        <div>
      <img alt='beer' src={beer.image_url} style={{height: '200px'}} className='mb-4'/>
        </div>
          <h3>{beer.name}</h3>
          <h5 style={{color: 'grey'}}>{beer.attenuation_level}</h5>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p className='text-secondary'><b>{beer.contributed_by}</b></p>
    </div>
    );
};

export default BeerDetailed;