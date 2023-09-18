import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {

        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
            setBeers(response.data);
        });
    }, []);

    return (
        <div>
            <h2>All Beers</h2>
            <ul>
                {beers.map((beer) => (
                    <li key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllBeersPage;
