import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import AllBeerCard from './AllBeerCard'

export class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            query: ''
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
        .catch( error => console.log(error) )
    }
    getAllBeersCards = () => {
        const {beers} = this.state
        return beers.map(beer => <AllBeerCard key={beer._id} beer={beer} />)
    }
    handleSearch = ({target}) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${target.value}`)
        .then(({data: beersFiltered}) => {
            this.setState(state => ({
                ...state,
                query: target.value,
                beers: beersFiltered
            }))            
        })
        .catch( error => console.log(error) )
    }
    render() {
        return (
            <div>
                <Header />
                <input className="form-control m-4" name='search' value={this.state.search} onChange={this.handleSearch} placeholder='Search...' />
                {this.getAllBeersCards()}
            </div>
        )
    }
}

export default AllBeers

