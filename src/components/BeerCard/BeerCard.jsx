import React from "react";
import { Link } from 'react-router-dom'
import './BeerCard.css'

function BeerCard ({name, image_url, tagline, contributed_by, _id}) {
  return (
    <div className="col mb-4" >
      <div className="card">
        <img src={image_url} alt="beer-pic" className="Card__img card-img-top"/>
        <div className="card-body">
          <h2>{name}</h2>
          <p>{tagline}</p>
          <p><strong>Created by:</strong> {contributed_by}</p>
          <Link key={_id} className="" to={`/beers/${_id}`}>{name}</Link>
        </div>
      </div>
    </div>
  )
}

export default BeerCard