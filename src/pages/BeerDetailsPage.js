import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);

  const { beerId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers/${beerId}`);
      const singleBeerData = response.data;

      console.log('beersData', singleBeerData);
      setBeer(singleBeerData);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <h2>Beer Details</h2>
      <div className="details">
        <div className="details-image">
          <img src={beer.image_url} alt="Beer" style={{ width: '7rem' }} />
        </div>
        <div className="details-txt">
          <div className="first-line">
            <h1 className="title"> {beer.name} </h1>
            <p className="att-lvl"> {beer.attenuation_level} </p>{' '}
          </div>
          <div className="second-line">
            <h2> {beer.tagline} </h2>
            <b> {beer.first_brewed} </b>
          </div>

          <p>{beer.description} </p>
          <p className="contributed">{beer.contributed_by} </p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
