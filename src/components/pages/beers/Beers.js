import React, { Component } from 'react'
import axios from 'axios'
import BeerDetails from './BeersDetails'

// import { movies as moviesFromFakeApi } from '../data-simulation'

import BeersDetails from './BeersDetails'


class Beers extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
    }


    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => {
                this.setState({
                    beers: res.data
                })
            })
    }


    render() {
        
        return (
            <>
                {this.state.beers.map(elm => <BeerDetails key={elm._id} {...elm} />)}
            </>
        )
    }
}

export default Beers