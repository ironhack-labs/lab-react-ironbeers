import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((allBeers) => {
            console.log(allBeers)
            this.setState({
                beers: allBeers.data
            })
        })
    }

    render() {
        return (
            <div>
                <Nav />
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
