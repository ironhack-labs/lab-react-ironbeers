import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>All Beers</h1>
      <div>
        <label>Search:</label>
        <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
      </div>
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ width: '50px', height: '150px' }} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
