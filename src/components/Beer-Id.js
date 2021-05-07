import React from 'react'
import { Component } from 'react'
import BeersService from '../service/beers.service'

class BeerId extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beerService = new BeersService()
    }

    componentDidMount() {

        const { beer_id } = this.props.match.params

        this.beerService
            .getOneBeer(beer_id)
            .then(response => this.console.log({ beer: response.data }))
            .catch(err => console.log('Error!!!!', err))
    }

    render() {
        return (

            <h1> Hello!!!</h1 >
        )
    }
}

export default BeerId