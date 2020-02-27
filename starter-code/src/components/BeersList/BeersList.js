import React, { Component } from 'react'
import BeersService from '../../services/beer.service'

export default class BeersList extends Component {
    constructor() {
        super()
        this.state = { beers: "" }
        this.services = new BeersService()
    }
    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beer: allBeers }))
            .catch(err => err)
    }

    render() {
        return (this.state.beers.map(elm =>))
    }

}