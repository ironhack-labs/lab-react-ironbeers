import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import beersService from '../../services/beers.services'


const BeerDetailsCard = ({ beer }) => {

    console.log(beer)
    // const [beetDetails, setBeerDetails] = useState({})

    return (
        <Container>
            <h1>Beer details</h1>
            <hr />

            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <img style={{ width: '100%' }} src={beer.image_url} alt={beer.name} />
                </Col>
                <Col md={{ span: 4 }} >
                    <h3>{beer.name}</h3>
                    <h4>{beer.tagline}</h4>
                    <h5>{beer.description}</h5>
                    <h6> {beer.contributed_by}</h6>
                </Col>
            </Row>


        </Container >
    )


}

export default BeerDetailsCard

