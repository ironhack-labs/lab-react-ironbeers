import axios from "axios"
import { useEffect, useState } from "react"

function RandomBeersPage() {

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random"

    const [randomBeer, setRandomBeer] = useState({})

    const getRandomBeer = () => {
        axios.get(apiURL)
            .then((response) => {
                console.log(response.data)
                setRandomBeer(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getRandomBeer()
    }, [])

    return (
        <div key={randomBeer._id} className="beer-details">

            <div className="beer-details-image">
                <img className="image-beer" src={randomBeer.image_url} />
            </div>

            <div className="beer-details-text">
                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2>
                <h3>Attenuation level: {randomBeer.attenuation_level}</h3>
                <h3>First brewed: {randomBeer.first_brewed}</h3>
                <h3>Brewer's tips: {randomBeer.brewers_tips}</h3>
                <p>{randomBeer.description}</p>
                <p>Contributed by: {randomBeer.contributed_by}</p>
            </div>

        </div>
    )
}

export default RandomBeersPage
