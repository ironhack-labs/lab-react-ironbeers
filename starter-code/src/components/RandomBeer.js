import React, { Component } from 'react';
import Header from "./Header";
import axios from 'axios';


class RandomBeer extends Component {
    constructor() {
        //console.log("RandomBeer --> constructor()");
        super()
        this.state = {
            randomBeer: {}            
        }
    }
         
    componentDidMount() {
        //console.log("RandomBeer--> componentDidMount() BeerDetail")
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                //console.log("RandomBeer --> Promise resolved")
                this.setState({ randomBeer: response.data })
            })
    }    

    render() {
        //console.log("RandomBeer --> render()")
               
        return (
            <div>
                <Header />
                <h1>Beer Details</h1>
                <div className = "beer-container">         
                        <img src = {this.state.randomBeer.image_url} alt= "beer"></img>
                        <h2>{this.state.randomBeer.name}</h2>
                        <p>{this.state.randomBeer.tagline}</p>
                        <p>{this.state.randomBeer.first_brewed}</p>
                        <p>{this.state.randomBeer.attenuation_level}</p>
                        <p>{this.state.randomBeer.description}</p>
                        <p>{this.state.randomBeer.contributed_by}</p>
                </div>  
            </div>
        )
    }
}

export default RandomBeer;