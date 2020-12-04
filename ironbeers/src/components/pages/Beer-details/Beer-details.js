import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import { Link } from 'react-router-dom'


import './Beer-details.css'

import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class BeerDetails extends Component {

    constructor() {
        super()

        this.state = {

            beer: []

        }

        this.beerService = new BeerService()
    }

    componentDidMount = () => {

        const beerId = this.props.match.params.beer_id

        this.beerService
            .getBeerById(beerId)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }


    render() {


        return (
            <>
                <Container className="beer-details">
                    <h1>Estos son los detalles de {this.state.beer.name} </h1>

                    <Row>

                        <Col md={{ span: 6, offset: 3 }}>

                            <Card className="details-card">
                                <Card.Img variant="top" src={this.state.beer.image_url} alt={`Detail of${this.state.beer.name}`} />
                                <Card.Body>
                                    <Card.Title>{this.state.beer.name}  <span>{this.state.beer.attenuation_level}</span></Card.Title>
                                    <Card.Text>{this.state.beer.tagline}  <span>{this.state.beer.first_brewed}</span></Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{this.state.beer.description}</ListGroupItem>
                                    <ListGroupItem>{this.state.beer.contributed_by}</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>

            </>
        )

    }

}

export default BeerDetails