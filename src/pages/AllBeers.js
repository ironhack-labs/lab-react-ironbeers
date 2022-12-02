import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AllBeers() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeers(response.data)
                .catch(err => console.log(err));
            })
    },[])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + query)
            .then(response => setBeers(response.data))
            .catch(err => console.log(err))
    }, [query])

    return (
        <div>
            <h1>Beers</h1>
            <Search setQuery={setQuery} />
            <div>
                {beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <NavLink to={`/beers/${beer._id}`}>
                                <img src={beer.image_url} alt="beer" height="500" width="220" />
                            </NavLink>
                            <div>
                                <ul>
                                    <h3>{beer.name}</h3>
                                    <h4>{beer.tagline}</h4>
                                    <p><b>Created by:</b>{beer.name}</p>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AllBeers;