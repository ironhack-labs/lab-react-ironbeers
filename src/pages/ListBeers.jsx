import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function ListBeers() {
    const [loading, setLoading] = useState(true);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
        .get(apiURL)
        .then((response) => {
            setBeers(response.data);

            setLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <div>
    <h3>List of Beers</h3>

    {loading &&
    beers.map((beers) => {
        return (
            <Link key={beers._id}>
            <div>
                <img src={beers.image_url} alt="" />
                <h2>{beers.name}</h2>
                <h4>{beers.tagline}</h4>
                <p><b>Created by:</b> {beers.contributed_by}</p>
            </div>
            </Link>
        )
    })}
    </div>
  )
}

export default ListBeers