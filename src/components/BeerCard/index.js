import React from 'react'
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
  const { _id, image_url, name, tagline, contributed_by } = props;
  return (
      <div className='beer-card'>
        <div className='card-img'>
          <Link to={`/beers/${_id}`}>
            <img src={image_url} alt={name}/>
          </Link>
        </div>
        <div className='card-info'>
          <h2>{name}</h2>
          <h3 className='tagline'>{tagline}</h3>
          <p>By {contributed_by}</p>
        </div>
      </div>
  )
}

export default BeerCard