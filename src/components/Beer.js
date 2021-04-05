import React from 'react';

const Beer = ({ beer }) => {
  const { image_url, name, tagline, contributed_by } = beer;
  return (
    <div className="Beer card mb-3 h-50" style={{ maxHeight: '10rem' }}>
      <div className="row">
        <div className="col-md-4 h-50">
          <img className="img-fluid mh-100" src={image_url} alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
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
