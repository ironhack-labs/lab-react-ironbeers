
import { useState, useEffect } from 'react';
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
        console.error('Error fetching the beers data:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} style={{ width: '50px' }} />
            <h2>{beer.name}</h2>
          </Link>
          <p>{beer.tagline}</p>
          <p><strong>Created by: {beer.contributed_by}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default AllBeersPage;