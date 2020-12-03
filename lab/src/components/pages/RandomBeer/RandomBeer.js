import React, { Component } from 'react'
import BeersService from './../../../service/beers.service'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class BeerRandom extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params.beer_id

        this.beersService
            .getRandomBeer(beer_id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (


            <Container>
                
                <Row>
                    <Col  className="details" md={6} >
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    </Col>
                    <Col md={6}>
                        <h2>{this.state.beer.name}</h2>
    
                        <h4>{this.state.beer.tagline}</h4>
                        <p>first brewed: {this.state.beer.first_brewed}</p>
                        <p>Attenuation level: {this.state.beer.attenuation_level}</p>
                        <p>{this.state.beer.description}</p>
                        <h4>{this.state.beer.contributed_by}</h4>
                        <Link to="/beers" className="btn btn-sm btn-dark">All Beers</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BeerRandom