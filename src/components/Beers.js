import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from './Nav';
import BeerItem from './BeerItem';

const Beers = () => {
  const [beers, setbeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setbeers([...response.data]);
    }
    fetchBeers();
  }, []);

  return (
    <div>
      <Nav />
      <div>
        {beers.map((item, i) => (
          <BeerItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Beers;
