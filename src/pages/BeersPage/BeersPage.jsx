import { useEffect, useState } from "react"
import beerService from "../../services/beers.services"

import BeersList from "../../components/BeersList/BeersList"
import Navigation from "../../components/Navigation/Navigation"
import { Container } from "react-bootstrap"

const BeersPage = () => {

    const [beers, setBeers] = useState([])

    const loadBeers = () => {
        beerService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

    return (
        <>
            <Navigation />
            <Container className="mt-3">

                <h1>Beers</h1>
                <hr />
                <BeersList beers={beers} />
            </Container>
        </>
    )
}

export default BeersPage
