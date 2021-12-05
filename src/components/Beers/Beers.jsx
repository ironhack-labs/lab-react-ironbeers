import React from 'react';

import { Link } from 'react-router-dom';

const Beers = (props) => {
  const { beers } = props;

  return (
    <>
      <Link className="text-decoration-none m-2" to="/">
        <button className="btn btn-block btn-lg btn-success m-2">Home</button>
      </Link>
      <div className=" d-flex flex-column ">
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
                    style={{ height: '200px' }}
                    className="img-fluid mw-lg-10 m-5"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </div>
                <div className="col-8 col-lg-6">
                  <p className="h4">{beer.name}</p>
                  <p className="h6 text-secondary">{beer.tagline}</p>
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
