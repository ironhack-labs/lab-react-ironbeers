import { useState, useEffect } from "react"
import axios from 'axios'

const API_URL_RANDOM = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get(API_URL_RANDOM)
            .then(response => {
                setRandomBeer(response.data)
            })
            .catch(error => {
                console.error('Error', error)
            })
    }, [])

    if (!randomBeer) {
        return <div>...</div>
    }

    return (
        <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} style={{ width: '100px', height: 'auto' }} />
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeerPage