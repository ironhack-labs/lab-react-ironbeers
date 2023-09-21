import React from 'react'
import Homebutton from './Homebutton'
import { useState, useEffect } from "react"
import axios from "axios"

function Randombeer() {
  const [oneBeer, setOneBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setOneBeer(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Homebutton></Homebutton>
      <h3>One Random Beer</h3>
      {!oneBeer && <h2>...Loading</h2>}

      {oneBeer && (
        <div className='card'>
          <h2>{oneBeer.name}</h2>
          
        </div>
      )}
    </div>
  )
}

export default Randombeer