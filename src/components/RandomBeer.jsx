import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class RandomBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                beer: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                <div className='Random-Beer'>
                <h2>{this.state.beer.name}</h2>
                <h3>{this.state.beer.tagline}</h3>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
                </div>
            </div>
        );
    }
}

export default RandomBeer;
