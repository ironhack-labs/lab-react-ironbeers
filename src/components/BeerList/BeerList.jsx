import React, { useState, useEffect } from 'react';
import{ fetchBeer } from '../../services/beer-services.js';
import BeerCard from "../BeerCard/BeerCard";
import { fetchSearchBeer } from '../../services/beer-services';

function BeerList() {
  const [beers, setBeers] = useState(null);
  const [ searchText, setSearch ] = useState("")

  const handleSearch = (event)=>{
    const { value } = event.target
    console.log(value)
    setSearch(value)
  }

  
  useEffect (() => {
    if (searchText) { // '' -> falsy
      fetchSearchBeer(searchText)
      .then((beers) =>{ 
        setBeers(beers.data)}) 
      }else {
        fetchBeer()
        .then((beers) => {
          setBeers (beers.data)
        })
      }
  },[searchText])

  

  return (  
    
    <div className='container text-center'>
      <div className="container m-8">
        <label htmlFor="search">
          Search:
        </label>
        <input id="search" name="search" value={searchText} onChange={handleSearch} />
      </div>

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