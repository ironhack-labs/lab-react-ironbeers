// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/typicons';

// styled components
import { BeerDetailCard } from '../styles/PageContent';

export const BeerDetail = props => {
  const { id } = props.match.params;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const fetchData = async endpoint => {
      const url = `https://ih-beers-api2.herokuapp.com/beers/${endpoint}`;
      const response = await axios.get(url);
      console.log('beer found ', response.data);
      setBeer(response.data);
    };

    fetchData(id);
  }, []);

  return (
    <BeerDetailCard>
      <div className="img-container">
        <img src={beer.image_url} />
      </div>
      <div className="content">
        <div>
          <h3>{beer.name}</h3>
          <span>{beer.attenuation_level}</span>
        </div>
        <div>
          <span>{beer.tagline}</span>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <span>{beer.contributed_by}</span>
        <div>
          <Link to="/beers">
            <ArrowBack size="20" />
            Back to beers list
          </Link>
          <Link to="/">
            <ArrowBack size="20" />
            Back to home
          </Link>
        </div>
      </div>
    </BeerDetailCard>
  );
};
