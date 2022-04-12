import React from 'react'

import './BeerDetails.css'

const BeerDetails = ( props ) => {
  const { 
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
  } = props
  return (
    <section>
      <div className='beer-details' >
        <img src={ image_url } alt={ name } />
        <div className='title' >
          <h2>{ name }</h2>
          <span>{ attenuation_level }</span>
        </div>
        <div className='subtitle' >
          <h3>{ tagline }</h3>
          <span>{ first_brewed }</span>
        </div>
        <p>{ description }</p>
        <span>{ contributed_by }</span>
      </div>
    </section>
  )
}

export default BeerDetails