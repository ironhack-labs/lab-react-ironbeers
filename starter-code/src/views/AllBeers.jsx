import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import { fetchAll as fetchAllBeers } from "../services/beers";
import BeerCard from '../components/BeerCard';

const AllBeers = () => {

  const [allBeers, setBeers] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetchAllBeers();
      setBeers(data);
      console.log(data)
    })();
  }, []);

  return (
    <div>
      <Header />
      {allBeers.map(beer => (
        <BeerCard key={beer._id} {...beer} />
      ))}
    </div>
  )
}

export default AllBeers
