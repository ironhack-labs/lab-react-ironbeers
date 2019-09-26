import React from 'react'

const BeerInfo = ({
  beer: { image_url, name, description, tagline, first_brewed, attenuation_level, contributed_by }
}) => {
  return (
    <div className='col-12 col-md-4 my-3'>
      <div className='card border-0'>
        <img
          src={image_url}
          className='card-img-top my-4'
          alt={name}
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
        <div className='card-body mt-4'>
          <h1 className='card-title text-truncate h4'>{name}</h1>
          <p className='card-text text-truncate text-muted mb-2'>{tagline}</p>
          <small className='card-text text-truncate text-muted d-block mb-4'>
            <strong>Created by:</strong>
            {contributed_by}
          </small>
          <hr />
          <div className='mt-4'>
            <h2 className='h6'>Description</h2>
            <p className='text-muted'>{description}</p>
          </div>
          <div className='mt-4'>
            <h2 className='h6'>First brewed</h2>
            <p className='text-muted'>{first_brewed}</p>
          </div>
          <div className='mt-4'>
            <h2 className='h6'>Attenuation level</h2>
            <p className='text-muted'>{attenuation_level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerInfo
