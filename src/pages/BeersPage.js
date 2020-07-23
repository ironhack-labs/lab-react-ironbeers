import React, { useState, useEffect } from 'react';
import apiHandler from '../api/apiHandler.js';
import { Link } from 'react-router-dom';

const BeersPage = () => {
  const [beers, setBeers] = useState();
  const [isLoading, setIsloading] = useState(true);

  const fetchAllBeers = async () => {
    try {
      const response = await apiHandler.getAllBeers();
      setBeers(response.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>The page is loading ...</p>
      ) : (
        <div>
          {beers.map((beer) => (
            <React.Fragment key={beer._id}>
              <Link to={'/beers/' + beer._id}>
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt={beer.name} />
              </Link>
              <h2>Tagline: #{beer.tagline}</h2>
              <h3>Contributed by: {beer.contributed_by}</h3>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default BeersPage;
