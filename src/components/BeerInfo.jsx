import React from 'react'
import { Link } from 'react-router-dom'

export default function BeerInfo({image_url, tagline, name, contributed_by, _id}) {
  return (
    <div className="beer-info">
        <img src={image_url}/>
        <div>
            <h2>{name}</h2>
            <h4>{tagline}</h4>
            <p>Contributed by: {contributed_by}</p>
            <Link to={`/beers/${_id}`} className="button">Learn More</Link>
        </div>
    </div>
  )
}
