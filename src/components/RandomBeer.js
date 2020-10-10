import React, { Component } from 'react'
import Nav from './Nav'
import axios from 'axios'

export default class RandomBeer extends Component {
    state = {
        details: []
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((beer) => {
            console.log(this.props.match.params.id)
            console.log(beer.data)
            this.setState({
                details: beer.data
            })
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <img src={this.state.details.image_url} alt={this.state.name} />
                <div>{this.state.details.name}</div>
                <div>{this.state.details.tagline}</div>
                <div>{this.state.details.first_brewed}</div>
                <div>{this.state.details.attenuation_level}</div>
                <div>{this.state.details.description}</div>
                <div>{this.state.details.contributed_by}</div>
            </div>
        )
    }
}
