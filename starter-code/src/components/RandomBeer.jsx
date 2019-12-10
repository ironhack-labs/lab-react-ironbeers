import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(props){
        super(props)
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
        const random = this.state.RandomBeers
         return (
            <div>
            <img className = 'beer-image' src={random.image_url} alt='randombeer'/> 
            <h4>{random.name}</h4>
            <p>{random.tagline}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>Contributed by:{random.contributed_by}</p>
            </div>
         )}
            

        
    }


export default RandomBeer;