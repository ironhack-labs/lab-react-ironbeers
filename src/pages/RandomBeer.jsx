import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import beerService from '../services/beer.services'

const Random = () => {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {

        beerService
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))
    }
    return (

        <Container>
            <Row>
                <Col></Col>
                <Col>

                    <h1>Random</h1>
                    <img src={beer.image_url} style={{ width: '10%' }} alt={beer.name} />
                    <h1>{beer.name}</h1>
                    <h5>{beer.tagline}</h5>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    )
}

export default Random