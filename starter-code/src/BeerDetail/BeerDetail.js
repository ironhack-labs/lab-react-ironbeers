import React, { Component } from 'react'
import axios from "axios";
const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/";

export default class BeerDetail extends Component {
    constructor(){
        super();
        this.state = {
            beer: {}
        }
    }

    render() {
        return (
            <div className="single-wrapper">
                <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                <div className="single-title">
                    <div className="text-info"><h2>{this.state.beer.name}</h2><p>{this.state.beer.tagline}</p></div>
                    <div className="numeric-info"><p>{this.state.beer.attenuation_level}</p><p>{this.state.beer.first_brewed}</p></div>
                </div>
                <p className="description">{this.state.beer.description}</p>
                <p className="contributor">{this.state.beer.contributed_by}</p>
            </div>
        )
    }

    componentDidMount() {
        if(this.props.beer){
            axios.get(apiUrl + this.props.beer).then(beer => {
                this.setState({
                  ...this.state,
                  beer: beer.data
                });
              });
        }else{
            axios.get(apiUrl + "random").then(beer => {
                this.setState({
                  ...this.state,
                  beer: beer.data
                });
              });
        }
      }
}
