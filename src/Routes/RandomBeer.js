import React, { Component } from 'react';
import BeerCard from './../Components/BeerCard.js';
import axios from 'axios';

class RandomBeer extends Component {
    constructor() {
        super();
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/random")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        const listBeers = this.state.beers.map(beer => {
            return (
              <BeerCard name={beer.name} image_url={beer.image_url} text={beer.tagline} _id={beer._id}/> 
            )
        })
    
        return listBeers;
      }
}

export default RandomBeer;