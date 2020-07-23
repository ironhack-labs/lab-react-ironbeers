import React from 'react';

const DisplayOneBeer = ({ beer }) => {
  if (!beer) return null;

  return (
    <div className="displayOneBeer">
      <img src={beer.image_url} alt={beer.name} />
      <div className="flex">
        <h3>{beer.name}</h3>
        <p className="grey">{beer.attenuation_level}</p>
      </div>
      <div className="flex">
        <p className="grey">{beer.tagline}</p>
        <p className="bold">{beer.first_brewed}</p>
      </div>
      <div className="desc">
        <p>{beer.description}</p>
        <p className="bold">{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default DisplayOneBeer;
