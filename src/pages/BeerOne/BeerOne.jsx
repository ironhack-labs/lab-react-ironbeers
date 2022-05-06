import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import beersService from "../../services/beers.services"
import { Card, Container, Row, Col, Button } from 'react-bootstrap'



const BeerOne = () => {

    const { id } = useParams()
    const [oneBeer, setOneBeer] = useState({})

    console.log(id)

    useEffect(() => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => {
                setOneBeer(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    })

    return (
        <Container>
            <h1>Beer details</h1>
            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={oneBeer.image_url} />
                <Card.Body>
                    <Card.Title>{oneBeer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{oneBeer.tagline}</Card.Subtitle>
                    <Card.Text>{oneBeer.description}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{oneBeer.contributed_by}</Card.Subtitle>
                </Card.Body>
            </Card>
        </ Container>
    )
}

export default BeerOne