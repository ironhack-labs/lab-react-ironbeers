import { useState, useEffect } from "react"
import beerService from "../services/beers.services"


const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        beerService
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <img src={randomBeer.image_url} alt="beerimg"></img>
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>

        </div>)
}

export default RandomBeer 