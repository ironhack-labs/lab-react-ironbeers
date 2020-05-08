import React from 'react';
import Carta from '../components/Card';

const Home = () => (
  <main className='homeContainer'>
    <Carta path='beers' imagen={'/images/beers.png'} title={'All Beer'} texto={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, alias blanditiis perferendis eaque dolorem nisi eveniet voluptatibus debitis accusantium sequi exercitationem minus voluptates ea aspernatur, nulla dolore est itaque aliquid.'} />
    <Carta path='randomBeer' imagen={'/images/random-beer.png'} title={'Random Beer'} texto={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, alias blanditiis perferendis eaque dolorem nisi eveniet voluptatibus debitis accusantium sequi exercitationem minus voluptates ea aspernatur, nulla dolore est itaque aliquid.'} />
    <Carta path='newBeer' imagen={'/images/new-beer.png'} title={'New Beer'} texto={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, alias blanditiis perferendis eaque dolorem nisi eveniet voluptatibus debitis accusantium sequi exercitationem minus voluptates ea aspernatur, nulla dolore est itaque aliquid.'} />
  </main>
);

export default Home;
