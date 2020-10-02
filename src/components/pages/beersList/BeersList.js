import React, { Component } from 'react'

import BeersService from './../../../service/beers.service'

import Header from '../../layout/HeaderMain'
import BeerCard from './BeerCard'

class CoastersList extends Component {
    constructor() {
        super()
        this.state = {

            beers: []
        }

        this.beerService = new BeersService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error:', err))
    }

    render() {
        return (

            <>
                <Header />

                <main className='all-beers'>

                    <ul className="beer-list list-group countries-list">

                        {this.state.beers.map((elm, idx) => <BeerCard key={idx} beer={elm} />)}

                    </ul>

                </main>

            </>

        )
    }
}

export default CoastersList