import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PageStyles.css';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching beers:', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error searching beers:', error);
      });
  };

  return (
    <div className="all-beers-page">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search beers..."
        className="search-input"
      />
      <div className="beers-list">
        {beers.map(beer => (
          <div key={beer._id} className="beer-item">
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <div className="beer-info">
              <h2>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h2>
              <p>{beer.tagline}</p>
              <p><strong>Created by: {beer.contributed_by}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
