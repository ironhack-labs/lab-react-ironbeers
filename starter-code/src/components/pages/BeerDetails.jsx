import React, { Component } from 'react'

import BeersServices from '../../services/beers.services'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

class BeersDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getBeerDetails()

    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(theCoaster => this.setState({ beer: theCoaster }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="beer-details">
                <h1>{this.state.beer.name}</h1>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Stats</h3>
                        <hr></hr>
                        <p>Tag Line: {this.state.beer.tagline}</p>
                        <p>Description: {this.state.beer.description}</p>
                        <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
                        <p>first_brewed: {this.state.beer.first_brewed}</p>
                        <p>contributed_by: {this.state.beer.contributed_by}</p>

                        contributed_by
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
                    </Col>
                </Row>
                <Button as="div" variant="dark" size="sm">
                    <Link to="/">Volver</Link>
                </Button>
            </Container>
        )
    }
}

export default BeersDetails