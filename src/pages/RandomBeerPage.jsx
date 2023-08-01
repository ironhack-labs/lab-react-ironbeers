import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    const getRandomBeer = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            setRandomBeer(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRandomBeer()
    }, [])

    if (!randomBeer) {
        return <p>Loading...</p>
    }

    return (
        <div className="beer-details">
            <img
                className="beer-image"
                src={randomBeer.image_url}
                alt={`${randomBeer.name} image`}
            />
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <p>First brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>
                <b>Created by: </b>
                {randomBeer.contributed_by}
            </p>
            <Link to={`/beers`}>See All Beers</Link>
        </div>
    )
}

export default RandomBeerPage
