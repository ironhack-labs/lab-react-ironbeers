import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

class BeerDetails extends Component {
    constructor(props){
        super(props);
        this.state = {}
        }
    

    componentDidMount() {
        this.getSingleBeer();
    }

    getSingleBeer = () => {
        const { params } = this.props.match;
        axios  
            .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then(responseFromApi => {
                const theBeer = responseFromApi.data;
                this.setState(theBeer);
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
            </div>
        )
    }
}

export default BeerDetails