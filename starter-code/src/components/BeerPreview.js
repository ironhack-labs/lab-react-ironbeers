import React from 'react';
import { Link } from 'react-router-dom';

const BeerPreview = ({ beer }) => {
  const { _id, image_url, name, tagline, contributed_by } = beer;
  return (
    <Link to={`/beers/${_id}`}>
      <div className='beer-preview'>
        <div className='beer-image-container'>
          <img alt={name} src={image_url} />
        </div>
        <div className='beer-info'>
          <h2 className='title'>{name}</h2>
          <p className='tagline'>{tagline}</p>
          <p className='created-by'>Created by: {contributed_by}</p>
        </div>
      </div>
    </Link>
  );
}

export default BeerPreview;
