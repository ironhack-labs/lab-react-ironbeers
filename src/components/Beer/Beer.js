import React from 'react';
import './Beer.css';
const Beer = ({ beer }) => {
  return (
    <section className="beer">
      <img src={beer.image_url} alt="" />
      <div className="col2">
        <h1>{beer.name}</h1>
        <p>{beer.attenuation_level}</p>
      </div>
      <div className="col2">
        <h1>{beer.tagline}</h1>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </section>
  );
};

export default Beer;
