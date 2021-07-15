import React from 'react'
import { Component } from 'react'
import BeerCard from './BeerCard'

class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: ''
        }
    }



    render() {
        return (
            <>
                <h1>Hi</h1>
                {this.state.beers.map(elm => <BeerCard {...elm} />)}
            </>
        )
    }

}

export default BeersList