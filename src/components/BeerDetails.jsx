import React from 'react'

export default function BeerDetails({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by
}) {
  return (
    <div className='details'>
      <img className='imageBeer' alt={name} src={image_url} />
      <div>
        <div className='titleInfo'>
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <p> First brewed:{first_brewed}</p>
          <p>Attenuation Level:{attenuation_level}</p>
        </div>
        <label>
          <strong>Description:</strong>
        </label>
        <p>{description}</p>
        <p>
          <strong>Created by:</strong>
          {contributed_by}
        </p>
      </div>
    </div>
  )
}
