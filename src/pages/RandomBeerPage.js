import React, { useState, useEffect } from 'react';
import apiHandler from '../api/apiHandler.js';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiHandler.getARandomBeer();
      setBeer(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>The page is loading ...</p>
      ) : (
        <>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name} />
          <p>Tagline: #{beer.tagline}</p>

          <p>Firest brewed: {beer.first_brewed}</p>
          <p>Attenuation leve: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </>
      )}
    </>
  );
};

export default RandomBeerPage;
