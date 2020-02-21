import React from 'react'
import { NavLink } from 'react-router-dom'

const BeerCard = ({beer}) => {
  return (
    <NavLink exact to={`/beers/${beer._id}`}>
    <div className="beerCard">

      <div className="beerCardImage">
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className="beerCardDetails">
        <div><h2>{beer.name}</h2></div>
        <div><p>{beer.tagline}</p></div>
        <div><span>First brewed : </span><span>{beer.first_brewed}</span></div>
      </div>

    </div>
    </NavLink>
  )
}

export default BeerCard;
