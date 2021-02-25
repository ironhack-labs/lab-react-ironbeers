import React from 'react';
import { Component } from 'react'
import './Beers.css'
import Navigation from './Navbar'
import Beercard from './Beercard';
import { Container, Row, Col } from 'react-bootstrap'

import BeersService from './../service/beers.service'

class Beers extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }

        this.BeersService = new BeersService()
    }


    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.BeersService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navigation />
                <Container>
                    <Row>
                        {this.state.beers.map((elm, idx) => < Beercard key={idx} {...elm} />)}
                    </Row>

                </Container>

            </>
        )
    }
}

export default Beers