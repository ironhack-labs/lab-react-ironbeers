import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                setRandomBeer(response.data)
                .catch(err => console.log(err))
            })
    }, [])
    return (
        <div key={randomBeer._id}>
            <img src={randomBeer.image_url} alt="beer" height="500" width="220" />
            <div>
                <ul>
                    <h3>{randomBeer.name}</h3>
                    <h4>{randomBeer.tagline}</h4>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.description}</p>
                    <p><b>Created by:</b>{randomBeer.name}</p>
                </ul>
            </div>
        </div>
    );
}

export default RandomBeer;