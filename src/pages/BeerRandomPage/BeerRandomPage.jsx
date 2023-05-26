import { useState, useEffect } from "react"

import { Col, Container, Row } from "react-bootstrap"
import BeerList from "../../components/BeerList/BeerList"
import CardBeerDetails from "../../components/CardBeerDetails/CardBeerDetails"
import beersService from "../../services/beers.service"





const BeerRandomPage = () => {


    const [beer, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    if (!beer) {
        return <h1>Loading...</h1>
    }


    return (
        <CardBeerDetails beer={beer} />
    )
}

export default BeerRandomPage