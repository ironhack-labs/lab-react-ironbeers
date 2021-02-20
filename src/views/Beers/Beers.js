import React, { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const setState = () => {
    getBeers();
  };
  const getBeers = async () => {
    const beersFetch = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const { data } = beersFetch;
    setBeers([...data]);
  };
  useEffect(() => setState(), []);
  console.log(beers);
  return (
    <main>
      <Navbar />
      {beers.map((beer) => (
        <BeerList beer={beer} key={beer._id} />
      ))}
    </main>
  );
};

export default Beers;
