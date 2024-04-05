import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function RandomBeersPage() {
    
    const [beer, setBeer] = useState({})
    const getOneBeers = () => {
        axios
            .get(`${API_URL}/beers/random`)
            .then((response) => setBeer(response.data))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getOneBeers()
    },[])
    console.log(beer)
    return (
        <div>

            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h3>{beer.first_brewed} </h3>
            <h2>{beer.attenuation_level}</h2>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>



        </div>
    )
}

export default RandomBeersPage;
