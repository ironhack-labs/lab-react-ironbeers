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
    componentDidMount = async () => {
        const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState(state => ({
            ...state,
            beers: data
        }))
    }
    getAllBeers = () => {
        const {beers} = this.state
        return beers.map(beer => <AllBeerCard key={beer._id} beer={beer} />)
    }
    render() {
        return (
            <div>
                <Header />
                {this.getAllBeers()}
            </div>
        )
    }
}

export default AllBeers

