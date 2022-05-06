import React from 'react';
import { Link, useParams } from 'react-router-dom'

export const BeerCard = ({ image, name, tagline, creator, key}) => {

  const { id } = useParams(key);

  return (<div className="beer-card">
            <div className="beer-card-img">
                <img src={image} alt={name}/>
            </div>
            <div className="beer-card-text">
                <Link to="/:id">
                <h1>{name}</h1>
                </Link>
                <p>{tagline}</p>
                <p><span className="bold-text">Created By:</span> {creator}</p>
            </div>
      </div>
  )
};
