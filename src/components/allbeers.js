import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { getAllBeers } from '../actions/beers';

const AllBeers = () => {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    getAllBeers()
      .then((beers) => {
        const allBeersHere = JSON.parse(JSON.stringify([beers]));
        setAllBeers(allBeersHere);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div>All Beers</div>
      {allBeers.map((beer) => {
        return (
          <div key={beer.name}>
            <div>{beer.name}</div>
            <img src={beer.image} alt={beer.name} />
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
