import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state = {}
        }
    

    componentDidMount() {
        this.getRandomBeer();
    }

    getRandomBeer = () => {
        axios  
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(responseFromApi => {
                const randomBeer = responseFromApi.data;
                this.setState(randomBeer);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <img src={this.state.image_url} />
                    <div>
                        <h2>{this.state.name}</h2>
                        <p>{this.state.tagline}</p>
                    </div>
                    <div>
                        <p>{this.state.attenuation_level}</p>
                        <p>{this.state.first_brewed}</p>
                    </div>
                    <p>{this.state.description}</p>
                    <p>{this.state.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default RandomBeer