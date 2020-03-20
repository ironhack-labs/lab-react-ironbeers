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

  const handleSearch = async e => {
    const { data } = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`
    );
    console.log('search result ', data);
    setBeers(data);
  };

  const formatName = str => str.replace(/<.*>/, '');

  return (
    <>
      <input type="text" onChange={handleSearch} />
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
                  <p className="light">{beer.tagline}</p>
                  <p>
                    <span> Created by: </span>
                    {(beer.contributed_by && formatName(beer.contributed_by)) ||
                      'unknown'}
                  </p>
                </div>
              </BeerCard>
            );
          })
        )}
      </BeersContainer>
    </>
  );
};
