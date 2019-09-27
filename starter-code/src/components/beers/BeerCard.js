import React from 'react';
import {Link} from 'react-router-dom';

function BeerCard({beer}) {
    return (
      <div className="col-12 col-md-3 beer-box">
        <div className="row">
          <div className="col-md-12 col-4">
            <img className="beer-img-card" src={beer.image_url} alt={beer.name}/>
          </div>
          <div className="col-md-12 col-8">
            <p> <Link to={`/beers/${beer._id}`}>{beer.name}</Link></p>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      </div>
    )
}

export default BeerCard;