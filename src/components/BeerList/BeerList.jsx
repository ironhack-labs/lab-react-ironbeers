import React, { useState, useEffect } from 'react';
import{ fetchBeer } from '../../services/beer-services.js';
import BeerCard from "../BeerCard/BeerCard";

function BeerList() {
  const [beers, setBeers] = useState(null);

  useEffect (() => {
    fetchBeer()
    .then(beers => {
      setBeers (beers.data)
    })
  },[])

  return (  
    <div className='container text-center'>
      <div className='row'>
        { beers ? 
          beers.map( beer => { 
            return <BeerCard key={beer._id} {...beer}/>
          })
          :
          <h2>Loading...</h2>
        }
      </div>
    </div>
  );
}

export default BeerList;