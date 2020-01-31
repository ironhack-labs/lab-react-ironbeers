import React, { Component } from 'react';
import Header from "./Header";
import axios from 'axios';


class BeerDetails extends Component {
    constructor() {
        //console.log("BeerDetail --> constructor()");
        super()
        this.state = {
            selectedBeer: {}            
        }
    }
         
    componentDidMount() {
        //console.log("BeerDetail--> componentDidMount() BeerDetail")
        //console.log("props", this.props)
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerID}`)
            .then(response => {
                //console.log("BeerDetail --> Promise resolved")
                this.setState({ selectedBeer: response.data })
            })
    }    

    render() {
        //console.log("BeerDetail --> render()")
        //console.log("selectedBeer", this.state.selectedBeer)        
        return (
            <div>
                <Header />
                <h1>Beer Details</h1>
                <div className = "beer-container">         
                        <img src = {this.state.selectedBeer.image_url} alt= "beer"></img>
                        <h2>{this.state.selectedBeer.name}</h2>
                        <p>{this.state.selectedBeer.tagline}</p>
                        <p>{this.state.selectedBeer.first_brewed}</p>
                        <p>{this.state.selectedBeer.attenuation_level}</p>
                        <p>{this.state.selectedBeer.description}</p>
                        <p>{this.state.selectedBeer.contributed_by}</p>
                </div>  
            </div>
        )
    }
}

export default BeerDetails;