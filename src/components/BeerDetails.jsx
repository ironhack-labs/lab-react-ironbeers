import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'


function BeerDetails() {
    const { BeerDetId } = useParams();
    const [oneBeerDet, setOneBeerDet] = useState({});

    const getBeersApi = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${BeerDetId}`);
            setOneBeerDet(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeersApi();
    }, [BeerDetId]);

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

export default BeerDetails