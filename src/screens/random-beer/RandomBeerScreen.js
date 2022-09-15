import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import DetailBeer from '../../components/detail-beer/DetailBeer'

function RandomBeerScreen() {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        console.log(res.data)
        setBeer(res.data)
      })
  }, [])
  return (
    <div className='d-flex flex-column align-items-center'>
      {beer ? (
        <DetailBeer  {...beer}/>) : (
          <h1 className='mt-5 pt-5'>Loading...</h1>
        )
      }
    </div>
  )
}

export default RandomBeerScreen