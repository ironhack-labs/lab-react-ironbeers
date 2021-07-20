import React, { Component } from 'react'
import axios from 'axios';

export default class beerDetail extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id)

        axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
        )
        .then (response => {
            console.log(response.data);
            this.setState({
                beer: response.data,
              });
        })
        .catch (err => console.log(err)) 
    }

    render() {

        return (
            <div>
                <li>
                {this.state.beer.name}
                </li>
                <li>
                {this.state.beer.food_pairing}
                </li>
            </div>
        )
    }
}


