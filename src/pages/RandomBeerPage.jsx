import { useEffect, useState } from "react"
import beersService from "../services/beersService"

const RandomBeersPage = () => {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerRandom()
    }, [])

    const loadBeerRandom = () => {

        beersService
            .getRandomBeers()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    console.log(beer)
    return (
        <div>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt=""></img>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.contributed_by}</p>
            <p>{beer.attenuation_level}</p>

        </div>
    )

}




export default RandomBeersPage
