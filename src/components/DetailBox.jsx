import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailBox({image_url, tagline, name, first_brewed, contributed_by, attenuation_level, description}) {
  return (
    <div className="beer-detail-info">
        <img src={image_url} alt={name}/>
        <div>
            <h2>{name}</h2>
            <span>{attenuation_level}</span>
        </div>
        <div>
            <p>{tagline}</p>
            <span>{first_brewed}</span>
        </div>
        <p>{description}</p>
        <span>{contributed_by}</span>
        <Link to="/beers" className="button">Back</Link>
    </div>
  )
}
