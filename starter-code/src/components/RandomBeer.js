import React, { Component } from 'react'

import BeerServices from '../services/beer.services'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this.services = new BeerServices()
        console.log(this.state)
    }

    componentDidMount = () => this.getRandomBeer()

    getRandomBeer = () => {
        this.services.getRandomBeer()
            .then(beerRandom => this.setState({ beer: beerRandom }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Col md={4}>
                    <Card className="card-beer">
                        <Card.Img variant="top" src={this.state.beer.image_url} />
                        <Card.Body>
                            <Card.Title>{this.state.beer.name}</Card.Title>
                            <hr></hr>
                            <Card.Text>{this.state.beer.tagline}</Card.Text>
                            <Card.Text>{this.state.beer.first_brewed}</Card.Text>
                            <Card.Text>{this.state.beer.attenuation_level}</Card.Text>
                            <Card.Text>{this.state.beer.description}</Card.Text>
                            <Card.Text>{this.state.beer.contributed_by}</Card.Text>
                            <hr />
                            <Button variant="outline-primary" size="sm">
                                <Link to='/'>Return</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}


export default BeerDetails
