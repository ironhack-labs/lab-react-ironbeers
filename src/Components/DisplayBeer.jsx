import React from 'react';
import { Link } from 'react-router-dom';

const DisplayBeer = ({ index, beer }) => {
  return (
    <div className="displayBeer" key={index}>
      <img src={beer.image_url} alt={beer.name} />
      <div className="beerInfo">
        <Link to={'/beers/' + beer._id}>
          <h3>{beer.name}</h3>
        </Link>
        <p>{beer.tagline}</p>
        <p>
          <span>
            <em>Created by:</em> {beer.contributed_by}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DisplayBeer;
