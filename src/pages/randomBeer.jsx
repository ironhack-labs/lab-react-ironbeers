import { useEffect, useState } from "react"

import beerHandler from "../services/beers.handler";
import BeersCard from "../components/beersCard/BeersCard"

const RandomBeerPage = () => {
  
    const [singleBeer, setSingleBeer] = useState({})

    useEffect(() => {
        beerHandler
            .getRandomBeer()
            .then(({ data }) => setSingleBeer(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <BeersCard beerData={singleBeer} />
    )
}

export default RandomBeerPage