import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Beer from '../../components/Beer/Beer';

const RandomBeer = () => {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);
  const setState = () => {
    getBeers();
  };
  const getBeers = async () => {
    const beersFetch = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );
    const { data } = beersFetch;
    console.log(data);
    setBeer({ ...data });
    setLoading(false);
  };
  useEffect(() => setState(), []);
  return (
    <main>
      <Navbar />
      {!loading ? <Beer beer={beer} /> : <p>It's loading bro...</p>}
    </main>
  );
};

export default RandomBeer;
