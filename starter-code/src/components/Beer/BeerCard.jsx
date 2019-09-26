import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({ beer: { image_url, name, _id, tagline, contributed_by } }) => {
  return (
    <div className='col-12 col-md-4 my-3'>
      <div className='card'>
        <img
          src={image_url}
          className='card-img-top my-4'
          alt={name}
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
        <div className='card-body text-center'>
          <h2 className='card-title text-truncate h5'>{name}</h2>
          <p className='card-text text-truncate text-muted mb-1'>{tagline}</p>
          <small className='card-text text-truncate text-muted d-block mb-4'>
            <strong>Created by:</strong>
            {contributed_by}
          </small>
          <Link to={_id} className='btn btn-info stretched-link'>
            More info
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BeerCard
