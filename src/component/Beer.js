import React from 'react'

export default function Beer({beer}) {
  if (!beer) return null
  return (
    <section>
      <div className="beer-details">
        <img src={ beer.image_url } alt={ beer.name } />
        <div className="flex-text">
          <div>
            <h1>{ beer.name }</h1>
            <span>{ beer.tagline }</span>
          </div>
          <div style={ { textAlign: "right" } }>
            <h1>{ beer.attenuation_level }</h1>
            <strong>{ beer.first_brewed }</strong>
          </div>
        </div>
        <p>{ beer.description }</p>
      </div>
    </section>
  )
}
