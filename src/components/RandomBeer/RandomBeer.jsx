import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import beerService from "../../services/AllBeers.service"

const RandomBeer = () => {

    const { beer_id } = useParams()
    const [beer, setBeer] = useState({})
    console.log(beer)


    useEffect(() => {

        beerService
            .getRandomBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                <>
                    <h1>Detalles de {beer.name}</h1>
                    <hr />

                    <Row>

                        <Col md={{ span: 6 }}>
                            <h3>Cerveza Aleatoria</h3>
                            <ul>
                                <li>Descripción : {beer.description}</li>
                                <li>Tagline : {beer.tagline}</li>
                                <li>Atenuación : {beer.attenuation_level}</li>
                                <li>Fecha : {beer.first_brewed}</li>
                                <li>Distribuido  : {beer.contributed_by}</li>

                            </ul>
                            <hr />

                        </Col>

                        <Col md={{ span: 4 }}>
                            <img src={beer.image_url} style={{ width: '30%' }} />
                        </Col>
                        <Link to="/beers">
                            <Button as="div" variant="dark">Volver a la galería</Button>
                        </Link>

                    </Row>
                </>
            }

        </Container>
    )
}

export default RandomBeer