import { useEffect } from "react"
import { useParams } from "react-router-dom"
import beersServices from "../../services/beers.services"
import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"



const BeerDetails = () => {
    const { beer_id } = useParams()

    const [beer, setBeer] = useState([])

    useEffect(() => {
        beersServices
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <Container>


            <h1>{beer.name} details</h1>
            <hr />

            <Row>

                <Col md={{ span: 6 }}>
                    <img src={beer.image_url} style={{ width: '100%' }} />
                    <h3>Name</h3>
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                    <hr />

                    <Link to="/galeria">
                        <Button as="div" variant="dark">Volver a la galería</Button>
                    </Link>
                </Col>

            </Row>



        </Container>
    )
}

export default BeerDetails