import React, { useState, useEffect } from 'react';

import { fetchBeers } from '../../services/services'
import BeerCard from '../BeerCard/BeerCard';

const BeerList = () => {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers()
  }, []);
  
  const getBeers = async () => {
    const result = await fetchBeers();
    setBeers(result.data)
  }

  
  return (
    <div className='container text-center'>
          {
            beers.map((beer) => {
              return(
                <div key={beer._id}>
                  <BeerCard {...beer} />
                </div>
              )
            })
          }
    </div>
  );
}

export default BeerList
