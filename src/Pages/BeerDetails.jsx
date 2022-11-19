import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function BeerDetails() {
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  const getFromApi = async () => {
    try {
      const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      setOneBeer(apiCall.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  return (
    <div>
      {oneBeer && (
        <div>
          <Header />
          <img src={oneBeer.image_url} alt='beer' />
          <h2>{oneBeer.name}</h2>
          <p>{oneBeer.tagline}</p>
          <p>{oneBeer.first_brewed}</p>
          <p>{oneBeer.attenuation_level}</p>
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}
export default BeerDetails;
