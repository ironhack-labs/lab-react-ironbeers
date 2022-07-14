import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import beerService from '../services/beer.services'
import { Link } from 'react-router-dom'

const AllBeers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }

    return (
        <Container>
            <h1>All Beers</h1>
            <Row>
                {
                    beers.map(({ _id, name, image_url, tagline }) => {
                        return (
                            <Col md={4} key={_id} >
                                <Row>
                                <Link to={`/${_id}`}>
                                    <img src={image_url} style={{ width: '20%'}} alt="beers" />
                                </Link>
                                <h1>{name}</h1>
                                <hr />
                                <h4>{tagline}</h4>
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default AllBeers