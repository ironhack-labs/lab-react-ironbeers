import React, { Component } from 'react';
import BeerCard from './../Components/BeerCard.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
    constructor() {
        super();
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        const listBeers = this.state.beers.map(beer => {
            return (
            <Link to={`/beer/${beer._id}`}>
              <BeerCard name={beer.name} image_url={beer.image_url} text={beer.tagline} /* _id={beer._id} *//> 
            </Link>
            )
        })
    
        return listBeers;
      }
}

export default AllBeers;