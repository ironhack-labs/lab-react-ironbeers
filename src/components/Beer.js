import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Navbar from './Navbar';

const Beer = (props) => {
  let [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((data) => {
      setBeers(data);
    });
  }, []);

  const beerId = props.match.params.id;

  // console.log(beers.data);

  let beer;
  if (beers.data) {
    const findBeer = (id) => beers.data.find((beer) => beer._id === id);
    const foundBeer = findBeer(beerId);
    beer = (
      <div className="beerDetails">
        <img src={foundBeer.image_url} alt="" />
        <h3>{foundBeer.name}</h3>
        <p>{foundBeer.tagline}</p>
        <p>{foundBeer.first_brewed}</p>
        <p>{foundBeer.attenuation_level}</p>
        <p>{foundBeer.description}</p>
        <p>
            <b>Created by:</b>{' '}
            {foundBeer.contributed_by.replace(/ *\<[^)]*\> */g, '')}
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

export default Beer;
