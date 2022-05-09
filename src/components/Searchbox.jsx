import React, { useState } from "react";

function SearchBox(props) {
  const [ query, setQuery ] = useState("");

  const handleQuery = e => {
    e.preventDefault();
    setQuery(e.target.value);
    props.beerSearch(e.target.value);
  }
    return (
        <input type="text" className="input search-bar w-100 text-center beer-search" name="search" placeholder="Search" value={query} onChange={handleQuery}/>
      );    
}
 
export default SearchBox;