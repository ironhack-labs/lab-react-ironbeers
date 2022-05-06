import { useState, useEffect } from "react"
import BeerCard from "../components/BeerCard/BeerCard"
import ironbeersService from "../services/Ironbeersservice"


const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        ironbeersService
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <BeerCard beer={randomBeer} />
        </>
    )
}

export default RandomBeer