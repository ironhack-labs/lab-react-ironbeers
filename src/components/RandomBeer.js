import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header/Header.js';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const randomBeerFromApi = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      console.log(randomBeerFromApi.data);
      setRandomBeer(randomBeerFromApi.data);
      setLoaded(true);
    };
    callApi();
  }, []);

  return (
    loaded && (
      <>
        <Header />

        <div className="RandomBeer">
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </>
    )
  );
};

export default RandomBeer;
