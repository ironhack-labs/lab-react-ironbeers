import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BeersList = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await axios.get(url);
      setBeers(response.data);
    };

    fetchData();
  }, []);

  console.log('el state', beers);

  const formatName = str => str.replace(/<.*>/, '');

  return (
    <div>
      {beers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        beers.map((beer, i) => {
          return (
            <div key={i}>
              <img src={beer.image_url} />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created by: {formatName(beer.contributed_by)}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
