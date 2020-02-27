import React, { Component } from 'react'

import BeerServices from '../services/beers.services'

import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getBeerDetails()

    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(theBeer => this.setState({ beer: theBeer }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="my-5">
                <img
                    width={150}
                    className="mr-3"
                    src={this.state.beer.image_url}
                    alt={this.state.beer.name}
                />
                <h3>{this.state.beer.tagline}</h3>
                <hr></hr>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>

                <Link to="/">Volver</Link>
            </Container>
        )
    }
}

export default BeerDetails