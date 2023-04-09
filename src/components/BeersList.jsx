import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function BeersList({ beers }) {
  return (
    <>
      <Header />
      {beers.map((beer) => (
        <div className="card mb-3" key={beer.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={beer.image} className="img-fluid rounded-start h-36" alt="beer" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={`/beers/${beer.id}`} className="card-title text-2xl font-semibold">{beer.name}</Link>
                <p className="card-text font-extralight text-lg">{beer.tagline}</p>
                <p className="card-text text-xs"><small className="text-body-secondary font-bold text-sm">Created by: </small>{beer.contributedBy}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
