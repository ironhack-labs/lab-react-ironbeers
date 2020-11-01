import axios from 'axios'
import React, { Component } from 'react'
import BeerInfo from './BeerInfo'

export default class RandomBeer extends Component {

    state = {
        beer: {}
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => {
            this.setState({
                beer: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <BeerInfo beer={this.state.beer} />
            </div>
        )
    }
}
