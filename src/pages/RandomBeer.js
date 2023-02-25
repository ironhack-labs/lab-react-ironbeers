import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BeerCard from "../components/BeerCard"



export default function RandomBeer() {
  const [beer, setBeer] = useState({})

  async function getRandmonBeer(){
    const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    setBeer(data)
  }

  useEffect(() => {
    getRandmonBeer()
  }, [])
  
  return (
    <BeerCard {...beer}/>
  )
}
