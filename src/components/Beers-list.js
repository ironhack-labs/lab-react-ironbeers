import React from 'react'
import { Component } from 'react'
import BeersService from './../service/beers.service'
import BeerCard from './Beers-card'
import { Container } from 'react-bootstrap'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error!!!', err))
    }

    render() {

        const { beers } = this.state

        return (

            <Container>

                <h1>Beers List</h1>

                {
                    beers.map(elm => <BeerCard key={elm._id} {...elm} />)
                }

            </Container>
        )

    }

}

export default BeersList