import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
 
  const getRanBeer = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
      setRandomBeer(response.data);
    } catch(error) {
      console.log(error)
    };
  }

  useEffect(() => {
    getRanBeer()
   }, []);

  return (
<div>
<Header />
<div className='container'>   
    <div className='beer-detail'>
    <img className='beer-detail' src={randomBeer.image_url} alt={randomBeer.name} />
    <div className='beer-description'/>
    <div className='beer-header'>
    <div><h1>{randomBeer.name}</h1></div>
    <div><h2 style={{ color:'grey' }}>{randomBeer.attenuation_level}</h2></div>
    </div>
    <div className='beer-header-2'>
    <p style={{ color:'grey'}}>{randomBeer.tagline}</p>
    <p style={{ fontSize: "12px" }}><b>{randomBeer.first_brewed}</b></p>
    </div>
    <div className='descrip'>
    <p style={{ textAlign:"left", fontWeight:'bolder'}}>{randomBeer.description}</p>
    <p style={{ color:'grey', fontSize: "12px", textAlign:"left"}}><b>{randomBeer.contributed_by}</b></p>
    </div>
    </div>
   </div>
  </div>
  );
}

export default RandomBeer