import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer }) => {
  return(
    <div className="card mb-3" style={{maxWidth: "100vw"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img style={{maxWidth: "10%"}} src={beer.image_url} className="card-img" alt={beer.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><Link to={{ pathname: `/beer/${beer._id}`, state: { beerInfo: beer } }}>{beer.name}</Link></h5>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text"><small className="text-muted">Created by: {beer.contributed_by}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard;