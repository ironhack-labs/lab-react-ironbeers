import React from 'react';
import { Link } from 'react-router-dom';

const Beer = ({ beer }) => {
  const { image_url, name, tagline, contributed_by, _id } = beer;
  return (
    <div className="Beer card mb-3 ">
      <div className="row">
        <div className="col-sm-2 col-md-4">
          <img src={image_url} alt={name} style={{ height: '10rem' }} />
        </div>
        <div className="col-sm-4 col-md-8 text-left">
          <div className="card-body">
            <Link
              to={`/${_id}/beer`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h5 className="card-title">{name}</h5>
            </Link>
            <p className="card-text">{tagline}</p>
            <p className="card-text">
              <small className="text-muted">Created by: {contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beer;
