import beersService from "../services/beers.services"
import { useState, useEffect } from "react"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState('')

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => {
                console.log('NO LLEGÓ???', data)
                setRandomBeer(data)
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <h1>This is a beer:</h1>
            <div className="singleBeerCard">
                <img src={randomBeer.image_url} alt="" />
                <p>{randomBeer.name}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </>
    )
}

export default RandomBeer