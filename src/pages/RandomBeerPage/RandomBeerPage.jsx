import { useEffect, useState } from "react"
import DetailsBeerCard from "../../components/DetailsBeerCard/DetailsBeerCard"
import beersService from "../../services/beers.services"

const RandomBeerPage = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => {
                setRandomBeer(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <DetailsBeerCard beer={randomBeer} />
    )
}

export default RandomBeerPage