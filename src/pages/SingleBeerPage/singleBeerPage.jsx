import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import beersService from '../../services/beers.service'
import { Container, Row, Col, Button } from 'react-bootstrap'

const BeerDetailsPage = () => {

    const [beerDetails, setBeerDetails] = useState({})
    const { id} = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <Container>
            <h1>Detalles de {beerDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Información</h3>
                    <p>{beerDetails.tagline}</p>
                    <p> {beerDetails.first_brewed} </p>
                    <p> {beerDetails.attenuation_level}</p>
                    <p> {beerDetails.description}</p>
                    <p> {beerDetails.contributed_by}</p>¡
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={beerDetails.image_url} alt='' />
                </Col>
                <Link to="/">
                    <Button variant="dark">Volver</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default BeerDetailsPage