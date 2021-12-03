import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="home-header">
        <Link to={'/'}>
          <h1>
            <FontAwesomeIcon icon={faHome} className="icon-color" />
          </h1>
        </Link>
      </div>

      {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <div>
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div>
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <h5>{beer.tagline}</h5>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </>
  );
};
