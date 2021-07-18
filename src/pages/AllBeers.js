import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SingleBeer from '../components/SingleBeer';
import axios from "axios";
import { TextField } from '@material-ui/core';  

function AllBeers() {

    const [ beers, setBeers ] = useState(null); 
    const [ filteredBeers, setFilteredBeers ] = useState(null); 

    useEffect(async () => {
        try {
            let allBeerData = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(allBeerData.data);
            setFilteredBeers(allBeerData.data);
        }
        catch(error) {
            throw new Error("Failed to get all beers", error);
        }
    }, [])

    const handleSearch = async (event) => {
        let searchText = event.target.value.toLowerCase();
        try {
            let filteredBeerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchText}`);
            setFilteredBeers(filteredBeerData.data)
        }
        catch(error) {
            throw new Error('Something went wrong while searching for beers', error);
        }
    }

    if (!filteredBeers) {
        return <h1>Loading ...</h1>
    }
    
    return (
        <div>
            <Header />
            <div className="search-bar-container"> 
                <h1>All beers</h1>
                <TextField onChange={handleSearch} label="Search" variant="standard" type="text" name="name"/>
            </div>

            {
                filteredBeers.map((beer, index) => {
                    return <SingleBeer key={index} beer={beer} />
                })
            }
        </div>
    )
}

export default AllBeers
