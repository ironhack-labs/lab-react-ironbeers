import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers", { method: "GET" })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setBeers(data);
            })
            .catch(error => {
                console.error('Error fetching beers:', error);
            });
    }, []);

    return (
        <div>
            <h1>All Beers</h1>
            <ul>
                {beers.map(beer => (
                    <li key={beer._id} style={{ marginBottom: '20px' }}>
                        <img src={beer.image_url} alt={beer.name} style={{ width: '100px', height: 'auto' }} />
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p><em>Contributed by: {beer.contributed_by}</em></p>
                        <Link to={`/beers/${beer._id}`}>See Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
