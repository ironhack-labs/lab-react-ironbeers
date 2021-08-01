import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as beerService from './../../services/beer-service';

import './AllBeers.css';
import NavBar from '../../components/NavBar/NavBar';

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    beerService
      .getAllBeers()
      .then((beers) => {
        setBeers(beers);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    beerService
      .getSomeBeers(search)
      .then((beers) => {
        setBeers(beers);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <NavBar />
      <input
        type="text"
        name="search"
        placeholder="search for any beer"
        value={search}
        onChange={handleChange}
      />

      {beers.map((singleBeer) => {
        return (
          <div key={singleBeer._id} className="single-beer">
            <Link to={`/beers/${singleBeer._id}`}>
              <div className="beer-img-wrapper">
                <img src={singleBeer.image_url} alt="beer-img" />
              </div>
            </Link>
            <div className="beer-text">
              <Link to={`/beers/${singleBeer._id}`}>
                <h2>{singleBeer.name}</h2>
              </Link>
              <h3>{singleBeer.tagline}</h3>
              <p>
                <span>Created by: </span>
                {singleBeer.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
