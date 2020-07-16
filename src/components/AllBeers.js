import React, { Component } from 'react'
import BeerService from './../service/BeerService'
import Row from 'react-bootstrap/Row'
import BeerDetail from './BeerDetail'

class AllBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new BeerService
    }
    componentDidMount = () => this.updateBeers()
    updateBeers = () => {
        this.beerService
            .getAllBeers()
            .then(response => {
                this.setState({ beers: response.data })
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log('traza', this.state.beers);
        return (
            <>
                <Row>
                    {this.state.beers.map(elm => <BeerDetail key={elm._id} {...elm} />)}
                </Row>
            </>
        )
    }
}

export default AllBeers