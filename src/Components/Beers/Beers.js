import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeersApi from '../../services/beers.service';
import './Beers.css';

export default function Beers() {
  let [beers, setAllBeers] = useState([]);

  let service = new BeersApi();
  useEffect(() => {
    loadBeers();
  }, []);

  let loadBeers = () => {
    service
      .getAllBeers()
      .then((result) => {
        setAllBeers((beers = result));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>ALL BEERS</h1>
      {beers.data?.map((elm) => (
        <Link to={`/beers/${elm._id}`} className="beerCard">
          <img src={elm.image_url} alt="Beer" />
          <div>
            <h3>{elm.name}</h3>
            <h4>{elm.tagline}</h4>
            <p>Created By: {elm.contributed_by}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
