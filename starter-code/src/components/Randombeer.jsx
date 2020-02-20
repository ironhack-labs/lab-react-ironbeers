import React, { Component } from 'react';
import axios from 'axios';
import Navmain from './Navmain';

export default class ListOneBeer extends Component {
    state = {
        beer : [],
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers/random"
    };

    componentDidMount() {
        axios
        .get(this.state.APIEndpoint)
        .then(apiRes =>  this.setState({ beer : apiRes.data }))
        .catch(apiErr => console.error(apiErr));
        
    }

    render() 
    {
    
            return (
            <div>
            <Navmain />
             {
                   
                        <div className="displaybeers">
                            <div className="imagebeer">
                              <img src={this.state.beer.image_url} alt="beerpic" />
                             
                            </div>
                        <div className="nametagcontributed">
                        <p className="name">{this.state.beer.name}</p> 
                        <p className="tag">{this.state.beer.tagline}</p> 
                        <p className="first_brewed">{this.state.beer.first_brewed}</p> 
                        <p className="attenuation">{this.state.beer.attenuation_level}</p>
                        <p className="description">{this.state.beer.description}</p> 
                        <p className="contributed">Created by : {this.state.beer.contributed_by}</p>
                        </div>
                        
                        </div>
                               
             }
             </div>

            )}}