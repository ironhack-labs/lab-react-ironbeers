import React, { useState, useEffect } from 'react';
import header from '../assets/header.png';
import axios from 'axios';
import {Link} from 'react-router-dom'

function RandomBeer() {
  const [randomBeer, updateBeer] = useState({});

  useEffect(() => {
     const getRandomBeer = async() => {
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
      updateBeer(response.data)   //updates first element of destructured useState above!!!!!!
    }
     getRandomBeer()
  }, []);


  /*if(!randomBeer){
        return <p>Random beer loooaaaa-ding...</p>
      } */

  return (
    <div>
      <Link to ="/">
   <img src={header} alt="home"/>
   </Link>
      <img src = {randomBeer.image_url} alt="some beer"></img>
                   <p>{randomBeer.name}</p>
                   <p>{randomBeer.tagline}</p>
                   <p>{randomBeer.first_brewed}</p>
                   <p>{randomBeer.attenuation_level}</p>
                   <p>{randomBeer.description}</p>
                   <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
