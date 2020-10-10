import React from 'react';
import { Link } from 'react-router-dom';

const BeerItem = ({ _id, image_url, name, tagline, contributed_by }) => {
  return (
    <div className="media p-5">
      <figure className="media-left" style={{ width: '45px' }}>
        <p>
          <img src={image_url} alt={name} />
        </p>
      </figure>
      <div className="media-content">
        <Link to={`/${_id}`}>
          <div className="content">
            <h2 className="is-size-5">{name}</h2>
            <h3 className="is-size-6">{tagline}</h3>
            <h4 className="is-size-7">{contributed_by}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BeerItem;
