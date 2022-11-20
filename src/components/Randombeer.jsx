import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function Randombeer() {
  const [random, setRandom] = useState({});
  const [randomBeerDetail, setRandomBeerDetail] = useState({});

  const getFromApi = async () => {
    try {
      const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${random}`);
      setRandom(apiCall.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

   getFromApi()

  }, [])
  return (
    <div>
        <Header/>
          <img src={randomBeerDetail.image_url} alt=""/>
          <h2>{randomBeerDetail.name}</h2>
          <h3>{randomBeerDetail.tagline}</h3>
          <p>{randomBeerDetail.first_brewed}</p>
          <p>{randomBeerDetail.attenuation_level}</p>
          <p>{randomBeerDetail.description}</p>
          <p>Created by: {randomBeerDetail.contributed_by}</p>
    </div>
  )
}

export default Randombeer