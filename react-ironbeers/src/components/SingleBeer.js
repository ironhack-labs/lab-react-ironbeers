import React from 'react'
import { Link } from 'react-router-dom';

const SingleBeer = (props) => {

  const { params } = props.match;
  const foundBeer = props.allBeers.find(theBeer => theBeer._id === params.beerIndex)

  return (
    <div>
      <Link to='/'>Home</Link>
      <img src={foundBeer.image_url} alt='beer pic'/>
      <h1>{foundBeer.name}</h1>
      <p>Tagline: {foundBeer.tagline}</p>
      <p>First brewed: {foundBeer.first_brewed}</p>
      <p>Attenuation level: {foundBeer.attenuation_level}</p>
      <p>Description: {foundBeer.description}</p>
      <p>Contributed by: {foundBeer.contributed_by}</p>
    </div>
  )
}

export default SingleBeer