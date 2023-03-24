import { useState, useEffect } from "react"
import beersService from "../services/beers.service"
import { Container, Row, Col } from 'react-bootstrap'

import BeerCard from "../components/BeerCard/BeerCard"

const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 3 }}>
                        {
                            beers.map(elm => {
                                return (
                                    <BeerCard {...elm} key={elm.id} />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default AllBeersPage