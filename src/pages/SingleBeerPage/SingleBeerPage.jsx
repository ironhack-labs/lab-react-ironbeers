import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom'
import beersService from "../../services/beers.services";
import './SingleBeerPage.css'

const SingleBeerPage = () => {

    const [beer, setBeer] = useState([])

    const { beer_id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container className="SingleBeerPage">

            <h1 className="mb-4">Detalles de {beer.name}</h1>
            <hr />
            <p>{beer.description}</p>
            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <ul>
                        <li> {beer.tagline}</li>
                        <li> {beer.first_brewed}</li>
                        <li>attenuation level {beer.attenuation_level}</li>
                        <li>contributed by: {beer.contributed_by}</li>
                    </ul>
                    <p>{beer.description}</p>
                    <hr />

                    <Link to="/beers">
                        <Button as="figure" variant="dark">Volver a las birras</Button>
                    </Link>
                </Col>

                <Col md={{ span: 4 }}>
                    <img src={beer.image_url} />
                </Col>

            </Row>
        </Container >
    )
}

export default SingleBeerPage