import React from 'react'
import { Component } from 'react'
import BeersService from './../../../../src/service/beers.service'
import BeerCard from './BeerCard'

import { Container, Row } from 'react-bootstrap'

class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.beersService = new BeersService()
    }

    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => {
                this.setState({beers: response.data})
            })
            .catch(err => console.log('Errors:', err))
    }

    render() {

        const { beers } = this.state
        return(

            !beers ? <h1>Loading...</h1> :
            <section>
            <Container>
                <Row>
                    {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                </Row>
            </Container>
        </section>
        )
    }
}

export default Beers