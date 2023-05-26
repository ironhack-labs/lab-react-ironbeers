// List Beers component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ListBeers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>All Beers</h2>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <a href={`/beers/${beer._id}`}>Details</a>
                </div>
            ))}
        </div>
    );
};
