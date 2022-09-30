import React, { useState } from "react";
import { fetchSearchBeer } from '../../services/beer-services'

function SearchBeer() {
  const [ searchText, setSearch ] = useState("")

 
  const handleSearch = (event)=>{
    const { value } = event.target
    console.log(value)
    setSearch(value)
    fetchSearchBeer(searchText)
    .then(beer => beer.data) 
    console.log(fetchSearchBeer(searchText)
    .then(beer => beer.data) );
  }

 
  return ( 
    <div className="container">
      <label htmlFor="search">
        Search:
      </label>
      <input id="search" name="search" value={searchText} onChange={handleSearch} />
    </div>
   );
}

export default SearchBeer;