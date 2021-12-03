import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => setBeers(res.data));
  }, []);
  return (
    <section>
      {beers.map((b) => {
        return (
          <div style={{ display: 'flex', margin: '10px' }} key={b._id}>
            <Link to={`/beers/${b._id}`}>
              <div>
                <img style={{ height: '200px' }} src={b.image_url} alt="" />
              </div>
              <div style={{ margin: '10px' }}>
                <h3>{b.name}</h3>
                <h4>{b.tagline}</h4>
                <p>
                  <strong>Created by: </strong> {b.name}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
