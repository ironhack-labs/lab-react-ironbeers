import React from 'react'

const BeerCard = ({beer}) => {
  return (
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
  )
}

export default BeerCard;
