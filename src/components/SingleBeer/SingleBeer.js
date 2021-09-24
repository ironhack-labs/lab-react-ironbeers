import React, { useEffect, useState } from 'react';
import './SingleBeer.css';

import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import { useHistory } from 'react-router-dom';

const retrieveBeer = (id, setBeer) => {
  axios
    .get('https://ih-beers-api2.herokuapp.com/beers/' + id)
    .then((response) => setBeer({ ...response.data }))
    .catch((err) => console.log(err));
};

const SingleBeer = ({ id }) => {
  const [beer, setBeer] = useState({
    image_url: '',
    name: '',
    attenuation_level: '',
    tagline: '',
    first_brewed: '',
    description: '',
    contributed_by: '',
  });

  useEffect(() => {
    retrieveBeer(id, setBeer);
  }, []);

  const history = useHistory();

  return (
    <div className="single-beer-container container card mx-auto">
      <NavBar />
      <img
        src={beer.image_url}
        className="card-img-top mx-auto my-4"
        alt={beer.name}
      />
      <div className="card-body mx-4 mb-4">
        <div className="card-title">
          <div className="d-flex justify-content-between">
            <h2 className="name">{beer.name}</h2>
            <h2 className="attenuation_level text-secondary">
              {beer.attenuation_level}
            </h2>
          </div>
          <div className="d-flex justify-content-between text-secondary">
            <p>{beer.tagline}</p>
            <p className="text-dark">
              <strong>{beer.first_brewed}</strong>
            </p>
          </div>
        </div>
        <div className="card-text">
          <p>{beer.description}</p>
          <p className="text-secondary">{beer.contributed_by}</p>
        </div>
      </div>
      <button
        className="btn btn-info text-light fs-3 fixed-bottom w-100"
        onClick={() => history.goBack()}
      >
        Back
      </button>
    </div>
  );
};

export default SingleBeer;
