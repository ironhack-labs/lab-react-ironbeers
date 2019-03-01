import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './NavBar'
import { NavLink } from 'react-router-dom'

export default class RandomBeer extends Component {

    state = {
        oneBeer: [],
        isLoading: true
    }

    getOneBeer = () => {
        axios.get('https://ironbeer-api.herokuapp.com/beers/random')
            .then(beerArray => {
                this.setState({
                        oneBeer: beerArray.data,
                        isLoading: false
                    })
                })
            }
        handleClick = () => {
                    this.setState({
                        isLoading: true
                    })
                }
        
        componentDidMount() {
                    this.getOneBeer()
                }
        componentDidUpdate(prevProps, prevState) {
                    if(this.state.isLoading && !prevState.isLoading) {
            this.getOneBeer()
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <Navbar />
                {this.state.oneBeer.map((beer) => {
                    return (
                        <div key={beer._id} className="card-border">
                            <img src={beer.image_url} alt={beer.name} height="300px" />
                            <div className="card-body">
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <h4>{beer.first_brewed}</h4>
                                <h4>{beer.attenuation_level}</h4>
                                <p>{beer.description}</p>
                                <p>Created by: {beer.contributed_by} </p>
                            </div>
                        </div>
                    )
                })}
                <br /> <NavLink to="/random-beer" onClick={this.handleClick}>Get another random beer</NavLink>
            </div>
        )
    }
}