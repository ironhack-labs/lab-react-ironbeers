import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  image,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by
}) => {
  return (
    <div className="card mb-3" style={{maxWidth: '300px'}}>
      <img style={{width: '100px', margin: '100px'}} src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <small className="text-muted">{tagline}</small>
        </p>
        <p>
          {attenuation_level}
        </p>
        <p>
          {first_brewed}
        </p>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Created by: {contributed_by}</small>
        </p>
        <Link to='/beers' className='btn btn-primary btn-block'>Go Back</Link>
      </div>
    </div>
  );
};

export default Card;
