import React, { Component } from 'react'
import BeersService from "../services/beer.service"
import AllBeersList from './AllBeersList'

export default class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }

        this.service = new BeersService()
    }


    componentDidMount() {
        this.refreshBeers()
    }

    refreshBeers = () => {
        this.service.getAllBeers()
            .then(response => {
                const beers = response.data

                this.setState({ beers })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                <h1>All Beers</h1>
                <div>
                    <AllBeersList refreshBeers={this.refreshBeers} beers={this.state.beers} />
                </div>
            </div>
        )
    }
}
