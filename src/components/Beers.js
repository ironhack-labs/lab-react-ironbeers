import React from 'react';
import Header from './Header/Header';
import { Link } from 'react-router-dom';

const Beers = (props) => {
  const { beers } = props;
  return (
    <>
      <Header />
      <div className="Beers d-flex flex-column align-items-center">
        {beers.map((beer) => {
          return (
            <Link
              to={`beers/${beer._id}`}
              key={beer._id}
              className="list-group-item list-group-item-action"
            >
              <div className="row flex d-flex align-items-center">
                <div className="col-2 col-lg-6">
                  <img
                    className="img-fluid"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </div>
                <div className="col-8 col-lg-4">
                  <p className="h2">{beer.name}</p>
                  <p className="h4 text-secondary">{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Beers;
