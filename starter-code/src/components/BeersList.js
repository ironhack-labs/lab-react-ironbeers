import React, { Component } from 'react'

import BeerServices from '../services/beer.services'
import BeersCard from '../components/BeersCard'


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
            .then(allbeers => this.setState({ beers: allbeers }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.beers.map(elm => <BeersCard key={elm._id} {...elm} />)}
            </div>
        )
    }
}

export default BeersList