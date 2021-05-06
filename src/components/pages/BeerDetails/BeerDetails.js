import React from "react"
import { Component } from 'react'
import BeersService from './../../../service/beers.service'
import { Spinner } from "react-bootstrap"
import Header from '../../Header'
import OneBeer from "../../OneBeer"


class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
    }


    componentDidMount() {
        this.loadBearDetails()
    }

    loadBearDetails() {
        this.beersService
            .getOneBeer(this.props.match.params.beerId)
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

export default BeerDetails