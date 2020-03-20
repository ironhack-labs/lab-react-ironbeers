// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// styled components
import {
  BeerCard,
  Container,
  ImgContainer,
  InputContainer
} from '../styles/PageContent';
import { Input } from '../styles/Form';

export const BeersList = () => {
  const [beers, setBeers] = useState([]);
  const [isSearching, setSearch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await axios.get(url);
      setBeers(response.data);
    };
    fetchData();
  }, []);

  const handleSearch = async e => {
    e.persist();
    const { value } = e.target;
    const { data } = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`
    );
    console.log('search result ', data);
    value ? setSearch(true) : setSearch(false);
    setBeers(data);
  };

  const formatName = str => str.replace(/<.*>/, '');

  return (
    <>
      <InputContainer>
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search beer..."
        />
      </InputContainer>
      <Container>
        {beers.length === 0 && !isSearching ? (
          <p>Loading...</p>
        ) : beers.length === 0 && isSearching ? (
          <p>No results found, try again</p>
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
      </Container>
    </>
  );
};
