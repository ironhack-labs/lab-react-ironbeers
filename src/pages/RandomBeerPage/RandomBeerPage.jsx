import { useEffect, useState } from "react"
import BeerCard from "../../components/BeerCard/BeerCard"
import beersService from "../../services/beers.services"


const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {

        beersService
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }, [])

    return <BeerCard beer={randomBeer} />
}

export default RandomBeer