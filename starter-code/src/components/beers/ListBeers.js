import React, { Component } from 'react'
import BeerServices from '../../services/beer.services'

import Navbar from '../ui/Navbar'
import Row from 'react-bootstrap/Row';

import BeerCard from './BeerCard'

class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(AllBeers => this.setState({ beers: AllBeers }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beers)

        return (
            <>
                <Navbar />
                <Row>
                    {this.state.beers.map((elm, idx) => <BeerCard key={idx} {...elm} />)}
                </Row>
            </>
        )
    }
}


export default BeerList
