import Header from '../components/Header';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Beers() {
  const [beers, setBeers] = useState([]);

  const getFromApi = async () => {
    try {
      const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
      console.log('Deu certo!');
      setBeers(apiCall.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {beers.map((beers) => {
          return (
            <div>
              <img src={beers.image_url} alt='beer' />
              <Link to={`/beerDetails/${beers._id}`}>
                <p>{beers.name}</p>
              </Link>
              <p>{beers.tagline}</p>
              <p>Contributed by: {beers.contributed_by}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Beers;
