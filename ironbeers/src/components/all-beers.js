import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import BeerCard from './beer-card'
import beerApiHandler from '../api-handler'
import Navigation from './navigation'

class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.beerApi = new beerApiHandler()
    }

    componentDidMount = () => this.chargeBeers()

    chargeBeers = () => {
        this.beerApi
            .getAllBeers()
            .then(res => this.setState({beers: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Navigation />
                <Row className="beer-cards">
                    {this.state.beers ? this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />) : <h4>Loading...</h4>}
                </Row>
            </Container>
        )
    }
}

export default AllBeers