import React from "react";
import BeersList from "../../components/BeerList/BeerList";
import { useState} from 'react';

export default function BeersListScreen () {
  const [searchText, setSearchText] = useState('');
  
  const handleOnChange = (event) => {
    const value = event.target.value;
    setSearchText(value);   
  }

   return (
     <>
       <input
         onChange={handleOnChange}
         type="text"
         placeholder="Search beers here"
       ></input>
       <BeersList search={searchText}></BeersList>
     </>
   );
}
