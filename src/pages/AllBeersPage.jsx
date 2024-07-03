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
        console.error('Error fetching beers:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map(beer => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <h2>{beer.name}</h2>
          </Link>
          <p>{beer.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBeersPage;
