import React from "react"
import BeerDetails from "./../BeerDetails/BeerDetails"
import { Component } from 'react'
import BeersService from './../../../service/beers.service'
import { Spinner } from "react-bootstrap"
import Header from '../../Header'
import OneBeer from '../../OneBeer'

class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
    }


    componentDidMount() {
        this.loadRandomBeer()
    }

    loadRandomBeer() {
        this.beersService
            .getRandomBeer()
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log('ERROR!', err))
    }

    render() {
        const { beer } = this.state
        return (
            !beer
                ?
                <Spinner animation="border" />
                :
                <>
                    <Header />
                    <OneBeer {...beer} />
                </>
        )
    }

}

export default RandomBeer