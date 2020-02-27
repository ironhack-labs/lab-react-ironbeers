import React, { Component } from 'react'
import BeersServices from './../../../services/beers.services'
import { Link } from 'react-router-dom'

import BeerCard from './BeerCard'
import SeachBeer from './SearchBeer'

class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
            charged: false
        }
        this.services = new BeersServices()
    }

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(response => {
                this.setState({
                    beers: response,
                    charged: true
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.getAllBeers()

    updateList = receivedElem => {
        this.setState({
            beers: receivedElem
        })
    }

    render() {
        return (
            <>
                {this.state.charged ? <SeachBeer beers={this.state.beers} charged={this.state.charged} updateList={this.updateList} /> : "Cargando..."}
                {this.state.beers.map(elem => <Link key={elem._id} to={'/' + elem._id}><BeerCard {...elem} /></Link>)}
            </>
        )
    }
}

export default Beers