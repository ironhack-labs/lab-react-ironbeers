import React from "react";
import { Link } from 'react-router-dom'
import './BeerCardDetail.css'

function BeerCard ({name, image_url, tagline, contributed_by, _id,first_brewed,attenuation_level,description}) {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image_url} alt="beer-pic" className="detail__img img-fluid rounded-start"/>
        </div>
        <div className=" col-md-4">
          <div className="card-body mt-8">
            <h2>{name}</h2>
            <p>Tagline:<strong>{tagline}</strong></p>
            <p>First brewed - <strong>{first_brewed}</strong></p>
            <p>Attenuation level : <strong>{attenuation_level}</strong></p>
            <p>Description : {description}</p>
            <p><strong>Created by:</strong> {contributed_by}</p>
            <Link key={_id} className="" to={`/beers/${_id}`}>{name}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard