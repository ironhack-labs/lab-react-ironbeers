import React, { Component } from 'react'

import BeerServices from '../services/beers.services'

import BeerCard from './BeerCard'
import Container from 'react-bootstrap/Container'


class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beers)
        return (
            <Container className="mt-5">

                <h1>Beers list</h1>


                <ul className="list-unstyled">
                    {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                </ul>


            </Container>
        )
    }
}

export default BeersList