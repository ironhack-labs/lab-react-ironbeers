import React, { Component } from 'react'

import BeerServices from '../services/beers.services'

import BeerCard from './BeerCard'
import Container from 'react-bootstrap/Container'


class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beer: [],
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getRandomBeer()

    getRandomBeer = () => {
        this.services.getRandomBeer()
            .then(theBeer => this.setState({ beer: theBeer }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beer)
        return (
            <Container className="mt-5">

                <h1>Random Beer</h1>

                
                <ul className="list-unstyled">
                    <BeerCard key={this.state._id} props={this.state.beer} />
                </ul>


            </Container>
        )
    }
}

export default RandomBeer