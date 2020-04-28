import React, { Component } from 'react';
import axios from 'axios';

class BeerInfo extends Component {

    constructor(){
        super()
        this.state = {
            beers: {}
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beers) => {
            console.log(beers.data);
            this.setState({
                beers: beers.data
            })
        })
        .catch((error) => {
            this.setState({
                error: error,
            })
        })
    }

    render(){
        return(
            <div>
                <img src={this.state.image_url} />
                <h1>{this.state.name}</h1>
                <p>{this.state.tagline}</p>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}

export default BeerInfo;