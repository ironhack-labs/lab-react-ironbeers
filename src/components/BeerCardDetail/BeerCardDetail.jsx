import React from 'react';

const BeerCard = ({ name, tagline, image_url, contributed_by, _id, first_brewed, attenuation_level, description}) => {
  return (
    <div className="row justify-content-center my-2 py-3 border">
      <div className="col-2 align-self-center">
        <img className='' src={image_url} alt={name} height={150}/>
      </div>
      <div className="col-4 align-self-center">
        <h2 className='fw-bold'>{name}</h2>
        <h4 className='text-danger'>{tagline}</h4>
        <p><span className='fw-bold'>First Brewed:</span> {first_brewed}</p>
        <p><span className='fw-bold'>Attenuation Level:</span> {attenuation_level}</p>
        <p>{description}</p>
        <p className='text-secondary'>{contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;
