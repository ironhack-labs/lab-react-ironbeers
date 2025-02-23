import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

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

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {beers.map(beer => (
          <li key={beer._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img 
                src={beer.image_url}
                alt={beer.name}
                style={{ height: '100px', display: 'block', margin: '0 auto 10px' }}
              />
              <h2 style={{ textAlign: 'center' }}>{beer.name}</h2>
              <p style={{ textAlign: 'center' }}>{beer.tagline}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
