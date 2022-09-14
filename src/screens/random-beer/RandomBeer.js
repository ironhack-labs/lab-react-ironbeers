import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import DetailBeer from '../../components/detail-beer/DetailBeer'

function RandomBeer() {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        console.log(res.data)
        setBeer(res.data)
      })
  }, [])
  return (
    <div>
      <DetailBeer  {...beer}/>
    </div>
  )
}

export default RandomBeer