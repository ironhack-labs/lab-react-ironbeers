import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Beers() {
  const [beerList, setBeerList] = useState([]);
  const [searchBeer, setSearchBeer] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        // console.log(response.data)
        setBeerList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`)
      .then((response) => {
        setBeerList(response.data);
      })
      .catch((err) => console.log(err));
  }, [searchBeer]);

  const handleSearchBeer = (event) => {
    event.preventDefault();
    setSearchBeer(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="search-beers">
          <label htmlFor="searchBeer">Search Beers</label>
          <input type="text" name="searchBeer" id="searchBeer" value={searchBeer} onChange={handleSearchBeer} />
        </div>
        {beerList.map((beer) => {
          return (
            <div class="beer-card">
              <img src={beer.image_url} alt={beer.name} width="60" align="left"/>
              <div class="beer-card-info">
                <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                <h3>{beer.tagline}</h3>
                <article><b>Created by: </b>{beer.contributed_by}</article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
