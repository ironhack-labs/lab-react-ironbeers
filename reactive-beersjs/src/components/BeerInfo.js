import React, { Fragment } from 'react';
import NavBar from './NavBar';

const BeerInfo = (props) => {
  const beer = props.location.state.beerInfo;
  return(
    <Fragment>
      <NavBar />
      <div className="container-fluid" style={{width: "100 vw"}}>
        <img style={{width: "10%"}} src={beer.image_url} className="card-img-top" alt={beer.name} />
        <div className="row">
          <h5 className="col">{beer.name}</h5>
          <p className="col"><small className="text-muted">{beer.attenuation_level}</small></p>
        </div>
        <div className="row">
          <p className="col"><small className="text-muted">{beer.tagline}</small></p>
          <p className="col"><small className="text-muted">{beer.first_brewed}</small></p>
        </div>
        <p className="col">{beer.description}</p>
        <p className="col"><small className="text-muted">Created by: {beer.contributed_by}</small></p>
      </div>
    </Fragment>
  )
}

export default BeerInfo;