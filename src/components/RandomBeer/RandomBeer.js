import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({ data }) => setRandomBeer(data))
    }, [])

    return (
        <>
            <Header />

            <img src={randomBeer.image_url} alt="randomBeerImg" />
            <br />
            <p>{randomBeer.name}</p>
            <br />
            <p>{randomBeer.tagline}</p>
            <br />
            <p>{randomBeer.first_brewed}</p>
            <br />
            <p>{randomBeer.attenuation_level}</p>
            <br />
            <p>{randomBeer.description}</p>
            <br />
            <p>{randomBeer.contributed_by}</p>

        </>
    )
}

export default RandomBeer