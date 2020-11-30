import React, {useState} from 'react';
import axios from 'axios';
import './BeerSearch.css'


const BeerSearch = () => {
    const [beerSearch, setBeerSearch] = useState([])

    const handleSearchInput = (event) => {
        let initialState = event.target.value;
        setBeerSearch({...beerSearch, initialState});
    }



    return (
        <form>
        <label>Search Beers: </label>
        <input name="search" type="text" placeholder="Search for your beer..." onChange={handleSearchInput}/>
        </form>
    )
}

export default BeerSearch;