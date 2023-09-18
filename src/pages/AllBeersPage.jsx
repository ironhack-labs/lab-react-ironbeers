
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/beers`)
            .then((response) => {
                // console.log(response);
                setBeers(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <h1> All Beers </h1>

            {beers.map((beer) => (
                <>
                <div key={beer._id} className="card">
                    <img src={beer.image_url} alt="beer" height="180" />
                    <h3> {beer.name}</h3>
                    <h4 style={{ color: 'gray' }}> {beer.tagline}</h4>
                    <p> Contributed by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>Read more</Link>
                </div>
                <br/><br/><br/>
                </>
            ))}
        </>
    );
}

export default AllBeersPage;