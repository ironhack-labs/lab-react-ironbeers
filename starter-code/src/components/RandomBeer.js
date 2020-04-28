import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

//IT.5

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                this.setState({
                    beer: response.data,
                })
            })
            .catch((error) => {
                this.setState({
                    error: error,
                })
            })
    }
    render() {
        const { beer } = this.state;
        return (
            <div>
                <Nav />
                <div>
                    <img src={beer.image_url}></img>
                </div>
                    <div>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                </div>
        )
    }
}

export default RandomBeer; 