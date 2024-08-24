import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeersPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchQuery]);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleChange} />
            {searchResults.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default AllBeersPage;