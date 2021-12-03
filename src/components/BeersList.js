import React, { Component } from 'react'
import allBeers from "https://ih-beers-api2.herokuapp.com/beers"
import BeerCard from './BeersCard'

export default class BeersList extends Component {
    constructor() {
        super()
        this.state = { allBeers }
    }

    render() {
        return (
            <>
                {
                    this.state.allBeers.map(elm => <BeerCard key={elm._id} />)
                }
            </>
        )
    }
}
