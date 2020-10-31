import Axios from 'axios'
import React, { Component } from 'react'

const RANDOMBEER_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers/random'


export default class RandomBeer extends Component {
    
    state = {
        randomBeer: ''
    }


    componentDidMount () {
        Axios 
        .get(RANDOMBEER_FROM_DB)
        .then(response => {
            this.setState({ randomBeer: response.data })
        })
    }

    
    
    render() {
        if(this.state.randomBeer.length < 1) {
            return <h1>Loading</h1>
        }

        const beerDetails = this.state.randomBeer
        return (
            <div>
                <img src={beerDetails.image_url} alt={beerDetails.name}></img>
                <h2>{beerDetails.name}</h2>
                <h3>{beerDetails.tagline}</h3>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <h4>Created by: {beerDetails.contributed_by}</h4>

            </div>
        )
    }
}
