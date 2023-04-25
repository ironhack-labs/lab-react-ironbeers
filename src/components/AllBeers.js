import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><strong>Created by:</strong> {beer.contributed_by}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeers;
