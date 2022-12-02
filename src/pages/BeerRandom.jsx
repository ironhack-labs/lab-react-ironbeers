import serviceApi from "../services/beer-api"
import { useEffect, useState } from "react"
import BeerDetails from "../components/BeerDetails/BeerDetails"

const BeerRandom = () => {

    const [randomBeer, setRandomBeer] = useState({})

    const getRandomBeer = () => {
        serviceApi
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getRandomBeer()
    }, [])

    return (
        < BeerDetails beer={randomBeer} />
    )

}

export default BeerRandom