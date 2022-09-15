import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const RandomBeerPage = () => {
  const [randomBeer,setRandomBeer] = useState({})
  const getRandomBeer = async()=>{
    try{
      let {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      setRandomBeer(data)
    }catch(error){
       return error
    }
  }
  useEffect(()=>{
    getRandomBeer()
  },[])
  return (
    <div>RandomBeerPage
    <div style={{ marginTop: 40 }}>
    <div><img src={randomBeer.image_url} alt=""/></div>
      <div>{randomBeer.name}</div>
      <div>{randomBeer.tagline}</div>
      <div>{randomBeer.first_brewed}</div>
      <div>{randomBeer.attenuation_level}</div>
      <div>{randomBeer.description}</div>
      <div>{randomBeer.contributed_by}</div>
    </div>
    </div>
  )
}
