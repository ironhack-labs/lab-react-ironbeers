import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            query: ''
        }
    }
    

    getBeerFromApi = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => { 
            console.log(response.data);
            this.setState({
                beers: response.data
            })
        })
    }

    

    searchedBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`)
        .then(response => {
            this.setState({
                beers: response.data
            })
        })
    }

    componentDidMount() {
        this.getBeerFromApi();
    }


    handleInputChange = event => {
        this.setState({
            query: event.target.value
        })
        this.searchedBeer();
    }

    render() {
        return (
            <div>
            <h1>{this.state.query}</h1> 
            <h1>All Beers</h1>
            <div>
                <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.handleInputChange}
                />
            </div>

            {/* <Searchbar
                query={this.state.query}
                setQuery={this.setQuery}
            /> */}
            {
                this.state.beers.map(beer => {
                    return (
                    <div> 

                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt=""/>
                        <div>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </Link>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}
