import { useEffect, useState } from "react"
import beerService from "../services/beers.service"

function RandomBeersPage() {
    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        beerService
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <img src={ beer.image_url } alt={ beer.name } />
            <p>{ beer.name }</p>
            <p>{ beer.tagline }</p>
            <p>{ beer.first_brewed }</p>
            <p>{ beer.attenuation_level }</p>
            <p>{ beer.description }</p>
            <p>{ beer.contributed_by }</p>
        </div>
    )
}

export default RandomBeersPage
