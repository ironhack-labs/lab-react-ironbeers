import React from 'react';

export const BeerCard = ({ image, name, tagline, creator}) => {
  return (<div className="beer-card">
            <div className="beer-card-img">
                <img src={image} alt={name}/>
            </div>
            <div className="beer-card-text">
                <h1>{name}</h1>
                <p>{tagline}</p>
                <p><span className="bold-text">Created By:</span> {creator}</p>
            </div>
      </div>
  )
};
