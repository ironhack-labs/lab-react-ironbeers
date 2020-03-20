// dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/typicons';

// local modules
import { fetchSingleBeer } from '../services/beersService';

// styled components
import { BeerDetailCard } from '../styles/PageContent';

export const BeerDetail = props => {
  const { id } = props.match.params;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    (async () => {
      const results = await fetchSingleBeer(id);
      console.log('beer found ', results);
      setBeer(results);
    })();
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
