import React from 'react';

const BeerItem = ({
    image_url,
    name,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by
  }) => (
  <div className='beer-details'>
    <div className='beer-img-envelop'>
      <img src={image_url} alt={name} />
    </div>
    <div>
      <p className='beer-detail-first-line'>
        <span className='beer-name'>{name}</span>
        <span className='beer-attenuation'>{attenuation_level}</span>
      </p>
    </div>
    <div>
      <p className='beer-detail-second-line'>
        <span className='beer-tagline'>{tagline}</span>
        <span className='beer-first-brewed'>{first_brewed}</span>
      </p>
    </div>
    <p className='beer-description'>{description}</p>
    <p className='beer-contributor'>{contributed_by}</p>
  </div>
)

export default BeerItem;