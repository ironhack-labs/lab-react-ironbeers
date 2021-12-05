import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

import axios from 'axios';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/random';


function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`${apiURL}`)

            const randomBeerData = response.data;
            setRandomBeer(randomBeerData);

        }
        fetchData();
    }, [])



    return (
        <div className="col-auto">
            <Header />
            <h2> Random beer page </h2>
            <div className="card-beer">
                <div className="card-image-one">
                    <img src={randomBeer.image_url} alt="beer" style={{ width: '50px' }} />
                </div>
                <div className="card-info">
                    <h2>{randomBeer.name}</h2>
                    <h2>{randomBeer.tagline}</h2>
                    <h3>{randomBeer.first_brewed}</h3>
                    <h3>{randomBeer.attenuation_level}</h3>
                </div>
                <div className="card-description"></div>
                <h3>{randomBeer.description}</h3>
                <h3>{randomBeer.contributed_by}</h3>
            </div>
        </div>
    );
}

export default RandomBeerPage;