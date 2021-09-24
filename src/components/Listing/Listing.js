import React, { useEffect, useState } from 'react';
import './Listing.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';

const retrieveList = (search, setList) => {
  axios
    .get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + search)
    .then((response) => setList([...response.data]))
    .catch((err) => console.log(err));
};

const Listing = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    retrieveList(search, setList);
  }, []);

  return (
    <div className="listing-container container">
      <NavBar />
      <div className="listing-search input-group">
        <input
          type="text"
          className="form-control rounded-0"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span
          className="input-group-text bg-info text-light rounded-0"
          id="inputGroup-sizing-default"
          onClick={() => retrieveList(search, setList)}
        >
          Search
        </span>
      </div>
      <div className="list-group rounded-0">
        {list.map((beer) => (
          <Link
            key={beer._id}
            to={'/beer/' + beer._id}
            className="list-group-item list-group-item-action d-flex justify-content-start align-items-center"
            aria-current="true"
          >
            <div className="beer-list-container d-flex align-items-center">
              <div className="beer-img-container d-flex justify-content-center">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="beer-list-info-container d-flex flex-column justify-content-center">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>
                  <strong>Created by:</strong>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
