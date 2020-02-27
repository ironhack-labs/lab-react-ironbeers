import React, { Component } from 'react'
import axios from 'axios'
import CardBeer from './CardBeer'
class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <h1>Lista de cerves</h1>
            {this.state.beers.map(elm => <CardBeer key={elm._id} {...elm} />)}
            </>
        )
    }
}

export default AllBeers
