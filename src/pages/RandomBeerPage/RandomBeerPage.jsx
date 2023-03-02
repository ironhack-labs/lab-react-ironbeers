import beerService from "../../services/beers.services"

import { Container } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"
import { useEffect, useState } from "react"
import BeerDetails from "../../components/BeerDetails/BeerDetails"

const RandomBeer = () => {

    const [beer, setRandomBeers] = useState([])


    const loadBeer = () => {
        beerService
            .getRandomBeer()
            .then(({ data }) => setRandomBeers(data))
            .catch(err => console.log(err))
    }
    console.log(beer)
    useEffect(() => {
        loadBeer()
    }, [])

    return (
        <>
            <Navigation />
            <BeerDetails beer={beer} />
        </>
    )
}

export default RandomBeer
