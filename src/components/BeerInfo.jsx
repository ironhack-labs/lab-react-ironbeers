import React, {Component, Fragment} from 'react';
import NavBar from './NavBar';

const BeerInfo = (props) => {
  const info = props.location.state.beerDetail
  return(
    <Fragment>
      <NavBar/>
      <div>
        <img src={info.image_url} style={{height: "10rem"}} alt="beer"/>
        <h5>{info.name} {info.attenuation_level}</h5>
        <p>{info.tagline} {info.first_brewed}</p>
        <p>{info.description}</p>
        <p>{info.contributed_by}</p>

      </div>
    </Fragment>
 )
}

export default BeerInfo;