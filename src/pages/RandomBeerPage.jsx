import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [ randomBeer, setRandomBeer ] = useState([]);

    useEffect(() =>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) =>{
            setRandomBeer(response.data);
        })
    }, []);

    return(
        <div key={randomBeer._id}>
            <img src={randomBeer.image_url} alt="" />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_breed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    );
}

export default RandomBeersPage;