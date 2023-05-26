import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BeerList = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetchBeers();
    }, []);

    const fetchBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            const beersData = response.data;
            setBeers(beersData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {beers.map(beer => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <a href={`/beers/${beer._id}`}>Check details</a>
                </div>
            ))}
        </div>
    );
};

export default BeerList;
