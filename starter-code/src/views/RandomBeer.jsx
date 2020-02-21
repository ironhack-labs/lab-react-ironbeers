import Header from "./../components/header";
import axios from "axios";

import React, { Component } from 'react'

export default class RandomBeer extends Component {

    state = {
        beers: [],
        beer: null,
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
      };

    getRandomBeer(array) {
        let arr;
        arr= array[Math.floor(Math.random() * Math.floor(array.length))]
        return arr;
    }

    componentDidMount() {
        axios
          .get(this.state.APIEndpoint)
          .then(apiRes => 
            {
            let beer = this.getRandomBeer(apiRes.data)
            console.log(beer)
            this.setState({ beer: beer })
        })
          .catch(apiErr => console.error(apiErr));
      }


    render() {

        return this.state.beer ? (
            <div>
                <Header/>
                <h1>Random Beer page</h1>
                <p>{this.state.beer.name}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.brewers_tips}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        ): <div>Beer coming...</div>
    }
}
