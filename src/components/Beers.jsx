import React from 'react'

import {Link} from "react-router-dom"

const Beers = (props) => {

  return (
    <>
      {props.beers.map((beer) => (
        <div className="card" >
          <img className="list-img" src={beer.image_url} alt="Card cap"/>
          <div className="card-body">
            <Link to={`/beers/${beer._id}`}><p className="card-text">{beer.name}</p></Link>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">Contributor: {beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Beers
