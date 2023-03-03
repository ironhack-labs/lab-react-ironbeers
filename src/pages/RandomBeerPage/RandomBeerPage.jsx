import { useEffect, useState } from "react"
import BeersServices from "../../services/beers.services"
import BeerDetails from "../../components/BeerDetails/BeerDetails"

const RandomBeerPage = () => {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        BeersServices
            .getRandomBeer()
            .then(({ data }) => {
                setBeer(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <BeerDetails {...beer} />
    )
}

export default RandomBeerPage