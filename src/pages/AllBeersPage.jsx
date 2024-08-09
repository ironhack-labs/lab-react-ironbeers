import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  useEffect(() => {
    const fetchFilteredBeers = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching filtered beers:', error);
      }
    };

    if (searchQuery) {
      fetchFilteredBeers();
    } else {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
          setBeers(response.data);
        })
        .catch(error => console.error('Error fetching beers:', error));
    }
  }, [searchQuery]);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={handleSearchInput}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      {beers.map(beer => (
        <div key={beer._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <small><strong>Contributed by:</strong> {beer.contributed_by}</small>
          <br />
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default AllBeersPage;
