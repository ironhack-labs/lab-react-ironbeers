import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleBeer = () => {
  const params = useParams();
  const id = params.beerId;
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(response => {
        console.log(response)
        setBeer(response.data)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div>

      <div key={id} className='BeerContainer'>
        <div>
          <img className="BeerImg" src={beer.image_url} alt="beer-img" />
        </div>
        <div className='BeerInfo'>
          <h2> {beer.name} </h2>
          <h3> {beer.tagline} </h3>
          <p> {beer.description} </p>
          <p> {beer.first_brewed} </p>
          <p> {beer.brewers_tips} </p>
          <p> {beer.attenuation_level} </p>
          <h5> {beer.contributed_by} </h5>
        </div>
      </div>
    </div>

  )
}

export default SingleBeer;