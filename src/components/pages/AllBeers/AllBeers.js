import React from "react"
import { Component } from 'react'
import BeerBox from "../../BeerBox"
import BeersService from './../../../service/beers.service'
import { Spinner } from "react-bootstrap"
import Header from '../../Header'


class AllBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.beersService = new BeersService()
    }


    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('ERROR!', err))
    }

    render() {
        const { beers } = this.state
        return (
            !beers
                ?
                <Spinner animation="border" />
                :
                <>
                    <Header />
                    {beers.map(elm => <BeerBox key={elm._id} {...elm} />)}
                </>
        )
    }
}

export default AllBeers