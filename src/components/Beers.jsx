import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';

const styles = {
  img: {
    float: 'left',
    height: '190px',
    padding: '0 2rem 1rem 0',
  },
  h3: {
    margin: '1.2rem 0rem',
    color: '#140404',
  },
  col: {
    borderBottom: 'solid 1px #ccc6c6',
    margin: '1rem 0',
  },
  tag: {
    color: '#a19a9a',
  },
};

const Beers = () => {
  const [beers, setBeers] = useState([]);
  console.log(beers);

  useEffect(() => {
    axios
      .get('/')
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="beers-container p-5">
        <div className="row">
          {beers.map((beer) => (
            <div
              className="col-4 sm-12 lg-3 card-wrapper"
              style={styles.col}
              key={beer._id}
            >
              <img
                src={beer.image_url}
                alt={`${beer.name} country-flag`}
                style={styles.img}
              />
              <Link to={`/${beer._id}`}>
                <h3 style={styles.h3}>{beer.name}</h3>
              </Link>
              <h4 style={styles.tag}>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Beers;
