import Axios from 'axios'
import React, { Component } from 'react'

const BEERS_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers'


export default class BeerDetail extends Component {
    
    state = {
        beers: ''
    }


    componentDidMount () {
        Axios 
        .get(BEERS_FROM_DB)
        .then(response => {
            this.setState({ beers: response.data })
        })
    }

    
    
    render() {
        if(this.state.beers.length < 1) {
            return <h1>Loading</h1>
        }

        const id = this.props.match.params.idBeer
        const beersArray = this.state.beers
        const beerDetails = beersArray.find(beer => beer._id === id)
        console.log(beerDetails)

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
