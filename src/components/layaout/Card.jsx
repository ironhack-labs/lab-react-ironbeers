import React from 'react';
import { Link } from 'react-router-dom';
import { getRandomClassColor } from '../../utils/utils';

const Card = ({ beer }) => {
  const color = getRandomClassColor();

  return (
    <div className={`card ${color.backgroundColor}`}>
      <img
        src={beer.image_url}
        className="card-img-top w-50 h-25 my-5 mr-auto ml-auto d-block"
        alt={beer.name}
      />
      <div className="card-body">
        <h5 className={`card-title ${color.color}`}>{beer.name}</h5>
        <p className={`card-text ${color.color}`}>{beer.tagline}</p>
        <p className={`card-text ${color.color}`}>
          <b>{beer.contributed_by}</b>
        </p>
        <Link to={`/beers/${beer._id}`} className="btn btn-info btn-block">
          Take one
        </Link>
      </div>
    </div>
  );
};

export default Card;
