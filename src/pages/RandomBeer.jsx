import React, { useEffect, useState } from 'react'
import SingleBeer from './SingleBeer'
import axios from 'axios'

function RandomBeer() {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(result => {
      setBeer(result.data)
    })
  }, [])

  return (
    <div>
      {!beer && <p>Loading...</p>}
      {beer && <SingleBeer beer={beer} randomBeer={true} />}
    </div>
  )
}

export default RandomBeer