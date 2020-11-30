import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  let [beerState, setBeerState] = useState({});

  useEffect(() => {
    let newBeerState = { ...beerState };
    const fetchBeers = () => {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((result) => {
          newBeerState =
            result.data[Math.floor(Math.random() * result.data.length)];
        })
        .then(() => setBeerState(newBeerState));
    };
    fetchBeers();
  }, []);

  return (
    <div className="beer-detail">
      <img
        className="beer-detail-image"
        src={beerState.image_url}
        alt={beerState.name}
      ></img>
      <div className="beer-detail-text">
        <h3>{beerState.name}</h3>
        <h4 className="beer-detail-tagline">Tagline: {beerState.tagline}</h4>
        <h5>First brewed: {beerState.first_brewed}</h5>
        <h5>Attenuation level: {beerState.attenuation_level}</h5>
        <p>Description: {beerState.description}</p>
        <h5>Contributed by: {beerState.contributed_by}</h5>
      </div>
    </div>
  );
};

export default RandomBeer;
