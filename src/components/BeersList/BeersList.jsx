import { Container, Row, Col } from 'react-bootstrap'
import BeersCard from '../BeersCard/BeersCard'
import beersService from '../../services/beers.services'
import React, { useEffect, useState } from 'react'


function BeersList() {
    const [beers, setBeers] = useState([])
    useEffect(() => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                {
                    beers?.map(elm => {
                        return (
                            <Col md={{ span: 3 }} key={elm._id}>
                                <BeersCard beer={elm} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default BeersList