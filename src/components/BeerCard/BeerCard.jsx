import React from "react";
import { Link } from 'react-router-dom'

function BeerCard ({name, image_url, tagline, contributed_by, _id}) {
  return (
    <div className="BeerCard">
      <img src={image_url} alt="beer-pic" className="BeerCard__img"/>
      <div className="BeerCard__text">
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p><strong>Created by:</strong> {contributed_by}</p>
        <Link key={_id} className="" to={`/beers/${_id}`}>{name}</Link>
      </div>
    </div>
  )
}

export default BeerCard