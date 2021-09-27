import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Header from '../Header';
import BeerCard from '../Cards/ListBeerCard';
import FormField from '../FormField';

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers([...response.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => {
        setBeers([...response.data]);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <FormField
          label="Search for a beer"
          name="name"
          onChange={handleChange}
          value={search}
        />
        {beers.map((beerObj) => {
          return (
            <BeerCard
              img={beerObj.image_url}
              name={beerObj.name}
              key={beerObj._id}
              tagline={beerObj.tagline}
              contributed={beerObj.contributed_by}
              id={beerObj._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListBeers;
