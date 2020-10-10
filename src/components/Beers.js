import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default class Beers extends Component {
    state = {
        beers: [],
        search: '',
    }

    componentDidMount = () => {
        this.search("")
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.search(value)
    }

    search = (query) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`).then((allBeers) => {
            console.log(allBeers)
            this.setState({
                beers: allBeers.data,
                search: query
            })
        })
    }

    render() {
        return (
            <div>
                <Nav />
                Search
                <input onChange={this.handleChange} type="text" name="search"></input>

                {this.state.beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <Link to={`/beers/${beer._id}`} className="beer-container">
                                <img src={beer.image_url} />
                                <h2>{beer.name}</h2>
                                <h4>{beer.tagline}</h4>
                                <p>Created by: {beer.contributed_by.split('<')[0]}</p>
                            </Link>
                        </div>)
                })}

            </div>
        )
    }
}
