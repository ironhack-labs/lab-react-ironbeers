import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the beers:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
