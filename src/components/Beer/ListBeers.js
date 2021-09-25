import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Header from '../Header';
import BeerCard from '../Cards/ListBeerCard';

function ListBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers([...response.data]);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-2">
        {beers.map((beerObj) => {
          return <BeerCard 
          img={beerObj.image_url} 
          name={beerObj.name}
          key={beerObj._id}
          tagline={beerObj.tagline}
          contributed={beerObj.contributed_by}
          id={beerObj._id}
          />;
        })}
      </div>
    </div>
  );
}

export default ListBeers;
