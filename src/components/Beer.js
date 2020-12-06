import React from 'react';
import './Beer.css';

const Beer = (props) => {
  const { beer } = props;
  return (
    <div className="beer">
      <img src={beer.image_url} />
      <div className="row">
        <div className="head">
          <h2>{beer.name}</h2>
          <h6>{beer.tagline}</h6>
        </div>
        <div className="num">
          <h4>{beer.attenuation_level}</h4>
          <p>{beer.first_brewed}</p>
        </div>
      </div>
      <p className="desc">{beer.description}</p>
      <p>
        <span>{beer.contributed_by}</span>
      </p>
    </div>
  );
};

export default Beer;
