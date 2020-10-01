import React, { Component } from 'react'
import BeerCard from './BeerCard'

class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }
    }

    componentDidMount() {
        const baseUrl = 'https://ih-beers-api2.herokuapp.com/beers'
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ beers: data }))
    }


    render() {
        return (
            <>
                <h1>All Beers</h1>
                <ul>
                    <li>{this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}</li>
                </ul>
            </>
        )
    }
}

export default BeersList