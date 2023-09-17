import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                console.log(response);
                setRandomBeer(response.data);
            })
            .catch((e) => {
                console.log('error gettin random beer', e);
            })
    }, []);
    return (
        <div>
            <img src={randomBeer.image_url} height={300} width={150} alt="" />
            <h1>Beer: {randomBeer.name}</h1>
            <p>"{randomBeer.tagline}"</p>
            <p>First brewed on: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
    )
}
export default RandomBeersPage;
