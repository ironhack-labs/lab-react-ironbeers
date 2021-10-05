import axios from 'axios'
import React, { Component } from 'react'

export default class RandomBeer extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((result) => {
            this.setState({
beer: result.data
            }
            )
        })
    }

    render() {

        return (
            <div>
                <img src={this.state.beer.image_url} />
                <h3>{this.state.beer.name}</h3>
                <p>{this.state.beer.tagline}</p>
                <p>First brewed: {this.state.beer.first_brewed}</p>
                <p>Attenuation level: {this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p><em>Contributed by: {this.state.beer.contributed_by}</em></p>
            </div>
        )
    }
}

