import { useEffect, useState } from "react"
import SingleBeer from "../components/SingleBeer"
import BeerAxios from "../services/BeerAxios"

const RandomPage = () => {
    const beerAxios = new BeerAxios()
    const [beer, setBeer] = useState({})

    useEffect(() => {
        beerAxios.getRandomBeer()
            .then((randBeer) => setBeer(randBeer))
            .catch((err) => console.log(err))
    }, [])

    return (
        <SingleBeer beer={beer} />
    )
}

export default RandomPage