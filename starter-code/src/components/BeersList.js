// dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// local modules
import { fetchAllBeers, searchBeer } from '../services/beersService';

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
    (async () => {
      const results = await fetchAllBeers();
      console.log(results);
      setBeers(results);
    })();
  }, []);

  const handleSearch = async e => {
    e.persist();
    const { value } = e.target;
    const results = await searchBeer(value);
    console.log('search result ', results);
    value ? setSearch(true) : setSearch(false);
    setBeers(results);
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
