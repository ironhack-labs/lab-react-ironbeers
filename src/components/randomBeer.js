import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class RandomBeer extends React.Component {

    state = {
        randomBeer: []
    }

    async componentDidMount() {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            console.log('check if received random beer:', response)
            this.setState({
                randomBeer: response.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    render() {
        const {randomBeer} = this.state
        return (
            <div>
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