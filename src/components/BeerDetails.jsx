import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';

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

const BeerDetails = () => {
  const { id } = useParams();

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`/${id}`)
      .then((res) => {
        console.log(res);
        setBeer(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Navbar />
      <div className="beer-details-container">
        <div className="card" style={styles.card}>
          <img src={beer.image_url} alt={beer.name} style={styles.img} />
          <div className="card-body">
            <h2 style={styles.attenuation}>{beer.attenuation_level}</h2>
            <h2 className="card-title">{beer.name}</h2>
            <p style={styles.brewed}>{beer.first_brewed}</p>
            <h5 style={styles.tag}>{beer.tagline}</h5>
            <p className="card-text">{beer.description}</p>
          </div>
          <div className="card-footer">
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerDetails;
