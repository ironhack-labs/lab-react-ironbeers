import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState({});


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers/random`)
            .then(response => {
                setRandomBeer(response.data)
            })
            .catch((e) => {
                console.log("Error getting random beer from API", e);
            });

    }, [])

    return (
        <>
            <div key={randomBeer._id}>
                <img
                    src={randomBeer.image_url}
                    alt={randomBeer.name}
                    height={300}
                    width={100} />

                <h1>{randomBeer.name}</h1>
                <h3>"{randomBeer.tagline}"</h3>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </>
    );
}


export default RandomBeersPage;
