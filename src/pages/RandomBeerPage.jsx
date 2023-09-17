import axios from "axios";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
            axios.get(`${import.meta.env.VITE_API_URL}/beers/random`)
            .then((response) => {
                setRandomBeer(response.data)
            })
            .catch((e) => {
                console.log("error getting random beer from the API...", e)
            })
    }, [])

    const renderList= () => {
        if (randomBeer === null) {
            return ( 
                <PacmanLoader
                color="rgba(54, 97, 214, 1)"
                size={100}
                />
            )
        }
        return (
            <section id="card">
                <img src={randomBeer.image_url} alt={randomBeer.name} />
                <h2>{randomBeer.name}</h2>
                <h4>{randomBeer.tagline}</h4>
                <p>First Brewed: {randomBeer.first_brewed}</p>
                <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                <p>Description: {randomBeer.description}</p>
                <p>Created by: {randomBeer.contributed_by}</p>
            </ section>
    )
    }

    return (
        <>
            {renderList()}
        </>
    )

}

export default RandomBeersPage;
