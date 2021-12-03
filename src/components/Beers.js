import React from 'react';

import Header from './Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeersPage() {
  const [beersList, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('Info recibida', response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      {beersList.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <h5>{beer.tagline}</h5>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default BeersPage;
