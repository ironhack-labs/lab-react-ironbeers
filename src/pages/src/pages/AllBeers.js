import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => setBeers(data));
  }, []);

  return (
    <div>
      <Header />
      <h2>All Beers</h2>
      <ul className="beer-list">
        {beers.map(beer => (
          <li key={beer._id} className="beer-item">
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeers;