import React, { Component } from 'react';
import axios from 'axios';

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
                    <img className="details-img" src={this.state.image_url} />
                    <div className="main-info-div">
                        <div>
                            <h2 className="details-name">{this.state.name}</h2>
                            <p className="tagline">{this.state.tagline}</p>
                        </div>
                        <div className="details-nr">
                            <p className="att">{this.state.attenuation_level}</p>
                            <p className="date">{this.state.first_brewed}</p>
                        </div>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                        <p>{this.state.contributed_by}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default RandomBeer