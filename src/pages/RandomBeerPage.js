import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers/random`);
      const randomBeerData = response.data;

      console.log('random beer', randomBeerData);
      setRandomBeer(randomBeerData);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <h2>Random Beer</h2>
      <div className="details">
        <div className="details-image">
          <img
            src={randomBeer.image_url}
            alt="randomBeer"
            style={{ width: '7rem' }}
          />
        </div>
        <div className="details-txt">
          <div className="first-line">
            <h1 className="title"> {randomBeer.name} </h1>
            <p className="att-lvl"> {randomBeer.attenuation_level} </p>{' '}
          </div>
          <div className="second-line">
            <h2> {randomBeer.tagline} </h2>
            <b> {randomBeer.first_brewed} </b>
          </div>

          <p>{randomBeer.description} </p>
          <p className="contributed">{randomBeer.contributed_by} </p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
