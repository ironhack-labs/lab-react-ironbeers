import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data)
        setBeers(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {beers.map((beer) => {
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
              <h3>{beer.contributed_by}</h3>
              <Link to={`/beer/${beer._id}`}>details</Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
