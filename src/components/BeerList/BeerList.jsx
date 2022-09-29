import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      { beers ? 
        
        beers.map( beer => { 
          return <BeerCard key={beer._id} {...beer}/>
        })
        :
        <h2>Loading...</h2>
      
      }
    </div>
  );
}

export default BeerList;