// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BeerDetailCard } from '../styles/PageContent';

export const BeerDetail = props => {
  const { beerId } = props.match.params;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
      const response = await axios.get(url);
      console.log('beer found ', response.data);
      setBeer(response.data);
    };

    fetchData();
  }, []);

  return (
    <BeerDetailCard>
      <div className="img-container">
        <img src={beer.image_url} />
      </div>
      <div className="content">
        <div>
          <h3>{beer.name}</h3>
          <p>{beer.attenuation_level}</p>
        </div>
        <div>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        <Link to="/beers">Back to list</Link>
      </div>
    </BeerDetailCard>
  );
};
