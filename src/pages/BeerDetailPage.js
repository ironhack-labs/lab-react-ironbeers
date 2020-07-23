import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import apiHandler from '../api/apiHandler.js';

const BeerDetailPage = () => {
  const [beer, setBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const id = useParams();
  const history = useHistory();

  const fetchData = async () => {
    try {
      if (id.id === 'random') {
        history.push('/random-beer');
        return;
      }
      const response = await apiHandler.getOneBeer(id.id);
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

export default BeerDetailPage;
