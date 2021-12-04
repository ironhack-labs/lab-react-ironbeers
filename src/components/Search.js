import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom'
import { Input } from "antd";

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function Search({ setBeers }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${apiURL}/search?q=${query}`);
            const oneBeerData = response.data;
            setBeers(oneBeerData)
        }
        fetchData();
    }, [query])

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }


    return (
        <div className="search-bar col-auto">

            <label>Search</label>
            <Input className="search-input" value={query} type="text" onChange={handleSearch} />
        </div>

    )


}

export default Search;