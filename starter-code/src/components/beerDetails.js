import React, { Component } from 'react'

import ListServices from './services/beer.services'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this.services = new ListServices()
    }


    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            // .then(theBeer => console.log(theBeer))
            .then(theBeer => this.setState({ beer: theBeer }))
            .catch(err => console.log(err))
    }

    getRandomBeer = () => {
        this.services.getRandomBeer(this.props.match.params.id)
            .then(randomBeer => this.setState({ beer: randomBeer }))
            .catch(err => console.log(err))
    }

    // componentDidMount = () => this.getBeerDetails()
    componentDidMount = () => {
        console.log(this.props.match.params.id)
        this.props.match.params.id === 'random-beer'
            ?
            this.getRandomBeer()
            :
            this.getBeerDetails()
    }

    render() {
        // console.log(this.state)
        return (
            <Container>
                <h1> Este es el detalle de la cerveza</h1 >
                <Row>
                    <Link to={`/`}>
                        <Button as="div" variant="primary" size="sm">
                            Volver atrás
                        </Button>
                    </Link>

                    <Card className="card-details2">
                        <Col md={6}>
                            <Card.Img variant="top" src={this.state.beer.image_url} />

                        </Col>

                        <Card.Body>
                            <Row>
                                <Col md={10}>
                                    <Card.Title>{this.state.beer.name}</Card.Title>
                                    <p>{this.state.beer.tagline}</p>
                                </Col>

                                <Col md={2}>
                                    <p>{this.state.beer.attenuation_level}</p>
                                    <p>{this.state.beer.first_brewed}</p>
                                </Col>

                            </Row>

                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p>

                        </Card.Body>

                    </Card>
                </Row>
            </Container >
        )
    }

}
export default BeerDetails