import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import beersService from "../../services/beers.services"


const BeerDetailsPage = () => {

    const [beer, setBeer] = useState({})

    const { beer_id } = useParams()

    console.log(beer_id)

    useEffect(() => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])


    return (

        <Container>
            <h2>Details of {beer.name}</h2>

            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <p>Description: {beer.description}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <ul>
                        <li>Since: {beer.first_brewed}</li>
                        <li>Attenuation Level: {beer.attenuation_level}</li>
                    </ul>
                    <hr />
                    <Link to="/beers">
                        <Button as="span" variant="dark">Go Backs</Button>
                    </Link>
                </Col>

                <Col md={{ span: 4 }}>
                    <img src={beer.image_url} style={{ width: '100%' }} />
                </Col>

            </Row>

        </Container>

    )

}

export default BeerDetailsPage