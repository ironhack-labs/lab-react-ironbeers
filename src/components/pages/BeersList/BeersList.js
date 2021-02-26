import React from 'react';
import { Component } from 'react'
import './BeerList.css'
import BeersService from '../../../service/beers.service'

import Header from '../../layout/Header'
import BeerTag from './BeerTag'

class BeersList extends Component {
    constructor () {
        super()
        this.state = {
            beers: []
        }
        
        this.beerService = new BeersService()
    }

    componentDidMount () {
        this.loadBeers()
    }

    loadBeers () {
        this.beerService
            .getBeers()
            .then(response => this.setState({beers: response.data}))
            .catch(err => console.log(err))
    }

    render () {
        return (
            <>
            <Header></Header>
            <h1>Beers list</h1>
            {this.state.beers?.map(elm => <BeerTag {...elm} key={elm._id} ></BeerTag>)}
            </>
        )
    }
}

export  default BeersList