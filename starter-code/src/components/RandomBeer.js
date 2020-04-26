import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

class RandomBeer extends Component {
    constructor() {
        super();

        this.state = {
            randomBeer: {}
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                randomBeer: response.data
            });
        })
    }

    render() {
        return (
            <div>
                <SingleBeer beer={this.state.randomBeer} />
            </div>
        );
    }
}

export default RandomBeer;