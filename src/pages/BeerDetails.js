import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BeerDetails() {
  const params = useParams()
  const id = params.id
  const [beer, setBeer] = useState([])
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data)
        setBeer(response.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div
      key={beer._id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <img src={beer.image_url} style={{ height: 100 }} alt='beer-pic' />
      <div>
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <h3>{beer.attenuation_level}</h3>
        <h3>{beer.first_brewed}</h3>
        <h3>{beer.description}</h3>
        <h3>{beer.contributed_by}</h3>
      </div>
    </div>
  )
}
