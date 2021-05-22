import React, { useState, useEffect } from 'react';

import Header from '../../organisms/Header';

import APIService from '../../../services/api.services';

const BeerDetail = (props) => {
  const [beer, setBeer] = useState({});

  const findBeer = async (props) => {
    const beerId = props.match.params.beerId;
    const foundBeer = await APIService.getOneBeer(beerId);
    setBeer(foundBeer);
  };

  useEffect(() => {
    findBeer();
  }, []);

  console.log(beer);
  return (
    <div>
      <Header />
      <h1>oi!</h1>
    </div>
  );
};

export default BeerDetail;
