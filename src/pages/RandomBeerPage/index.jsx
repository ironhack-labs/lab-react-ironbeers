import { useEffect, useState } from "react"
import BeerDetails from "../../components/BeerDetails"

import beersServices from "../../services/beers.services"

const RandomBeerPage = () => {
    const [beer, setBeer] = useState({})
    useEffect(() => {
        beersServices.getOneRandomBeer()
            .then(({ data }) => {
                setBeer(data)
            })
    }, [])

    return (
        <BeerDetails {...beer} />
    )
}

export default RandomBeerPage