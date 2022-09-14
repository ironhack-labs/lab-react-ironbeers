import React from 'react'
import { Link } from 'react-router-dom'
import "./BeerCard.css"

function BeerCard({ image_url, name, tagline, contributed_by, _id}) {
  return (
    <div className='container'>
      <Link to={`/detail/${_id}`} className="text-decoration-none">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-3 ps-3 my-2">
              <img src={`${image_url}`} className="img-beer-card img-fluid rounded-start" alt={name} />
            </div>
            <div className="col-9 align-items-start">
              <div className="card-body">
                <h5 className="card-title mt-3 text-dark">{name}</h5>
                <h5 className="card-text text-secondary mt-4">{tagline}</h5>
                <p className="card-text mt-5 text-dark"><small><b>Created by: </b>{contributed_by}</small></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BeerCard