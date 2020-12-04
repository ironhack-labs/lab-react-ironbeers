import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import { Link } from 'react-router-dom'


import { Container, Row, Col, Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap'

class RandomBeer extends Component {

    constructor() {
        super()

        this.state = {

            randomBeer: []

        }

        this.beerService = new BeerService()
    }

    componentDidMount = () => this.refreshBeer()

    refreshBeer = () => {

        this.beerService
            .getRandomBeer()
            .then(res => this.setState({ randomBeer: res.data }))
            .catch(err => console.log(err))

    }



    render() {

        return (
            <>


                <Container className="beer-details">
                    <h1>{this.state.randomBeer.name} </h1>

                    <Row>

                        <Col md={{ span: 6, offset: 3 }}>

                            <Card className="details-card">
                                <Card.Img variant="top" src={this.state.randomBeer.image_url} alt={`Detail of${this.state.randomBeer.name}`} />
                                <Card.Body>
                                    <Card.Title>{this.state.randomBeer.name}  <span>{this.state.randomBeer.attenuation_level}</span></Card.Title>
                                    <Card.Text>{this.state.randomBeer.tagline}  <span>{this.state.randomBeer.first_brewed}</span></Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{this.state.randomBeer.description}</ListGroupItem>
                                    <ListGroupItem>{this.state.randomBeer.contributed_by}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                                    <Button variant="dark btn-sm" onClick={this.refreshBeer}>Refresquito</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>



            </>
        )

    }

}

export default RandomBeer