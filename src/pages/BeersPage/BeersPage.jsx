import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import beersServices from '../../services/beers.services'
import BeersList from "../../components/BeersList/BeersList"
import Navigation from './../../components/Navigation/Navigation'


const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersServices
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <Row>
                <Navigation />
            </Row>

            <Row>
                <h2>Beers List</h2>
                <hr />
            </Row>

            <Row>
                <BeersList beers={beers} />
            </Row>

        </Container>
    )
}

export default BeersPage