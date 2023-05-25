import Header from "../../components/Header/Header"
import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import { useParams } from "react-router-dom"
import { Row, Col, Container } from "react-bootstrap"

const BeersDetails = () => {

    const { beers_id } = useParams()

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeer()

    }, [])

    const loadBeer = () => {
        beersService
            .getOneBeer(beers_id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        <Header>
            <Container>
                <h1>Detalles</h1>

                <h1>Detalles de {beers.name}</h1>
                <hr />

                <Row>

                    <Col md={{ span: 6 }}>
                        <h3>Description</h3>
                        <p>{beers.description}</p>
                        <p>{beers.tagline}</p>
                        <hr />

                    </Col>

                    <Col md={{ span: 4 }}>
                        <img src={beers.image_url} style={{ width: '100%' }} />
                    </Col>

                </Row>

            </Container>
        </Header>
    )
}

export default BeersDetails