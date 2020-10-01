import React, { Component } from 'react'

import beerService from './../../../service/beersApi'
import BeerCard from './BeerCard'

class BeersList extends Component {

     constructor() {
        super()
        this.state = {
            beers: []

        }
        this.beerService = new beerService()
    }
    componentDidMount = () => {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers:response.data }))                 
            .catch(err => console.log('ERROR', err))
     }

    render() {
        return (
            <main className="container">
                <h1>All the Iron Beers</h1>
                <div className="row d-flex align-items-stretch">
                {this.state.beers.map(elm => <BeerCard key={elm._id} id={elm._id} image={elm.image_url} name={elm.name} tagline={elm.tagline} contributed_by={elm.contributed_by}/>)}

                </div>



            </main>

        )
    }
}

export default BeersList
