import React, { Component } from 'react'
import BeersApi from '../services/beers-api'
import Beers from '../components/Beer-Card'
import Nav from '../components/Header'
class AllBeer extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeersApi()
    }
    componentDidMount() {
        this.services.getAllBeers()
            .then(beers => this.setState({ beers: beers }))
    }



    render() {
        return (
            <div>
                <Nav />
                {this.state.beers.map((beer, idx) => <Beers key={idx} {...beer} />)}
            </div>
        )
    }



}


export default AllBeer
