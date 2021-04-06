import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const BeerDetail = (props) => {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`
      )
      .then((res) => {
        setBeer(res.data);
        setLoading(false);
      });
  }, [props.match.params.beerId]);

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beer;
  return (
    <div className="BeerDetail container">
      <Header />
      {loading ? (
        'Loading'
      ) : (
        <div className="card">
          <div
            className="parentImg d-flex justify-content-center"
            style={{ height: '400px' }}
          >
            <img
              src={image_url}
              className="card-img-top img-responsive"
              alt={name}
              style={{
                position: 'relative',
                display: 'block',
                width: 'auto',
                height: '100%',
              }}
            />
          </div>
          <div className="card-body">
            <h1>{name}</h1>
            <div className="d-flex justify-content-between">
              <p className="card-text">AO: {attenuation_level}</p>
              <p className="card-text">{first_brewed}</p>
            </div>
            <p className="card-text text-muted">{tagline}</p>
            <p className="card-text">{description}</p>
          </div>
          <p className="card-text">
            <small className="text-muted">Created by: {contributed_by}</small>
          </p>
        </div>
      )}
    </div>
  );
};

export default BeerDetail;
