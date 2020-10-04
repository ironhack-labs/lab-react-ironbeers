import React from 'react';
import { Link } from 'react-router-dom';

const MediaList = ({ beer }) => {
  return (
    <li className="media py-3 px-2">
      <img
        src={beer.image_url}
        className="ml-3 mr-4 align-self-top"
        alt={beer.name}
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{beer.name}</h5>
        <p className="mb-1">{beer.tagline}</p>
        <p className="mb-1">{beer.contributed_by}</p>
        <Link to={`/beers/${beer._id}`} className="btn btn-info btn-sm">
          Take one
        </Link>
      </div>
    </li>
  );
};

export default MediaList;
