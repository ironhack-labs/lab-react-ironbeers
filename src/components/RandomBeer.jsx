import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (beer === null) return <></>;

  return (
    <>
      <div className="home-header">
        <Link to={'/'}>
          <h1>
            <FontAwesomeIcon icon={faHome} className="icon-color" />
          </h1>
        </Link>
      </div>

      <div className="beer-detail">
        <div>
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className="detail-flex">
          <h1>{beer.name}</h1>
          <h3>{beer.attenuation_level}</h3>
        </div>
        <div className="detail-flex">
          <h3>{beer.tagline}</h3>
          <h5>{beer.first_brewed}</h5>
        </div>
        <p>{beer.description}</p>
        <p className="creator">{beer.contributed_by}</p>
      </div>
    </>
  );
};
