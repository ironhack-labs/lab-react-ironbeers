import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Navbar from './Navbar';

const RandomBeer = (props) => {
  let [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((data) => {
      setBeers(data);
    });
  }, []);

  // console.log(beers.data)

  let beer;
  if (beers.data) {
    let randomBeer = beers.data[Math.floor(Math.random() * beers.data.length)];
    // console.log(randomBeer)
    beer = (
      <div className="beerDetails">
        <img src={randomBeer.image_url} alt="" />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>
          <b>Created by:</b>{' '}
          {randomBeer.contributed_by.replace(/ *\<[^)]*\> */g, '')}
        </p>
      </div>
    );
  } else {
    beer = null;
  }

  return (
    <>
      <Navbar />
      {beer ? beer : null}
    </>
  );
};

export default RandomBeer;
