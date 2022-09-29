import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchAllBeers } from './../../../services/beerServices';

export default function BeersList() {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        fetchAllBeers()
        .then((beersData) => {
            setBeers(beersData.data)
        })
    }, []);

    return (
        <div>
            { beers ? 
                <ul className="list-group">
                    {beers.map((beer) => (
                        <div key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <div>
                                    <img src={beer.image_url} alt={beer.name} height="150px" />
                                </div>
                                <div>
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <small>{beer.contributed_by}</small>
                                </div>
                            </Link>
                        </div>
                    ))}
                </ul>
            :
                <p>Loading beers...</p>
            }
        </div>
    )
}
