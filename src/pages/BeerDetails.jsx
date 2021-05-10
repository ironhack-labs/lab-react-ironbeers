
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../components/Header/Header";

const BeerDetails = ({match}) => {
  const { beerId } = match.params;

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((responseDB) => {
        setBeer(responseDB.data);
      })
      .catch(err => console.error(`Error occured ${err}`));
  }, [beerId]);

  return (
    <section>
      <Header />
      <figure>
        <img src={beer.image_url} alt="bottle-pic"/>
      </figure>
      <div  className="flex-row">
        <div className="flex-column">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
        </div>
        <div className="flex-column">
          <h2>{beer.attenuation_level}</h2>
          <p>{beer.first_brewed}</p>
        </div>
      </div>
      
      <div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </section>
  )
}

export default BeerDetails;
