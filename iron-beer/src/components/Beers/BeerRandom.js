import React, { Component } from 'react'
import BeersService from '../../service/beers.service'
import Navbar from '../Navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class BeerRandom extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beerService = new BeersService()
    }

    componentDidMount = () => {
        const beer_id = this.props.match.params.beer_id
        this.beerService
            .getBeerRandom(beer_id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Navbar />
                <Container className="beer-details">
                    <h1>Detalles {this.state.beer.name}</h1>
                    <Row>
                        <Col md={{ span: 6, offset: 1 }} >
                            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                        </Col>
                        <Col md={3}>
                            <i>{this.state.beer.tagline}</i>
                            <h3>Description</h3>
                            <p>{this.state.beer.description}</p>
                            <hr />
                            <p>First Brewed: {this.state.beer.first_brewed}</p>
                            <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
                            <small>By: {this.state.beer.contributed_by} </small>
                            <br />
                            <hr />
                            <Link to="/" className="btn btn-sm btn-primary">Go back</Link>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default BeerRandom