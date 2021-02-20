import React, { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';
import Navbar from '../../components/Navbar/Navbar';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const setState = () => {
    getBeers();
  };
  const getBeers = async () => {
    const beersFetch = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const { data } = beersFetch;
    setBeers([...data]);
    setLoading(false);
  };
  useEffect(() => setState(), []);
  return (
    <main>
      <Navbar />
      {!loading ? (
        beers.map((beer) => (
          <Route key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <BeerList beer={beer} />
            </Link>
          </Route>
        ))
      ) : (
        <p>It's loading bro...</p>
      )}
    </main>
  );
};

export default Beers;
