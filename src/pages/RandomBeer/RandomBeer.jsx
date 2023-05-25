import { useEffect, useState } from "react"
import beerService from '../../services/beers.services'
import { Row, Col, Container, Button } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"

const BeersRandomPage = () => {

    const [beerRandom, setBeerRandom] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getBeerRandom()
            .then(({ data }) => setBeerRandom(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Navigation />
            {
                !beerRandom
                    ?
                    <h1>Cargando</h1>
                    :
                    <>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <img src={beerRandom.image_url} style={{ width: '10%' }} />
                                <h1>{beerRandom.name}</h1>
                                <h3>Especificaciones</h3>
                                <p>{beerRandom.tagline}</p>
                                <p>{beerRandom.first_brewed}</p>
                                <p>{beerRandom.attenuation_level}</p>
                                <p>{beerRandom.description}</p>
                                <p>{beerRandom.contributed_by}</p>
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default BeersRandomPage