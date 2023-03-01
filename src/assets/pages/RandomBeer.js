import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BeerCard from "../components/BeerCard"
import { Button } from 'antd'



export default function RandomBeer() {
  const [beer, setBeer] = useState({})

  async function getRandomBeer(){
    const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    setBeer(data)
  }

  useEffect(() => {
    getRandomBeer()
  }, [])

  return (
    <>
    <BeerCard {...beer}/>
    <Button onClick={()=>{getRandomBeer()}}>Random</Button>
    </>
  )
}