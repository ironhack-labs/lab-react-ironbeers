import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import beersService from '../services/beers.service'
import './BeerDatails.css'


class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {}
        this.beersService = new beersService()
    }

    componentDidMount = () => {
        this.beersService
            .getOneBeer(this.props.match.params._id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    render() {

        return (
            <Container>
                <main>
                    <h1>{this.state.name}</h1>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <img  alt={this.state.name} src={this.state.image_url} />
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>

                            <p>{this.state.description}</p>
                            <hr />
                            <p> {this.state.tagline}</p>
                            <p>{this.state.first_brewed}</p>
                            <p> {this.state.attenuation_level}</p>
                            <hr />

                            <Link to="/" className="btn btn-info btn-sm">Volver al inicio</Link>
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default BeerDetails