import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Beer from './Beer';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Beers">
      <Header />
      {loading
        ? 'Loading'
        : beers.map((beer) => {
            return <Beer key={beer._id} beer={beer} />;
          })}
    </div>
  );
};

export default Beers;
