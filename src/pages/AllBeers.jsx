import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useEffect } from 'react';

function AllBeers() {
  const [everyBeer, setEveryBeer] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);

  const fetchBeers = async () => {
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setEveryBeer(data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  const handleBeerClick = (beer) => {
    setSelectedBeer(beer);
  };

  return (
    <div>
      <Header />
      <h1>Click on each beer to see the full Description</h1>
      {selectedBeer ? (
        <div>
          <h2>{selectedBeer.name}</h2>
          <p>{selectedBeer.tagline}</p>
          <p>First Brewed: {selectedBeer.first_brewed}</p>
          <p>Attenuation Level: {selectedBeer.attenuation_level}</p>
          <p>{selectedBeer.description}</p>
          <p>Contributed By: {selectedBeer.contributed_by}</p>
          <button onClick={() => setSelectedBeer(null)}>Go Back</button>
        </div>
      ) : (
        everyBeer.map((oneBeer) => (
          <div className="" onClick={() => handleBeerClick(oneBeer)}>
            <img src={oneBeer.image_url} alt="beer bottle" />
            <div className="side-text" style={{ height: '200px' }}>
              <h2>{oneBeer.name}</h2>
              <h3>{oneBeer.tagline}</h3>
              <h5>Created by: {oneBeer.contributed_by}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllBeers;
