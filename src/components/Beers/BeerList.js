import React, { Component } from 'react'
import BeerService from '../../service/BeerService'

import BeerCard from './BeerCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class BeerList extends Component {
    constructor() {
        super()
        this.state = { beers: [] }
        this.beerService = new BeerService()
    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container as="main" className="beers-page">

                    <h1>Beer list</h1>

                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>

                </Container>
            </>
        )
    }
}

export default BeerList