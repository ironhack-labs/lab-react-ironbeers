import React from 'react';
import allBeersImage from './beers.png';
import random from './random-beer.png';
import newPicBeer from './new-beer.png';
import Card from '../Card/Card';

const Home = () => {
  return (
    <div>
      <Card
        link="/beers"
        image={allBeersImage}
        title="All Beers"
        text="aqui vai quaquer texto"
      />
      <Card
        link="/random-beer"
        image={random}
        title="Random Beer"
        text="aqui vai um texto bonito falando qualquer coisa"
      />
      <Card
        link="/new-beer"
        image={newPicBeer}
        title="New Beer"
        text="aqui vai um texto bonito falando qualquer coisa"
      />
    </div>
  );
};

export default Home;
