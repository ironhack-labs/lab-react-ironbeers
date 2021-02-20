import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Beer from '../../components/Beer/Beer';

const BeerView = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);
  const setState = () => {
    getBeers();
  };
  const getBeers = async () => {
    const beersFetch = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const { data } = beersFetch;
    const beerSelected = data.filter((beer) => beer._id === beerId);
    setBeer(...beerSelected);
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

export default BeerView;
