import React, { useState, useEffect } from 'react';
import { getBeers, findBeer } from '../../services/api-client';
import BeerCard from '../beercard/BeerCard';
import './BeerList.css';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getBeers()
      .then((res) => {
        setBeers(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    findBeer(search)
      .then((res) => {
        setBeers(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cards">
      <div className="col-12">
        <div className="form-group search-input">
          <label htmlFor="search"></label>
          <input
            type="text"
            className="form-control"
            id="search"
            aria-describedby="search"
            placeholder="Enter beer search"
            name="search"
            onChange={(e) => handleChange(e)}
            value={search}
          />
        </div>
      </div>
      {beers.length ? (
        beers.map((beer, key) => <BeerCard key={key} beer={beer} />)
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default BeerList;
