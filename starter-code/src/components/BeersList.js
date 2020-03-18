// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// styled components
import { BeerCard, BeersContainer, ImgContainer } from '../styles/PageContent';

export const BeersList = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await axios.get(url);
      setBeers(response.data);
    };

    fetchData();
  }, []);

  console.log('el state', beers);

  const formatName = str => str.replace(/<.*>/, '');

  return (
    <BeersContainer>
      {beers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        beers.map((beer, i) => {
          return (
            <BeerCard key={i}>
              <ImgContainer>
                <img src={beer.image_url} />
              </ImgContainer>

              <div>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                <p>{beer.tagline}</p>
                <p>Created by: {formatName(beer.contributed_by)}</p>
              </div>
            </BeerCard>
          );
        })
      )}
    </BeersContainer>
  );
};
