import React, { Component } from 'react'

import beersService from '../../../service/beers.service'
import BeersCard from './BeersCard'


class BeersList extends Component {

        constructor() {
            super()
            this.state = {
                beers: []
            }
            this.beersService = new beersService()
        }
        componentDidMount = () => this.loadBeersfromApi()

        loadBeersfromApi = () => {
            this.beersService
                .getAllBeers()
                .then(response => this.setState({beers: response.data}))
                .catch(error => console.log('Error: ', error)) 
        }
        
        render() {
            return(
                <>
                <h1>List of beers</h1>

                {this.state.beers.map(beer => <div key={beer._id}><BeersCard {...beer} /></div>)}

                </>
            )
        }


}

export default BeersList