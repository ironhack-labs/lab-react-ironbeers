import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {

        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                setRandomBeer(response.data);
            });
    }, []);

    if (!randomBeer) {

        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{randomBeer.name}</h2>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <p>{randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
    );
}

export default RandomBeerPage;
