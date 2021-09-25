import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RandomBeer(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        console.log('this is the response data', response.data);
        setBeer(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <div className="main-beer-container">
        <div key={beer._id} className="card" className="beer-container">
          <img height="250px" src={beer.image_url} alt="beers" />
          <div>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>first brewed : {beer.first_brewed}</p>
            <p>attenuation level: {beer.attenuation_level}</p>
            <p>description: {beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  );
}