import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import BeerDetail from './../components/BeerDetail';
import {getRandomBeer} from './../services/beerService';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState('');

  useEffect(() => {
    getRandomBeer().then(beer => setBeer(beer));
  }, []);

  return(
    <div>
      <Header/>
      <BeerDetail beer={beer}/>
    </div>
  );
}

export default RandomBeerPage;