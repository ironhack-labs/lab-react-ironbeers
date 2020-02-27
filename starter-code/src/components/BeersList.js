import React, { Component } from 'react'

import BeerServices from '../services/beers.services'

import BeerCard from './BeerCard'

import Row from 'react-bootstrap/Row'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeerServices()
    }

    // componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beers)
        return (
            <div>

                <h1>Beers list</h1>


                <Row>
                    {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                </Row>


            </div>
        )
    }
}

export default BeersList