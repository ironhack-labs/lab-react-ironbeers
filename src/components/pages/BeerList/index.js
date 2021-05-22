import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../organisms/Header';

import APIService from '../../../services/api.services';

import ListedBeer from '../../molecules/ListedBeer';

const BeerList = () => {
  const [beersList, setBeersList] = useState([]);

  const getAllBeers = async () => {
    const allBeers = await APIService.listAllBeers();
    setBeersList(allBeers);
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  console.log(beersList);
  return (
    <div>
      <Header />
      <div>
        <ListedBeer beers={beersList} />
      </div>
    </div>
  );
};

export default BeerList;
