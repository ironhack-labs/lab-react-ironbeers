import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header';

function RandomBeer() {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
          console.log(response.data);
        setBeer({ ...response.data });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="card" style={{ width: '22rem', border: 'white' }}>
          <div
            className="mt-2"
            style={{
              width: '22rem',
              display: 'flex',
              justifyContent: ' center',
            }}
          >
            <img
              className="card-img"
              src={beer.image_url}
              alt={beer.name}
              style={{ height: '300px', width: 'auto' }}
            />
          </div>
          <div className="card-body mt-3" style={{ width: '22rem' }}>
            <div
              className="row"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <h1 className="col-9">{beer.name}</h1>
              <h4 className="mt-2" style={{ width: '5rem', color: '#D3D3D3' }}>
                {beer.attenuation_level}
              </h4>
            </div>
            <div
              className="row mt-2"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <h6 className="col-8" style={{ color: '#A3A3A3' }}>
                {beer.tagline}
              </h6>
              <h6
                style={{
                  width: '6rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                {beer.first_brewed}
              </h6>
            </div>
            <p className="card-text mt-2" style={{ fontSize: '0.8rem' }}>
              {beer.description}
            </p>
            <h6
              className="mt-2"
              style={{ color: '#A3A3A3', fontSize: '.8rem', fonWeight: 'bold' }}
            >
              {beer.contributed_by}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
