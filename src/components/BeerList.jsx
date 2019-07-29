import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = (props) => {
  return(
    <li className="media">
      <img className="mr-3" style={{height: "10rem"}} src={props.beerInfo.image_url} alt="beer"/>
      <div className="media-body">
        <h5 className="mt-0">{props.beerInfo.name}</h5>
        <p>{props.beerInfo.tagline}</p>
        <p>{props.beerInfo.contributed_by}</p>
      </div>
      <Link to={{ pathname: `/beers/${props.beerInfo.id}`, state: {beerDetail: props.beerInfo} }} className="btn btn-outline-dark text-uppercase" role="button" >See more</Link>

  </li>

  )
}

export default BeerList;