import React, { Component } from 'react'
import axios from 'axios';

export default class randomBeer extends Component {

    state = {
        randBeer: {}
    }

    componentDidMount() {
        console.log(this.state.randBeer)
        // I am loggin an empty object here, right?

        axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        )
        .then (response => {
            console.log(response.data);
        // Here: Objekt not empty anymore becuase it got response from API.
            this.setState({
                randBeer: response.data,
              });
        })
        .catch (err => console.log(err)) 
    }

    render() {
        return (
            <div>
                <h1>{this.state.randBeer.name}</h1>
                <img src={this.state.randBeer.image_url} width='50' alt="logo" ></img>
                <li> food pairing: 
                    <strong> {this.state.randBeer.food_pairing}</strong>
                </li>
                <li> description: 
                    <strong> {this.state.randBeer.description}</strong>
                </li>
                <li>first brewed: 
                    <strong> {this.state.randBeer.first_brewed}</strong>
                </li>
            </div>
        )
    }
}
