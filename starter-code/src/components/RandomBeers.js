import React, { Component } from 'react';
import axios from 'axios';

class RandomBeers extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
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

    render () {
        const { beer } = this.state
        return (
            <div>
                 <img src={beer.image_url}></img>
                 <p>{beer.name}</p>
                 <p>{beer.tagline}</p>
                 <p>{beer.first_brewed}</p>
                 <p>{beer.attenuation_level}</p>
                 <p>{beer.description}</p>
                 <p>{beer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeers;