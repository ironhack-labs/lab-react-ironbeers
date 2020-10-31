import React, { Component } from 'react'

export default class RandomBeer extends Component {
    state = {
        randomBeer: ''
    }

    RANDOM_BEER = 'https://ih-beers-api2.herokuapp.com/beers/random'

    componentDidMount() {
        fetch(this.RANDOM_BEER)
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                randomBeer: data
            })
        })
    }

    render() {
        if (this.state.randomBeer.length < 1) {
            return <h3>Loading... </h3>
        }
        return (
            <div>
            <img src={`${this.state.randomBeer.image_url}`} alt=""/>
              <div>{this.state.randomBeer.name}</div>
              <div>{this.state.randomBeer.tagline}</div>
              <div>{this.state.randomBeer.first_brewed}</div>
              <div>{this.state.randomBeer.attenuation_level}</div>
              <div>{this.state.randomBeer.description}</div>
              <div>{this.state.randomBeer.contributed_by}</div>

            </div>
        )
    }
}
