import { Component } from 'react'

import BeersService from './../../../service/beers.service'

import Header from './../../layout/Header'
import BeerRow from './BeerRow'

class BeerCard extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined,
        }

        this.beerService = new BeersService()
    }

    componentDidMount() {
        this.loadBeer()
    }

    loadBeer() {
        console.log(this.props)
        if (this.props) {
            this.beerService
                .getOneBeer(this.props.match.params.beer_id)
                .then(response => this.setState({ beer: response.data }))
                .catch(err => console.log(err))
        } else {
            this.beerService
                .getRandomBeer()
                .then(response => this.setState({ beer: response.data }))
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <Header />
                <BeerRow beer={this.state.beer} />
            </>
        )
    }
}

export default BeerCard