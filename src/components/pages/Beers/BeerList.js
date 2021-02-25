import { Component } from 'react'

import BeersService from './../../../service/beers.service'

import Header from './../../layout/Header'
import BeerRow from './BeerRow'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }

        this.beerService = new BeersService()
    }

    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beerService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Header />
                {this.state.beers.map(elm => <BeerRow beer={elm} key={elm._id} />)}
            </>
        )
    }
}

export default BeerList