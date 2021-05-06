import { Component } from 'react';
import ApiCall from './callApi'
import BeerCard from './BeersCard'
import React from 'react'

class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.apiCall = new ApiCall()
    }
    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.apiCall
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('ERROR', err))
    }

    render() {
        const { beers } = this.state
        return ( console.log(beers)
            // beers.map(elm => <BeerCard key={elm._id} {...elm} />)
        )
    }
}

export default BeerList