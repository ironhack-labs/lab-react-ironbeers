import React from 'react';

const BeerPage = ({ beer }) => {
  const {
    image_url,
    name,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = beer;

  return (
    <div className='beer-detail'>
      <div className='beer-image-container'>
        <img alt={name} src={image_url} />
      </div>
      <div className='beer-info'>
        <div className='title-row'>
          <h2 className='title'>{name}</h2>
          <span className='attenuation-level'>{attenuation_level}</span>
        </div>
        <div className='tagline-row'>
          <p className='tagline'>{tagline}</p>
          <span className='first-brewed'>{first_brewed}</span>
        </div>
        <p className='description'>{description}</p>
        <p className='created-by'>Created by: {contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerPage;
