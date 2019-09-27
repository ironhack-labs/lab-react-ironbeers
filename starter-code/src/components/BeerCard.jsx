import React from 'react'
import { Link } from 'react-router-dom'

export default function BeerCard (beer) {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: '350px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={beer.image_url} className="card-img img-responsive" alt={beer.name} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
        <p className="card-text">Created By: <small className="text-muted">{beer.contributed_by}</small></p>
        <p className="card-text">
          <Link to={`/beer-detail/${beer._id}`}>View Details</Link>
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
