import React from 'react'
import {Link} from 'react-router-dom'

const Beer = ({beer}) => {
  return (
    <div className="Beer">
      <Link to={`/beers/${beer._id}`} className="d-flex">
        <img alt="" src={beer.image_url} width="50px"></img>
        <div>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p><b>Created by: </b>{beer.contributed_by}</p>
        </div>
      </Link>
    </div>
  )
}

export default Beer
