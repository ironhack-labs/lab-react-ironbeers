import React from 'react'
import './ShowBeer.css'

const ShowBeer = ({beer}) => {
  return (
    <div className="ShowBeer container nav-offset">
      <img alt="" src={beer.image_url}></img>
      <div className="container beer-info">
        <div className="line">
          <h4 className="">{beer.name}</h4>
          <h4 className="gray">{beer.attenuation_level}</h4>
        </div>
        <div className="line">
          <p className="gray">{beer.tagline}</p>
          <small className=""><b>{beer.first_brewed}</b></small>
        </div>
        <p>{beer.description}</p>
        <small className="gray">{beer.contributed_by}</small>
      </div>
    </div>
  )
}

export default ShowBeer
