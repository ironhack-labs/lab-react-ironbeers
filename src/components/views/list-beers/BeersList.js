import React, { Component } from 'react'

import { Container } from 'react-bootstrap'

import Header from '../../allpages/Header'
import Beer from '../Beer'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beerService
            .getAllBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <ul>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} path={`/beers/${elm._id}`} />)}
                    </ul>
                </Container>
            </>
        )
    }
}

export default BeerList 