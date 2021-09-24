import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <h3>List of beers</h3>
      <div>
        {beers.map((beer) => (
          <div>
            <img src={beer.image_url} alt="" />
            <Link to={`/singlebeer/${beer._id}`}>
              <h4>{beer.name}</h4>
            </Link>
            <p>{beer.tagline}</p>
            <p>{beer.contribute_by}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeersList;
