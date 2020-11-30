import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import BeerList from '../components/BeerList.jsx';
const Beers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  useEffect(() => {
    console.log(beers);
  }, [beers]);

  return <>{beers.length === 0 ? <Spin size="large" /> : <BeerList beers={beers} />}</>;
};

export default Beers;
