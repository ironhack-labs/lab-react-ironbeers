import { Col, Container, Row } from 'react-bootstrap'
import BeerService from '../../../service/beers.service'
import React, { Component } from 'react'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this.service = new BeerService()
    }

    componentDidMount = () => {
        this.service
            .getRandomBeer()
            .then(res => this.setState({ beer: res.data }))
            .catch(err => new Error(err))
    }

    render() {
        return (
            <Container>
                <h2>{this.state.beer.name}</h2>
            </Container>
        )
    }
}

export default RandomBeer