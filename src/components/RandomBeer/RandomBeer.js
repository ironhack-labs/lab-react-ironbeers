import React, { Component } from 'react'
import BeerService from './../../service/beers.service'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class RandomBeer extends Component {

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
            .getRandom(beerId)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col className="details" md={6} >
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    </Col>
                    <Col md={3}>
                        <h1>{this.state.beer.name}</h1>
                        <h3>Detalles</h3>
                        <p>{this.state.beer.tagline}</p>
                        <p>first brewed: {this.state.beer.first_brewed}</p>
                        <p>Attenuation level: {this.state.beer.attenuation_level}</p>
                        <p>{this.state.beer.description}</p>
                        <p>Created by:{this.state.beer.contributed_by}</p>
                        <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RandomBeer