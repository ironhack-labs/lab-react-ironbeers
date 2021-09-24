import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function RandomBeer() {
  const [RandomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div>
      <img src={RandomBeer.image_url} alt="" />
      <h3>{RandomBeer.name}</h3>
      <p>{RandomBeer.tagline}</p>
      <p>{RandomBeer.first_brewed}</p>
      <p>{RandomBeer.attenuation_level}</p>
      <p>{RandomBeer.description}</p>
      <p>{RandomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
