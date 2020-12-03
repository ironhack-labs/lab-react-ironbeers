import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import React, { Component } from 'react'
import BeersService from '../../service/beers.service'

import BeerCard from './BeerCard'

import { Container, Row } from 'react-bootstrap'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beersService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <h1>List of beers</h1>
                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>
                </Container>

            </>
        )
    }
}

export default BeersList