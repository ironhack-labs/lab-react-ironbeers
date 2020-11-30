
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RBeer = () => {
    const [rBeer, setrBeer] = useState([])
  
    useEffect(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(beerRandom => setrBeer(beerRandom.data),
      )
  }, [])

  return (
    <div>
<header>
<ul>
<Link to='/'>Home</Link>
</ul>
</header>
<div className="beer-detail">
      <img className="beer-img"src={rBeer.image_url} alt={rBeer.name}  style={{width:"200px"}}></img>
      <div className="beer-text">
        <h3>{rBeer.name}</h3>
        <h4>Tagline: {rBeer.tagline}</h4>
        <h5>First brewed: {rBeer.first_brewed}</h5>
        <h5>Attenuation level: {rBeer.attenuation_level}</h5>
        <p>Description: {rBeer.description}</p>
        <h5>Contributed by: {rBeer.contributed_by}</h5>
      </div>
    </div>
    </div>
  )
}

export default RBeer;