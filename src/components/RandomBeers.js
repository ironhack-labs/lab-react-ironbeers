import React, { Component } from 'react'
import BeerService from '../service/BeersService'

class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {

        }
        this.services = new BeerService()
    }

    render() {

        return (
            <>
            </>
        )
    }
}





export default RandomBeer