import React from 'react';

const BeerInfo = (props) => {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
  } = props;

  return (
    <div className='beer-detail'>
      <div className='detail-img'>
        <img src={image_url} alt={name}/>
      </div>
      <div className='detail-info'>
        <div className='top-line'>
          <h3>{name}</h3>
          <h3 className='tagline'>{attenuation_level}</h3>
        </div>
        <div className='top-line'>
          <h4 className='tagline'>{tagline}</h4>
          <h4>{first_brewed}</h4>
        </div>
      </div>
      <p>{description}</p>
      <br/>
      <p className='tagline'>{contributed_by}</p>
    </div>
  );
}

export default BeerInfo;