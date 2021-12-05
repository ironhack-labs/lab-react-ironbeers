import React from "react";
import { useState } from "react";
import styles from "./SearchBeerForm.css"


function SearchBeerForm( {searchBeerList} ) {
    const [searchString, setSearchString] = useState("");

    const handleSearch = (event) => {
        
        setSearchString(event.target.value);

        searchBeerList(event.target.value);
    }

    return ( 
        <div className="search-beer-form">
            <label>Search Beers</label>
            <input value={searchString} placeholder="Type beer name" type="text" onChange={handleSearch} />
        </div>
     );
}

export default SearchBeerForm;