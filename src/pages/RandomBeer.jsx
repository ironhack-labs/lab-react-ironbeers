import { useEffect } from "react"
import { useState } from "react"
import SingleBeerDetail from "../components/SingleBeerDetail/SingleBeerDetail"
import ironbeersService from "../services/ironbeers.service"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        ironbeersService
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <SingleBeerDetail beerDetail={randomBeer} />
    )
}

export default RandomBeer