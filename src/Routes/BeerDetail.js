import React, { Component } from 'react';
import BeerCard from './../Components/BeerCard.js';
import axios from 'axios';

class BeerDetail extends Component {
    constructor() {
        super();
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            this.setState({beers: response.data});
            console.log("AAAA", response.data)
        })
        .catch(error => {console.log("ERRO", error)})
    }

    render() {
        const beerId = this.props.match.params.id;
        console.log('beer', beerId);
        const beer = this.state.beers.filter(item => {
            console.log("$$$$", item._id)
            return item._id === beerId;
        })
        console.log(beer)

        const listBeers = beer.map(item => {
            return (
            <div>
              <BeerCard name={item.name} image_url={item.image_url} text={item.tagline}/> 
            </div>
            )
        })
    
        return listBeers;

      }
}

export default BeerDetail;