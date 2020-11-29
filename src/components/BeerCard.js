import React, { useState, useEffect} from 'react';
import './BeerCard.css';
import Nav from './Nav';

const BeerCard = ({match}) => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    fetchBeer();
  }, []);

  const fetchBeer = async () => {
    const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${match.params.id}`);

    const beerItem = await data.json();
    setBeer(beerItem)
    console.log(beerItem)
  }
  
  return  (
    <div>
      <Nav />
      <div className='beerCard'>
        <div className='beerCardImage'>
          <img src={beer.image_url} alt={beer.name}></img>
        </div>
        
        <div className='beerCardTitle'>
          <h1>{beer.name}</h1>
          <h2>{beer.attenuation_level}</h2>
        </div>
        <div className='beerCardTagline'>
          <h2>{beer.tagline}</h2>
          <p><strong>{beer.first_brewed}</strong></p>
        </div>
        <p className='beerCardDescription'>{beer.description}</p>
        <p className='beerCardBy'>{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerCard;