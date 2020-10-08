import React, { Component } from 'react'
import beerApi from '../api/beerApi.js'

export default class RandomBeer extends Component {

    state = {
        beer: null,
    }

    componentDidMount() {
        beerApi.getRandomBeer().then((apiRes) => {
            this.setState({
                beer: apiRes.data
            })
        })
    }

    render() {
        let oneBeer = this.state.beer
        return (
            <div>{ oneBeer && <>
                <img src={oneBeer.image_url} alt=''/>
                <h1>{oneBeer.name}</h1>
                <h2>{oneBeer.tagline}</h2>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>
            </>}
            </div>
        )
    }
}
