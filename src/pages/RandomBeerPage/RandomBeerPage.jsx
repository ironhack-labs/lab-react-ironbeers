import { useEffect, useState } from "react"
import beersService from '../../services/services'
import { Link } from "react-router-dom"
import { Card, Col, Container, Row } from 'react-bootstrap'

const RandomBeerPage = () => {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => {
                setBeer(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <Container >
            <Row className="justify-content-center">
                <Col className="col-8">
                    <h3>{beer.name}</h3>
                    <hr />
                    <Card className='m-3 p-3'>
                        <Card.Img variant="top" src={beer.image_url} className="beer-img" />
                        <hr />
                        <Card.Text>{beer.tagline}</Card.Text>
                        <Card.Text> <strong>Description:</strong> {beer.description}</Card.Text>
                        <Card.Text> <strong>First Brewed:</strong> {beer.first_brewed}</Card.Text>
                        <Card.Text> <strong>Attenuation_level:</strong> {beer.attenuation_level}</Card.Text>
                        <Card.Text> <strong>Created by: </strong> {beer.contributed_by}</Card.Text>
                    </Card>
                </Col>
            </Row>


        </Container >
    )
}

export default RandomBeerPage