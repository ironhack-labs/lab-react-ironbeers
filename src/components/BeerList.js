import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function BeerList(props) {
  return (
    <div className="container">
      <Header />

      {props.beers.map((beer) => {
        return (
          <Link
            to={`/beers/${beer._id}`}
            style={{ textDecoration: 'none' }}
            key={beer._id}
          >
            <div className="beer-card">
              <div className="beer-card-image-container">
                <img className="beer-card-image" src={beer.image_url} />
              </div>
              <div className="beer-card-text">
                <p className="beer-name">{beer.name}</p>
                <p className="beer-tagline">{beer.tagline}</p>
                <p className="beer-created-tagline">
                  Created by: {beer.contributed_by}
                </p>
              </div>
            </div>
            <hr />
          </Link>
        );
      })}
    </div>
  );
}

export default BeerList;
