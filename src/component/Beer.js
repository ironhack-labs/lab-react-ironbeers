import React from 'react'

export default function Beer({ beer }) {
  if (!beer) return null
  return (
    <>
      <div className="beer-details">
        <div className="img-container">
          <img src={ beer.image_url } alt={ beer.name } />
        </div>
        <div className="flex-text">
          <div>
            <h1>{ beer.name }</h1>
            <span><strong>{ beer.tagline }</strong></span>
          </div>
          <div style={ { textAlign: "right" } }>
            <h1>{ beer.attenuation_level }</h1>
            <strong>{ beer.first_brewed }</strong>
          </div>
        </div>
        <p>{ beer.description }</p>
        <span>{ beer.contributed_by }</span>
      </div>
    </>
  )
}
