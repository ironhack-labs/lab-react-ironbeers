import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import AllBeerCard from './AllBeerCard'

export class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }
    componentDidMount = () => {
        this.getAllBeers()
    }
    getAllBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(({data: allBeers}) => {
            this.setState(state => ({
                ...state,
                beers: allBeers
            }))
        })
    }
    getAllBeersCards = () => {
        const {beers} = this.state
        return beers.map(beer => <AllBeerCard key={beer._id} beer={beer} />)
    }
    render() {
        return (
            <div>
                <Header />
                {this.getAllBeersCards()}
            </div>
        )
    }
}

export default AllBeers

