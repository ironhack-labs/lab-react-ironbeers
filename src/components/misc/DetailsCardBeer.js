import React from 'react';
import Header from './Header';

function DetailsCardBeer({beer}) {
  return (
    <div className="details-beer">
      <Header />
      <div className="col-sm-4 mx-auto">
        <div className="card mx-auto border-0 container">
          <img className="card-img-top mx-auto" src={beer.image_url} alt={beer.name} />
          <div className="card-body text-left">
            <h5 class=" card-title ">{beer.name}</h5>
            <p className="card-text"> {beer.description}</p>
            <p className="card-text">Tag_line: {beer.tagline}</p>
            <p className="card-text">first_brewed: {beer.first_brewed}</p>
            <p className="card-text">attenuation_level: {beer.attenuation_level}</p>
            <p className="card-text">contributed_by: {beer.contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsCardBeer

