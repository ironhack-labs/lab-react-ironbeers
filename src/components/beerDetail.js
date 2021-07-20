import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class beerDetail extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        //console.log(this.props.match.params.id)

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
            <div class ="showBeer">
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_url} width='50' alt="logo" ></img>
                <li> food pairing: 
                    <strong> {this.state.beer.food_pairing}</strong>
                </li>
                <li> description: 
                    <strong> {this.state.beer.description}</strong>
                </li>
                <li>first brewed: 
                    <strong> {this.state.beer.first_brewed}</strong>
                </li>
            </div>
        )
    }
}


