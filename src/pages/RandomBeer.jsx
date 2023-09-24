import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import styled from 'styled-components'

const RandomBeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BeerImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const BeerTitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
`;

const BeerSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #777;
  margin: 10px 0;
`;

const BeerDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <RandomBeerContainer>
        {!beer && <h2>...Loading</h2>}

        {beer && (
          <>
            <BeerImage src={beer.image_url} alt={beer.name} />
            <BeerTitle>
              {beer.name} {beer.attenuation_level}
            </BeerTitle>
            <BeerSubtitle>{beer.tagline}</BeerSubtitle>
            <BeerSubtitle>First Brewed: {beer.first_brewed}</BeerSubtitle>
            <BeerDescription>{beer.description}</BeerDescription>
            <BeerSubtitle>Contributed by: {beer.contributed_by}</BeerSubtitle>
          </>
        )}
      </RandomBeerContainer>
    </>
  );
}

export default RandomBeer;