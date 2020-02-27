import React, { Component } from 'react'
import BeersServices from '../../services/beers.services'
import NavBar from '../ui/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getRandomBeer()

    getRandomBeer = () => {
        this.services.getRandomBeer()
            .then(randomBeer => {
                this.setState({ beer: randomBeer })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="beer-details">
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                        </Col>
                        <Col md={{ span: 5, offset: 1 }}>
                            <h2> {this.state.beer.name} </h2>
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <small><strong>Contributed by:</strong> {this.state.beer.contributed_by}</small>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default RandomBeer