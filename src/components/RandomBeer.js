import React, { useState, useEffect} from 'react';
import './RandomBeer.css';
import Nav from './Nav';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetchRandomBeer()
  }, []);

  const fetchRandomBeer = async () => {
    const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`);

    const randomBeerItem = await data.json();
    setRandomBeer(randomBeerItem)
    
  }
  
  return  (
    <div>
      <Nav />
      <div className='beerCard'>
        <div className='beerCardImage'>
          <img src={randomBeer.image_url} alt={randomBeer.name}></img>
        </div>
        
        <div className='beerCardTitle'>
          <h1>{randomBeer.name}</h1>
          <h2>{randomBeer.attenuation_level}</h2>
        </div>
        <div className='beerCardTagline'>
          <h2>{randomBeer.tagline}</h2>
          <p><strong>{randomBeer.first_brewed}</strong></p>
        </div>
        <p className='beerCardDescription'>{randomBeer.description}</p>
        <p className='beerCardBy'>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;