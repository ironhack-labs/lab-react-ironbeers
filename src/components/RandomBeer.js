import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerView from './BeerView/BeerView';
import Header from "./Header/Header";


const RandomBeers = () => {

  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log('Info single-beer', response.data);
        setRandomBeer(response.data);
      });
  }, []);
  return (
    <div>
     <Header/>
     <BeerView beer={randomBeer}/>
    </div>
  );
};

export default RandomBeers;

