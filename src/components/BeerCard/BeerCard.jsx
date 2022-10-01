import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ name, tagline, image_url, contributed_by, _id}) => {
  return (
    <div className="row justify-content-center my-2 py-3 border">
      <div className="col-2 align-self-center">
        <img className='' src={image_url} alt={name} height={50}/>
      </div>
      <div className="col-4 align-self-center">
        <Link to={`/beers/${_id}`}><h2 className='fw-bold'>{name}</h2></Link> 
        <p>{tagline}</p>
        <p className='text-secondary'>{contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;
