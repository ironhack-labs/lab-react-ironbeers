import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(data => {
                setBeers(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Beers</h2>
            <ul>
                {beers.map(beer => {
                    return (
                        <li key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <img src={beer.image_url} alt={beer.name} />
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </div>
    );
}

export default AllBeersPage;
