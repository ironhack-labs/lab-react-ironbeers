import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import beersService from '../services/beers.service'


function BeerDetailsPage() {

    const [beerDetails, setBeerDetails] = useState({})
    const { id } = useParams()
    console.log('holaaaaaa id', id)

    useEffect(() => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={beerDetails.image_url} alt={beerDetails.name} />
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <h1>{beerDetails.name}</h1>
                    <p>{beerDetails.tagline}</p>
                    <p>{beerDetails.first_brewed}</p>
                    <p>{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.description}</p>
                    <p>{beerDetails.contributed_by}</p>

                </Col>

                <Link to="/beers">
                    <Button variant="dark">Back</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default BeerDetailsPage