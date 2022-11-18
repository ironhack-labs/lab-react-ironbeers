import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

function RandomBeer() {
    const [random, setRandom] = useState({});
    const [oneBeerDet, setOneBeerDet] = useState({});

    const getBeersApi = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${random}`);
            setRandom(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeersApi();
    }, []);

    return (
        <div>
            <Navbar />

            <img src={oneBeerDet.image_url} alt="beer" />
            <h1>{oneBeerDet.name}</h1>
            <h3>{oneBeerDet.tagline}</h3>
            <p>{oneBeerDet.first_brewed}</p>
            <h4>{oneBeerDet.attenuation_level}</h4>
            <h3>{oneBeerDet.description}</h3>
            <p>Created by: {oneBeerDet.contributed_by}</p>

        </div>
    )
}

export default RandomBeer