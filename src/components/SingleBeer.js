import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SingleBeer(props) {
    const [beer, setBeer] = useState(null);
    const getBeer = () => {
    // get the data for that country form the server
    const beerId = props.match.params.id
    console.log(beerId);
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data)
        
        setBeer(response.data);
      })
      .catch(err => console.log(err))
    }

  useEffect(() => {
    getBeer(); }, [props])
  if (!beer) {
    return <></>
  }
    return (
        <div>
            <img src={beer.image_url} alt={beer.name}/>
            <h3>{beer.name}</h3>
            <h3>{beer.tagline}</h3>
            <h3>{beer.first_brewed}</h3>
            <h3>{beer.attenuation_level}</h3>
            <h3>{beer.description}</h3>
            <h3>{beer.contributed_by}</h3>
        </div>
    )
}
