import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(){
        super()
        this.state = {
            RandomBeers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({RandomBeers: response.data})
            console.log(response)
        })
    
    }

    render() {
         return (
            <div>
            <img className = 'beer-image' src={this.response.image_url} alt='randombeer'/> 
            <h4>{this.response.name}</h4>
            <p>{this.response.tagline}</p>
            <p>{this.response.first_brewed}</p>
            <p>{this.response.attenuation_level}</p>
            <p>{this.response.description}</p>
            <p>Contributed by:{this.response.contributed_by}</p>
            </div>
         )}
            

        
    }


export default RandomBeer;