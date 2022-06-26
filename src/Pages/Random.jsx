import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function Random() {
    const [beer, setBeer] = useState({});
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({data}) => {
                setBeer(data)
                console.log(data)
            }).catch((err) => {console.error(err);})
    })
  return (
    <div>
    <Navbar />
    <h1>Random Beer</h1> 
      <img src={beer.image_url} alt={beer.name} height="250px" />

      <div className="head">
        <div className="h-t">
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
        </div>

        <div className="prod">
          <p>{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
      </div>

      <p className="description">{beer.description}</p>
      <p className="creator">{beer.contributed_by}</p>
    </div>
  )
}

export default Random