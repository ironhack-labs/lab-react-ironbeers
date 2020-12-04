import React, { Component } from 'react'
import BeerService from '../../service/beer.service'

import { Container } from 'react-bootstrap'


import ListBeerCard from './ListBeerCard'


class ListBeer extends Component {
    
    constructor() {
        super()
        this.state = {
            beers: ''
        }
        this.beerService = new BeerService()
    }
    
    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beerService
            .getBeer()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container>
                <h1>ListBeer</h1>

                {   this.state.beers ?
                    this.state.beers.map((elm, idx) => <ListBeerCard key={idx} {...elm} />) : <p>Wait</p>}
         
            </Container>
        )
    }
}

export default ListBeer
