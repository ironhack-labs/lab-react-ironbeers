import React, { Component } from 'react'

import BeersServices from '../../services/beers.services'

import BeerCard from './BeerCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>

                <h1>Beers</h1>

                {this.state.beers.length ? (
                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <i class="loading-spinner"></i>

                }

            </Container>
        )
    }
}

export default BeersList