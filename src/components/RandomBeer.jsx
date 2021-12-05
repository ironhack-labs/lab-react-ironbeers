import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const styles = {
  card: {
    borderRadius: '7px',
    boxShadow: '0 2px 5px #ccc',
    padding: '30px',
  },
  img: {
    height: '250px',
    maxWidth: '100px',
    padding: '0 2rem 1rem 0',
    margin: '0 auto',
  },
  h2: {
    margin: '1.2rem 0rem',
    color: '#140404',
  },
  attenuation: {
    color: '#dddddd',
    float: 'right',
  },
  brewed: {
    float: 'right',
  },
  tag: {
    color: '#a19a9a',
    marginBottom: '1rem',
  },
};

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get('/random')
      .then((res) => {
        setRandomBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="beer-details-container">
        <div className="card" style={styles.card}>
          <img
            src={randomBeer.image_url}
            alt={randomBeer.name}
            style={styles.img}
          />
          <div className="card-body">
            <h2 style={styles.attenuation}>{randomBeer.attenuation_level}</h2>
            <h2 className="card-title">{randomBeer.name}</h2>
            <p style={styles.brewed}>{randomBeer.first_brewed}</p>
            <h5 style={styles.tag}>{randomBeer.tagline}</h5>
            <p className="card-text">{randomBeer.description}</p>
          </div>
          <div className="card-footer">
            <p>
              <strong>Created by: {randomBeer.contributed_by}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomBeer;
