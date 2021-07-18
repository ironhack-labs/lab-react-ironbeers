import React, { Component } from 'react';
import Nav from './MyNav';
import axios from 'axios';

class RandomBeer extends Component {

    state = {
        randomBeer: []
    }

    async componentDidMount() {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            console.log('recieved response')
            this.setState({
                randomBeer: response.data
            })
        }
        catch(error) {
            console.log('Failed to fetch a random beer', error)
        }
    }


    render() {
        const {randomBeer} = this.state
        return (
            <div>
                <Nav />
                <img src={randomBeer.image_url} style={{width: '200px'}} alt={randomBeer.name}></img>
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.tagline}</h3>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer