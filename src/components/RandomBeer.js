import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class RandomBeer extends Component{
    constructor(){
        super();

        this.state = {
            random: {},
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then( response => {
            this.setState({random: response.data})
        })
    }

    render(){
        return(
        <div>
        <Header />
            <h1>Hola</h1>
            <p>{this.state.random.name}</p>
            <img src={this.state.random.image_url} alt="beer-image"/>
            <p>{this.state.random.name}</p>
            <p>{this.state.random.tagline}</p>
            <p>{this.state.random.first_brewed}</p>
            <p>{this.state.random.attenuation_level}</p>
            <p>{this.state.random.description}</p>
            <p>{this.state.random.contributed_by}</p>
        </div>
        )
    }
}

export default RandomBeer;