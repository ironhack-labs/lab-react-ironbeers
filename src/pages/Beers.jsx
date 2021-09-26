import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Beers</h1>
        {beers.map((beer) => (
          <div className="each-beer">
            <img src={beer.image_url} alt="" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>
              <button>See more</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default Beers;
