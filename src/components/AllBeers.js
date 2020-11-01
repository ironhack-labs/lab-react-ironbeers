import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AllBeers() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers(res.data);
    });
  }, []);

  const handleSearch = (query) => {
   
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((res) => {
        setBeers(res.data);
      });
  };

  if (!beers) return null;
  return (
    <>
      <input
        type="search"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      {beers.map((beer, index) => {
        return (
          <Link to={`/beersDetail/${beer._id}`} key={index}>
            <div style={{ border: '2px solid black' }}>
              <img alt="" style={{ width: '35px' }} src={beer.image_url}></img>
              <strong>{beer.name}</strong>
              <br />
              {beer.tagline}
            </div>
          </Link>
        );
      })}
    </>
  );
}
