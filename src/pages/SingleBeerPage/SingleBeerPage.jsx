import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import beersService from "../../services/beers.services"

const SingleBeerPage = () => {

    const [beer, setBeer] = useState({})

    const { _id } = useParams()

    useEffect(() => {

        beersService

            .getOneBeer(_id)

            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))

    },)


    return (

        <Container>

            <h1 className="mb-4">{beer.name}</h1>
            <hr />

            <Row>

                <Col md={{ span: 5, offset: 1 }}>

                    <Col md={{ span: 4 }}>
                        <img src={beer.image_url} style={{ width: '100%' }} alt="" />
                    </Col>
                    <p><b>Tagline:</b> {beer.Tagline}</p>
                    <p><b>Description:</b> {beer.description}</p>
                    <ul>
                        <li><b>First brewed:</b> {beer.first_brewed}</li>
                        <li><b>Attenuation level:</b> {beer.attenuation_level}</li>
                    </ul>

                    <Link to="/">
                        <Button as="figure" variant="dark">Beers list</Button>
                    </Link>
                </Col>


            </Row>

        </Container >
    )
}

export default SingleBeerPage