import React, { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';
import Navbar from '../../components/Navbar/Navbar';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const setState = () => {
    getBeers();
  };
  const getBeers = async () => {
    let beersFetch;
    if (query === '') {
      beersFetch = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    } else {
      beersFetch = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
    }
    let { data } = beersFetch;
    setBeers([...data]);
    setLoading(false);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => setState(), []);
  useEffect(() => setState(), [query]);
  return (
    <main>
      <Navbar />
      <input
        type="text"
        name="search"
        placeholder="Search Beer"
        onChange={handleSearch}
      />
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
