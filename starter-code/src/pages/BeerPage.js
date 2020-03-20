import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import {getBeer} from './../services/beerService'

const BeerPage = (props) => {
  const [beer, setBeer] = useState('');
  const beerId = props.match.params.id;

  useEffect(() => {
    getBeer(beerId).then(beer => setBeer(beer));
  }, []);

  return(
    <div>
      <Header/>
      <img src={beer.image_url}></img>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.attenuation_level}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerPage;