import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomBeer() {

  const [beers, setBeers] = useState([])
  
  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
          console.log(response.data)
          let randomIndex = Math.floor(Math.random() * response.data.length);
          setBeers(response.data[randomIndex])        
      })
      .catch(err => console.log(err))
  },[])
  


 /*  const [randomBeer, setRandomBeer] = useState([]) */
 
/*   useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
          console.log(response.data)
          setRandomBeer(response.data)        
      })
      .catch(err => console.log(err))
  },[]) */

/*   return (
    <div>
      <img src={randomBeer.image_url} height='120' alt='beerPic' />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <h3>First Brewed: {randomBeer.first_brewed}</h3>
      <h4>Attenuation Level: {randomBeer.attenuation_level}</h4>
      <p>{randomBeer.description}</p>
      <h5>{randomBeer.contributed_by}</h5>
   </div>
  ) */

  return(
    <div>
    <img src={beers.image_url} height='120' alt='beerPic' />
    <h1>{beers.name}</h1>
    <h2>{beers.tagline}</h2>
    <h3>First Brewed: {beers.first_brewed}</h3>
    <h4>Attenuation Level: {beers.attenuation_level}</h4>
    <p>{beers.description}</p>
    <h5>{beers.contributed_by}</h5>
 </div>
  )
}
