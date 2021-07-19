import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function RandomBeer() {
  const [randomBeer, updateBeer] = useState({});

  useEffect(async () => {
    let response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );
  }, []);

  /*if(!randomBeer){
        return <p>Random beer loooaaaa-ding...</p>
      } */

  return (
    <div>
      <Header />
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
