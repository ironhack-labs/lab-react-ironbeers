

import { useState, useEffect } from "react"
import BeersAPI from "../../services/beers.service"
import BeerDetails from "./../../components/BeerDetails/BeerDetails"

const RandomBeerPage = () => {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        BeersAPI
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }


    return (
        <BeerDetails {...beer} />
    )
}
export default RandomBeerPage