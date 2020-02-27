import React, { Component } from 'react'
import BeerServices from '../../services/beer.service.js'
import Card from "../card.js"
import Row from 'react-bootstrap/Row'

class AllBeer extends Component {

    constructor() {
        super()
        this.state = {}
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getAllBeer()

    getAllBeer = () => {
        this.services.getBeer()
            .then(allBeer => this.setState({ beers: allBeer }))
            .catch(err => console.log(err))
    }

    render() {
    
        return (
            <Row>
                {this.state.beers && (this.state.beers.map((elm, idx) => <Card {...elm} key={idx} />))}
            </Row>
        )
    }
}

export default AllBeer