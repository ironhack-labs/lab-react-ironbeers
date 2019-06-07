import React from 'react'
import { Link } from 'react-router-dom'

const Card = beer => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <article className="card">
          <img className="card-img-top" src={beer.image_url} alt={beer.name} />
          <header className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <Link className="btn btn-sm btn-outline-dark" to={`/beers/${beer._id}`}> Ver detalles </Link>
          </header>
        </article>
      </div>
    )
}

export default Card