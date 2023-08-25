import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState('');

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((response) => {
            setRandomBeer(response.data);
        })
    }, []);

    return (
        <div>
            <h1>Beer Details</h1>
                <div>
                    <img src={randomBeer.image_url}/>
                    <h2>{randomBeer.name}</h2>
                    <h2>{randomBeer.tagline}</h2>
                    <h2>{randomBeer.first_brewed}</h2>
                    <h2>{randomBeer.attenuation_level}</h2>
                    <h2>{randomBeer.description}</h2>
                    <h2>{randomBeer.contributed_by}</h2>
                </div>
        </div>
    )
}


export default RandomBeersPage;
